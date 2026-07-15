"use client";

import Bento from "@/components/Front-Pages/Mission-vision/Bento";
import CoreValues from "@/components/Front-Pages/Mission-vision/Core-values";
import MissionHero from "@/components/Front-Pages/Mission-vision/Mission-hero";
import StoryCta from "@/components/Front-Pages/Mission-vision/Story-cta";
import StoryIntro from "@/components/Front-Pages/Mission-vision/Story-intro";
import Targets from "@/components/Front-Pages/Mission-vision/Targets";
import Timeline from "@/components/Front-Pages/Mission-vision/Timeline";

interface OurMissionVisionViewProps {
  lang: string;
}

export function OurMissionVisionView({ lang }: OurMissionVisionViewProps) {
  return (
    <div>
      <MissionHero />
      <Bento />
      <CoreValues />
      <Targets />
      <StoryIntro />
      <Timeline />
      <StoryCta />
    </div>
  );
}
