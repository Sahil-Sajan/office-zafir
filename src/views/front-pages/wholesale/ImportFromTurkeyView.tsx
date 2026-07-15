"use client";

import TurkeyWhySource from "@/components/Front-Pages/Import-from-turkey/Source";
import TurkeyCategories from "@/components/Front-Pages/Import-from-turkey/Turkey-categories";
import TurkeyCTA from "@/components/Front-Pages/Import-from-turkey/Turkey-cta";
import ImportTurkeyHero from "@/components/Front-Pages/Import-from-turkey/Turkey-hero";
import TurkeyShipping from "@/components/Front-Pages/Import-from-turkey/Turkey-shipping";

interface ImportFromTurkeyViewProps { lang: string; }

export function ImportFromTurkeyView({ lang }: ImportFromTurkeyViewProps) {
  return (
    <div className="container mx-auto ">
      <ImportTurkeyHero />
      <TurkeyWhySource />
      <TurkeyCategories />
      <TurkeyShipping />
      <TurkeyCTA />
    </div>
  );
}