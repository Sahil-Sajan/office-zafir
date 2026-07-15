"use client";

import ProfileIncludes from "@/components/Front-Pages/Factory/Profile-includes";
import ProfileSample from "@/components/Front-Pages/Factory/Profile-sample";
import ProfilesHero from "@/components/Front-Pages/Factory/Profiles-hero";

interface FactoryProfilesViewProps {
  lang: string;
}

export function FactoryProfilesView({ lang }: FactoryProfilesViewProps) {
  return (
    <div>
      <ProfilesHero />
      <ProfileIncludes />
      <ProfileSample />
    </div>
  );
}
