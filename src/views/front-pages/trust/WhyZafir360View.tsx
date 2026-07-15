"use client";

import BadgeSection from "@/components/Front-Pages/Trust-safety/Badge-section";
import ControlsTable from "@/components/Front-Pages/Trust-safety/Controls-table";
import DisputeNote from "@/components/Front-Pages/Trust-safety/Dispute-note";
import Marquee from "@/components/Front-Pages/Trust-safety/Marquee";
import ProhibitedGrid from "@/components/Front-Pages/Trust-safety/Prohibited-grid";
import SecurityGrid from "@/components/Front-Pages/Trust-safety/Security-grid";
import TrustHero from "@/components/Front-Pages/Trust-safety/Trust-hero";
import TrustPillars from "@/components/Front-Pages/Trust-safety/Trust-pillars";

interface WhyZafir360ViewProps {
  lang: string;
}

export function WhyZafir360View({ lang }: WhyZafir360ViewProps) {
  return (
    <div>
      <TrustHero />
      <Marquee />
      <TrustPillars />
      <BadgeSection />
      <ControlsTable />
      <SecurityGrid />
      <ProhibitedGrid />
      <DisputeNote />
    </div>
  );
}
