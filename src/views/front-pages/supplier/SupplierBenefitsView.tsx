"use client";

import BenefitsCompare from "@/components/Front-Pages/Supplier-benefits/Benefits-compare";
import BenefitsCta from "@/components/Front-Pages/Supplier-benefits/Benefits-cta";
import BenefitsGrid from "@/components/Front-Pages/Supplier-benefits/Benefits-grid";
import BenefitsHero from "@/components/Front-Pages/Supplier-benefits/Benefits-hero";

interface SupplierBenefitsViewProps {
  lang: string;
}

export function SupplierBenefitsView({ lang }: SupplierBenefitsViewProps) {
  return (
    <div>
      <BenefitsHero />
      <BenefitsGrid />
      <BenefitsCompare />
      <BenefitsCta />
    </div>
  );
}
