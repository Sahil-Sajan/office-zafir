"use client";

import Checklist from "@/components/Front-Pages/OpenStore/Checklist";
import SetupSteps from "@/components/Front-Pages/OpenStore/Setup-steps";
import StoreCta from "@/components/Front-Pages/OpenStore/Store-cta";
import StoreHero from "@/components/Front-Pages/OpenStore/Store-hero";
import StorePreview from "@/components/Front-Pages/OpenStore/Store-preview";

interface OpenYourStoreViewProps {
  lang: string;
}

export function OpenYourStoreView({ lang }: OpenYourStoreViewProps) {
  return (
    <div>
      <StoreHero />
      <SetupSteps />
      <StorePreview />
      <Checklist />
      <StoreCta />
    </div>
  );
}
