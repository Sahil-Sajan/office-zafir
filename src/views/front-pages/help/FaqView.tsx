"use client";

import HelpHero from "@/components/Front-Pages/Help/HelpHero";
import GeneralFaqAccordion from "@/components/Front-Pages/Help/GeneralFaqAccordion";

interface FaqViewProps { lang: string; }

export function FaqView({ lang }: FaqViewProps) {
  return (
    <div>
      <HelpHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Answers to the questions buyers, sellers, and suppliers ask most."
      />
      <GeneralFaqAccordion />
    </div>
  );
}
