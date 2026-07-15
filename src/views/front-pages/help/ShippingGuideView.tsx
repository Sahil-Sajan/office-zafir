"use client";

import HelpHero from "@/components/Front-Pages/Help/HelpHero";
import StepList from "@/components/Front-Pages/Help/StepList";

interface ShippingGuideViewProps { lang: string; }

const steps = [
  { title: "Order confirmed", desc: "Once payment is placed in escrow, the seller or supplier prepares your order for dispatch." },
  { title: "Handed to JayakHub", desc: "Every order ships through JayakHub, our logistics partner, with a tracking number generated automatically." },
  { title: "In transit", desc: "Marketplace orders move domestically in 2-5 days. Wholesale imports from Turkey or China follow container or air freight schedules chosen at checkout." },
  { title: "Delivered", desc: "You confirm receipt in your order history, which releases escrowed funds to the seller or supplier." },
];

export function ShippingGuideView({ lang }: ShippingGuideViewProps) {
  return (
    <div>
      <HelpHero
        eyebrow="Shipping"
        title="Shipping guide"
        description="How delivery timelines, tracking, and freight options work across the marketplace and wholesale tiers."
      />
      <StepList steps={steps} />
    </div>
  );
}
