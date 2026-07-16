"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  label: string;
  value: string;
  trend?: string;
  trendDir?: "up" | "down" | "neutral";
  icon?: LucideIcon;
  className?: string;
}

export function KpiCard({ label, value, trend, trendDir = "neutral", icon: Icon, className }: KpiCardProps) {
  return (
    <Card className={cn("bg-surface border-border", className)}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <p className="text-2xl font-bold tracking-tight text-foreground">{value}</p>
            {trend && (
              <div className="flex items-center gap-1">
                {trendDir === "up" && <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />}
                {trendDir === "down" && <TrendingDown className="h-3.5 w-3.5 text-red-accent" />}
                <span
                  className={cn(
                    "text-xs font-semibold",
                    trendDir === "up" && "text-emerald-600",
                    trendDir === "down" && "text-red-accent",
                    trendDir === "neutral" && "text-muted-foreground"
                  )}
                >
                  {trend}
                </span>
              </div>
            )}
          </div>
          {Icon && (
            <div className="rounded-lg bg-primary/10 p-2.5">
              <Icon className="h-5 w-5 text-primary" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
