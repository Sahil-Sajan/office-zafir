"use client";

import LoyaltyHero from "@/components/Front-Pages/Loyalty/Loyalty-hero";
import Tiers from "@/components/Front-Pages/Loyalty/Tiers";
import HowYouEarn from "@/components/Front-Pages/Loyalty/HowYouEarn";
import PointSimulator from "@/components/Front-Pages/Loyalty/PointSimulator";
import FlashSaleAccess from "@/components/Front-Pages/Loyalty/FlashSaleAccess";

export function LoyaltyView({ lang }: { lang: string }) {
  return (
    <div>
      <LoyaltyHero />
      <Tiers />
      <HowYouEarn />
      <PointSimulator />
      <FlashSaleAccess />
    </div>
  );
}
