"use client";

import VerificationCriteria from "@/components/Front-Pages/Factory/Verification-criteria";
import VerifiedCta from "@/components/Front-Pages/Factory/Verified-cta";
import VerifiedHero from "@/components/Front-Pages/Factory/Verified-hero";

interface VerifiedFactoriesViewProps {
  lang: string;
}

export function VerifiedFactoriesView({ lang }: VerifiedFactoriesViewProps) {
  return (
    <div>
      <VerifiedHero />
      <VerificationCriteria />
      <VerifiedCta />
    </div>
  );
}
