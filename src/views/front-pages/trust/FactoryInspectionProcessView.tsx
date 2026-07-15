"use client";
import FactoryHero from '@/components/Front-Pages/Factory-inspection/Factory-hero';
import FactoryCTA from '@/components/Front-Pages/Factory-inspection/Factorycta';
import InspectionScope from '@/components/Front-Pages/Factory-inspection/Inspection';
import InspectionPartners from '@/components/Front-Pages/Factory-inspection/Partners';
import InspectionReport from '@/components/Front-Pages/Factory-inspection/Report';


interface FactoryInspectionProcessViewProps { lang: string; }

export function FactoryInspectionProcessView({ lang }: FactoryInspectionProcessViewProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <FactoryHero />
      <InspectionScope />
      <InspectionReport />
      <InspectionPartners />
      <FactoryCTA />
    </div>
  );
}