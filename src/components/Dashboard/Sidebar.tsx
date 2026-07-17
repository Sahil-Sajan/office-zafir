"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDashboard } from "@/contexts/DashboardContext";
import { DASHBOARD_NAV_ITEMS, type DashboardRole } from "@/config/routes";
import { cn } from "@/lib/utils";
import { RoleSwitcher } from "./RoleSwitcher";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  MessageSquare,
  Star,
  Megaphone,
  Wallet,
  Settings,
  FileText,
  BarChart3,
  DollarSign,
  Store,
  FolderOpen,
  Heart,
  RotateCcw,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  ShoppingBag,
  Package,
  MessageSquare,
  Star,
  Megaphone,
  Wallet,
  Settings,
  FileText,
  BarChart3,
  DollarSign,
  Store,
  FolderOpen,
  Heart,
  RotateCcw,
  User,
};

export function Sidebar({ lang }: { lang: string }) {
  const pathname = usePathname();
  const { activeRole, sidebarCollapsed, mobileSidebarOpen, toggleSidebar, closeMobileSidebar } = useDashboard();
  const navItems = DASHBOARD_NAV_ITEMS[activeRole];
  const showExpanded = mobileSidebarOpen || !sidebarCollapsed;

  return (
    <>
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMobileSidebar}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-screen flex-col bg-sidebar text-sidebar-foreground transition-all duration-300",
          "lg:z-40",
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          sidebarCollapsed ? "w-[260px] lg:w-[72px]" : "w-[260px]"
        )}
      >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {showExpanded && (
          <Link href={`/${lang}/dashboard/seller`} className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary text-xs font-bold text-sidebar-primary-foreground">
              Z
            </div>
            <span className="text-lg font-bold text-sidebar-foreground">Zafir360</span>
          </Link>
        )}
        <button
          onClick={toggleSidebar}
          className="hidden lg:flex h-8 w-8 items-center justify-center rounded-md hover:bg-sidebar-accent text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors"
        >
          {sidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
        <button
          onClick={closeMobileSidebar}
          aria-label="Close menu"
          className="flex lg:hidden h-8 w-8 items-center justify-center rounded-md hover:bg-sidebar-accent text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      {/* Role Switcher */}
      {showExpanded && (
        <div className="px-3 py-3 border-b border-sidebar-border">
          <RoleSwitcher lang={lang} />
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive =
              pathname === `/${lang}${item.href}` ||
              (item.href !== `/dashboard/${activeRole}` && pathname.startsWith(`/${lang}${item.href}`));

            return (
              <li key={item.href}>
                <Link
                  href={`/${lang}${item.href}`}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary border-l-2 border-sidebar-primary"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  )}
                >
                  {Icon && <Icon className="h-5 w-5 shrink-0" />}
                  {showExpanded && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      {showExpanded && (
        <div className="border-t border-sidebar-border p-4">
          <p className="text-xs text-sidebar-foreground/40">
            Zafir360 Dashboard v1.0
          </p>
        </div>
      )}
      </aside>
    </>
  );
}
