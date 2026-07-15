"use client";

import InTheNews from "@/components/Front-Pages/Press/In-the-news";
import MediaKitCta from "@/components/Front-Pages/Press/Media-kit-cta";
import PressHero from "@/components/Front-Pages/Press/Press-hero";
import PressReleases from "@/components/Front-Pages/Press/Press-releases";

interface PressMediaViewProps {
  lang: string;
}

export function PressMediaView({ lang }: PressMediaViewProps) {
  return (
    <div>
      <PressHero />
      <PressReleases />
      <InTheNews />
      <MediaKitCta />
    </div>
  );
}
