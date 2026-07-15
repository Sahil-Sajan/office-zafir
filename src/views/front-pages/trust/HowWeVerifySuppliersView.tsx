"use client";

import VerifyBadge from "@/components/Front-Pages/How-we-verify/Badge";
import VerifyCriteria from "@/components/Front-Pages/How-we-verify/Criteria";
import VerifyHero from "@/components/Front-Pages/How-we-verify/Verify-Hero";
import VerifyProcess from "@/components/Front-Pages/How-we-verify/Verify-process";
import VerifyCTA from "@/components/Front-Pages/How-we-verify/Verifycta";


interface HowWeVerifySuppliersViewProps { lang: string; }

export function HowWeVerifySuppliersView({ lang }: HowWeVerifySuppliersViewProps) {
  return (
    <div className="container mx-auto ">
      <VerifyHero />
      <VerifyProcess />
      <VerifyCriteria />
      <VerifyBadge />
      <VerifyCTA />
    </div>
  );
}