"use client";
import DashboardKPI from '@/components/Front-Pages/Seller-benefit/Command-center';
import SellerCTA from '@/components/Front-Pages/Seller-benefit/Cta';
import SellerFeatures from '@/components/Front-Pages/Seller-benefit/Seller-feature';
import SellerBenefitsHero from '@/components/Front-Pages/Seller-benefit/Seller-hero';
import SellerJourney from '@/components/Front-Pages/Seller-benefit/Seller-Journey';

interface SellerBenefitsViewProps { lang: string; }

export function SellerBenefitsView({ lang }: SellerBenefitsViewProps) {
  return (
    <div className="container mx-auto">
      <SellerBenefitsHero />
      <DashboardKPI />
      <SellerFeatures />
      <SellerJourney />
      <SellerCTA />
    </div>
  );
}