"use client";
import AffiliateHero from '@/components/Front-Pages/BecomeAnAffiliate/Affiliate-Hero';
import WhyJoin from '@/components/Front-Pages/BecomeAnAffiliate/Why-Join';
import HowItWorks from '@/components/Front-Pages/BecomeAnAffiliate/How-It-Works';
import CommissionStructure from '@/components/Front-Pages/BecomeAnAffiliate/Commission-Structure';
import AffiliateFaq from '@/components/Front-Pages/BecomeAnAffiliate/Affiliate-Faq';
import AffiliateCTA from '@/components/Front-Pages/BecomeAnAffiliate/Cta';

export function BecomeAnAffiliateView({ lang }: { lang: string }) {
  return (
    <div>
      <AffiliateHero />
      <WhyJoin />
      <HowItWorks />
      <CommissionStructure />
      <AffiliateFaq />
      <AffiliateCTA />
    </div>
  );
}
