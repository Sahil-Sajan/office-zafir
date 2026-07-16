"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface ActivityItem {
  icon: LucideIcon;
  title: string;
  description: string;
  time: string;
  color?: string;
}

interface ActivityFeedProps {
  items: ActivityItem[];
  className?: string;
}

export function ActivityFeed({ items, className }: ActivityFeedProps) {
  return (
    <div className={cn("space-y-0", className)}>
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="relative flex gap-3 pb-6 last:pb-0">
            {i < items.length - 1 && (
              <div className="absolute left-[15px] top-8 h-full w-px bg-border" />
            )}
            <div
              className={cn(
                "relative z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border-2 border-border bg-surface",
                item.color
              )}
            >
              <Icon className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground leading-tight">{item.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.description}</p>
              <p className="text-[11px] text-muted-foreground/60 mt-1">{item.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
