"use client";

import GiftCardsHero from "@/components/Front-Pages/GiftCards/GiftCards-hero";
import GiftCardComposer from "@/components/Front-Pages/GiftCards/GiftCard-composer";
import GiftCardsHowItWorks from "@/components/Front-Pages/GiftCards/GiftCards-how-it-works";
import GiftCardsDisclaimer from "@/components/Front-Pages/GiftCards/GiftCards-disclaimer";

export function GiftCardsView({ lang }: { lang: string }) {
  return (
    <div>
      <GiftCardsHero />
      <GiftCardComposer />
      <GiftCardsHowItWorks />
      <GiftCardsDisclaimer />
    </div>
  );
}
