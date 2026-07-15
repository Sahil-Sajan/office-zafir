"use client";

import ChinaCategories from "@/components/Front-Pages/Import-from-china/China-categories";
import ImportChinaHero from "@/components/Front-Pages/Import-from-china/China-hero";
import ChinaProcess from "@/components/Front-Pages/Import-from-china/China-process";
import ChinaWhySource from "@/components/Front-Pages/Import-from-china/China-source";
import ChinaCTA from "@/components/Front-Pages/Import-from-china/Chinacta";


interface ImportFromChinaViewProps { lang: string; }

export function ImportFromChinaView({ lang }: ImportFromChinaViewProps) {
  return (
    <div className="container mx-auto ">
      <ImportChinaHero />
      <ChinaWhySource />
      <ChinaCategories />
      <ChinaProcess />
      <ChinaCTA />
    </div>
  );
}