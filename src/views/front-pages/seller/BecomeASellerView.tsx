"use client";
import BecomeSellerHero from '@/components/Front-Pages/become-seller/Become-Seller-Hero';
import ModerationNote from '@/components/Front-Pages/become-seller/Moderation-note';
import QuickSetupCards from '@/components/Front-Pages/become-seller/Quick-setup';
import SampleStorefront from '@/components/Front-Pages/become-seller/SampleStore';
import DashboardFeatures from '@/components/Front-Pages/become-seller/Seller-feature';
import OnboardingSteps from '@/components/Front-Pages/become-seller/Steps';
import WholesaleImport from '@/components/Front-Pages/become-seller/Wholesale';
import SellerCTA from '@/components/Front-Pages/Seller-benefit/Cta';

interface BecomeASellerViewProps { lang: string; }

export function BecomeASellerView({ lang }: BecomeASellerViewProps) {
  return (
    <div>
      <BecomeSellerHero />
      <QuickSetupCards />
      <OnboardingSteps />
      <SampleStorefront />
      <WholesaleImport />
      <DashboardFeatures />
      <ModerationNote />
      <SellerCTA />
    </div>
  );
}