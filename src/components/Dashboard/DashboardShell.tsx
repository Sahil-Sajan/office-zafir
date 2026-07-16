"use client";

import { ReactNode } from "react";
import { DashboardProvider } from "@/contexts/DashboardContext";
import { useDashboard } from "@/contexts/DashboardContext";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

function ShellLayout({ children, lang }: { children: ReactNode; lang: string }) {
  const { sidebarCollapsed } = useDashboard();

  return (
    <div className="flex h-screen overflow-hidden bg-background" dir="ltr">
      <Sidebar lang={lang} />
      <div
        className={`flex flex-1 flex-col transition-all duration-300 ${sidebarCollapsed ? "ml-[72px]" : "ml-[260px]"
          }`}
      >
        <Topbar lang={lang} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

export function DashboardShell({
  children,
  lang,
}: {
  children: ReactNode;
  lang: string;
}) {
  return (
    <DashboardProvider>
      <ShellLayout lang={lang}>{children}</ShellLayout>
    </DashboardProvider>
  );
}
