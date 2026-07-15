"use client";

import ContainerCTA from "@/components/Front-Pages/Container-shipping/Container-cta";
import ContainerShippingHero from "@/components/Front-Pages/Container-shipping/Container-hero";
import ContainerSizes from "@/components/Front-Pages/Container-shipping/Container-sizes";
import FclVsLcl from "@/components/Front-Pages/Container-shipping/Fcl";
import ShippingIncluded from "@/components/Front-Pages/Container-shipping/Shipping-included";
import ShippingRoutes from "@/components/Front-Pages/Container-shipping/Shipping-routes";


interface ContainerShippingViewProps { lang: string; }

export function ContainerShippingView({ lang }: ContainerShippingViewProps) {
  return (
    <div className="container mx-auto ">
      <ContainerShippingHero />
      <FclVsLcl />
      <ContainerSizes />
      <ShippingRoutes />
      <ShippingIncluded />
      <ContainerCTA />
    </div>
  );
}