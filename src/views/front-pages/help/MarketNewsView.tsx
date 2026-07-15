"use client";

import NewsCta from "@/components/Front-Pages/Learning/News-cta";
import NewsHero from "@/components/Front-Pages/Learning/News-hero";
import NewsList from "@/components/Front-Pages/Learning/News-list";

interface MarketNewsViewProps {
  lang: string;
}

export function MarketNewsView({ lang }: MarketNewsViewProps) {
  return (
    <div>
      <NewsHero lang={lang} />
      <NewsList />
      <NewsCta />
    </div>
  );
}
