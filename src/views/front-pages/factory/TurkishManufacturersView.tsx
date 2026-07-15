"use client";

import TurkishGrid from "@/components/Front-Pages/Factory/Turkish-grid";
import TurkishHero from "@/components/Front-Pages/Factory/Turkish-hero";

interface TurkishManufacturersViewProps {
  lang: string;
}

export function TurkishManufacturersView({ lang }: TurkishManufacturersViewProps) {
  return (
    <div>
      <TurkishHero />
      <TurkishGrid />
    </div>
  );
}
