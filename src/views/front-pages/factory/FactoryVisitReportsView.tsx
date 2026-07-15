"use client";

import ReportList from "@/components/Front-Pages/Factory/Report-list";
import ReportsHero from "@/components/Front-Pages/Factory/Reports-hero";

interface FactoryVisitReportsViewProps {
  lang: string;
}

export function FactoryVisitReportsView({ lang }: FactoryVisitReportsViewProps) {
  return (
    <div>
      <ReportsHero />
      <ReportList />
    </div>
  );
}
