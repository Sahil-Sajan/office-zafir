"use client";

import WholesaleCategories from "@/components/Front-Pages/Wholesale-marketplace/Categories";
import WholesaleProcess from "@/components/Front-Pages/Wholesale-marketplace/Whole-process";
import WholesaleCTA from "@/components/Front-Pages/Wholesale-marketplace/Wholesale-cta";
import WholesaleHero from "@/components/Front-Pages/Wholesale-marketplace/Wholesale-hero";
import WholesaleMOQ from "@/components/Front-Pages/Wholesale-marketplace/Wholesale-moq";


interface WholesaleViewProps { lang: string; }

export function WholesaleView({ lang }: WholesaleViewProps) {
  return (
    <div className="container mx-auto ">
      <WholesaleHero />
      <WholesaleCategories />
      <WholesaleProcess />
      <WholesaleMOQ />
      <WholesaleCTA />
    </div>
  );
}