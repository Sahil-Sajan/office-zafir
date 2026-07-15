"use client";

import LeadershipCta from "@/components/Front-Pages/Leadership/Leadership-cta";
import LeadershipHero from "@/components/Front-Pages/Leadership/Leadership-hero";
import PersonGrid from "@/components/Front-Pages/Leadership/Person-grid";

interface LeadershipTeamViewProps {
  lang: string;
}

export function LeadershipTeamView({ lang }: LeadershipTeamViewProps) {
  return (
    <div>
      <LeadershipHero />
      <PersonGrid />
      <LeadershipCta />
    </div>
  );
}
