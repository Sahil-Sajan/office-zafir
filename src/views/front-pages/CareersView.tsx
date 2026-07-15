"use client";

import CareersHero from "@/components/Front-Pages/Careers/Careers-hero";
import OpenRoles from "@/components/Front-Pages/Careers/Open-roles";
import Perks from "@/components/Front-Pages/Careers/Perks";

interface CareersViewProps {
  lang: string;
}

export function CareersView({ lang }: CareersViewProps) {
  return (
    <div>
      <CareersHero />
      <Perks />
      <OpenRoles />
    </div>
  );
}
