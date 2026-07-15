"use client";
import SupplierHero from '@/components/Front-Pages/Supplier/Supplier-hero';


import SupplierBenefits from '@/components/Front-Pages/Supplier/Supplier-benefits';
import SupplierProcess from '@/components/Front-Pages/Supplier/Supplier-process';
import SupplierRequirements from '@/components/Front-Pages/Supplier/Requirements';
import SupplierCTA from '@/components/Front-Pages/Supplier/Supplier-cta';

interface BecomeASupplierViewProps { lang: string; }

export function BecomeASupplierView({ lang }: BecomeASupplierViewProps) {
  return (
    <div className="container mx-auto ">
      <SupplierHero />
      <SupplierBenefits />
      <SupplierProcess />
      <SupplierRequirements />
      <SupplierCTA />


    </div>
  );
}