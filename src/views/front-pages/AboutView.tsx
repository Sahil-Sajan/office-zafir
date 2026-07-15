"use client";

import AboutCTA from "../../components/Front-Pages/About-us/About-cta";
import AboutHero from "../../components/Front-Pages/About-us/About-hero";
import CoreValues from "../../components/Front-Pages/About-us/Core-values";
import JourneyTimeline from "../../components/Front-Pages/About-us/Journey";
import MissionCards from "../../components/Front-Pages/About-us/Mission-cards";

interface AboutViewProps {
  lang: string;
  about: Record<string, string>;
}

export function AboutView({ lang, about }: AboutViewProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <AboutHero about={about} />
      <MissionCards about={about} />
      <CoreValues about={about} />
      <JourneyTimeline about={about} />
      <AboutCTA about={about} />
    </div>
  );
}
