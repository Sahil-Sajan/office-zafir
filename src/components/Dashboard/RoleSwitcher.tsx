"use client";

import { useDashboard } from "@/contexts/DashboardContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Store, Factory, ShoppingCart } from "lucide-react";
import { type DashboardRole } from "@/config/routes";

const ROLE_CONFIG: Record<DashboardRole, { label: string; description: string; icon: React.ComponentType<{ className?: string }> }> = {
  seller: { label: "Seller", description: "Marketplace storefront", icon: Store },
  supplier: { label: "Supplier", description: "Factory & wholesale", icon: Factory },
  wholesale: { label: "Buyer", description: "Wholesale purchasing", icon: ShoppingCart },
};

export function RoleSwitcher({ lang }: { lang: string }) {
  const { activeRole, switchRole } = useDashboard();
  const config = ROLE_CONFIG[activeRole];
  const Icon = config.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button className="w-full flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 bg-sidebar-accent/50 hover:bg-sidebar-accent text-sidebar-foreground transition-colors cursor-pointer" />
        }
      >
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-sidebar-primary" />
            <div className="text-left">
              <p className="text-sm font-medium">{config.label}</p>
              <p className="text-[11px] text-sidebar-foreground/50">{config.description}</p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-sidebar-foreground/50" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {(Object.keys(ROLE_CONFIG) as DashboardRole[]).map((role) => {
          const RoleIcon = ROLE_CONFIG[role].icon;
          const isActive = role === activeRole;
          return (
            <DropdownMenuItem
              key={role}
              onClick={() => switchRole(role)}
              className="flex items-center gap-3"
            >
              <RoleIcon className="h-4 w-4" />
              <div>
                <p className="text-sm font-medium">{ROLE_CONFIG[role].label}</p>
                <p className="text-[11px] text-muted-foreground">{ROLE_CONFIG[role].description}</p>
              </div>
              {isActive && (
                <Badge variant="secondary" className="ml-auto text-[10px]">
                  Active
                </Badge>
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
