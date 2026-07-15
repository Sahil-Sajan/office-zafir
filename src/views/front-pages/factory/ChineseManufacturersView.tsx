"use client";

import ChineseGrid from "@/components/Front-Pages/Factory/Chinese-grid";
import ChineseHero from "@/components/Front-Pages/Factory/Chinese-hero";

interface ChineseManufacturersViewProps {
  lang: string;
}

export function ChineseManufacturersView({ lang }: ChineseManufacturersViewProps) {
  return (
    <div>
      <ChineseHero />
      <ChineseGrid />
    </div>
  );
}
