"use client";

import { useDashboard } from "@/contexts/DashboardContext";
import { usePathname } from "next/navigation";
import { DASHBOARD_NAV_ITEMS } from "@/config/routes";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Bell, LogOut, Settings, User, Search, Menu } from "lucide-react";

export function Topbar({ lang }: { lang: string }) {
  const { user, activeRole, logout, toggleMobileSidebar } = useDashboard();
  const pathname = usePathname();

  const navItems = DASHBOARD_NAV_ITEMS[activeRole];
  const currentItem = navItems.find(
    (item) => pathname === `/${lang}${item.href}`
  );

  const pageTitle =
    currentItem?.label ||
    navItems.find((item) => pathname.startsWith(`/${lang}${item.href}`) && item.href !== `/dashboard/${activeRole}`)?.label ||
    "Overview";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-surface px-4 sm:px-6">
      <div className="flex items-center gap-3 min-w-0">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden shrink-0"
          onClick={toggleMobileSidebar}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-muted-foreground" />
        </Button>
        <h1 className="text-lg font-semibold text-foreground truncate">{pageTitle}</h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-[280px] pl-10 bg-background"
          />
        </div>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-[10px] bg-red-accent text-white">
            3
          </Badge>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 px-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.avatar} alt={user?.name} />
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                {user?.name?.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-medium md:inline-block">{user?.name}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
                <Badge variant="secondary" className="w-fit text-[10px] capitalize">
                  {activeRole}
                </Badge>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout} className="text-red-accent">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
