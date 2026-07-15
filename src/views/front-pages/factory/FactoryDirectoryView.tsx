"use client";

import DirectoryFilterGrid from "@/components/Front-Pages/Factory/Directory-filter-grid";
import DirectoryHero from "@/components/Front-Pages/Factory/Directory-hero";

interface FactoryDirectoryViewProps {
  lang: string;
}

export function FactoryDirectoryView({ lang }: FactoryDirectoryViewProps) {
  return (
    <div>
      <DirectoryHero />
      <DirectoryFilterGrid />
    </div>
  );
}
