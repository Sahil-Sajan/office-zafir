"use client";

import CompareHero from "@/components/Front-Pages/Compare/Compare-hero";
import CompareTable from "@/components/Front-Pages/Compare/Compare-table";
import { useCompare } from "@/contexts/CompareContext";

export function CompareView({ lang }: { lang: string }) {
  const { count } = useCompare();

  return (
    <div>
      <CompareHero count={count} />
      <div className="px-4 sm:px-7 py-8 sm:py-10">
        <div className="max-w-[1180px] mx-auto">
          <CompareTable lang={lang} />
        </div>
      </div>
    </div>
  );
}
