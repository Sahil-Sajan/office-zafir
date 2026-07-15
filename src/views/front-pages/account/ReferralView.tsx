import ReferralHero from "@/components/Front-Pages/Referral/Referral-hero";
import ReferralLink from "@/components/Front-Pages/Referral/Referral-link";
import ReferralSteps from "@/components/Front-Pages/Referral/Referral-steps";
import ReferralStats from "@/components/Front-Pages/Referral/Referral-stats";
import ReferralDisclaimer from "@/components/Front-Pages/Referral/Referral-disclaimer";

export function ReferralView({ lang }: { lang: string }) {
  return (
    <div>
      <ReferralHero />
      <ReferralLink lang={lang} />
      <ReferralSteps />
      <ReferralStats />
      <ReferralDisclaimer />
    </div>
  );
}
