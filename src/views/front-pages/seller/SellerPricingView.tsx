"use client";
import SellerPricingHero from '@/components/Front-Pages/Seller-pricing/Price-hero';
import PricingCards from '@/components/Front-Pages/Seller-pricing/Pricing-cards';
import PricingCTA from '@/components/Front-Pages/Seller-pricing/Pricing-cta';

interface SellerPricingViewProps { lang: string; }

export function SellerPricingView({ lang }: SellerPricingViewProps) {
  return (
    <div className="container mx-auto ">
      <SellerPricingHero />
      <PricingCards />
      <PricingCTA />
    </div>
  );
}