"use client";

import TipsCta from "@/components/Front-Pages/Learning/Tips-cta";
import TipsGrid from "@/components/Front-Pages/Learning/Tips-grid";
import TipsHero from "@/components/Front-Pages/Learning/Tips-hero";

interface BusinessTipsViewProps {
  lang: string;
}

export function BusinessTipsView({ lang }: BusinessTipsViewProps) {
  return (
    <div>
      <TipsHero lang={lang} />
      <TipsGrid />
      <TipsCta />
    </div>
  );
}
