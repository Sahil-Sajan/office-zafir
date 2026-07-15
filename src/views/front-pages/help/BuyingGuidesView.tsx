"use client";

import GuidesCta from "@/components/Front-Pages/Learning/Guides-cta";
import GuidesGrid from "@/components/Front-Pages/Learning/Guides-grid";
import GuidesHero from "@/components/Front-Pages/Learning/Guides-hero";

interface BuyingGuidesViewProps {
  lang: string;
}

export function BuyingGuidesView({ lang }: BuyingGuidesViewProps) {
  return (
    <div>
      <GuidesHero lang={lang} />
      <GuidesGrid />
      <GuidesCta />
    </div>
  );
}
