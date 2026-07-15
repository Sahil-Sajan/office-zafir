"use client";

import HelpHero from "@/components/Front-Pages/Help/HelpHero";
import StepList from "@/components/Front-Pages/Help/StepList";

interface ReturnsGuideViewProps { lang: string; }

const steps = [
  { title: "Open a return request", desc: "From your order history, select the order and choose Request Return within the eligible window." },
  { title: "State the reason", desc: "Add a short reason and photos if the item arrived damaged or doesn't match the listing." },
  { title: "Review and pickup", desc: "The seller or supplier reviews the request; approved returns are picked up or shipped back through JayakHub." },
  { title: "Refund issued", desc: "Once the return is received and verified, your refund is released from escrow back to your original payment method." },
];

export function ReturnsGuideView({ lang }: ReturnsGuideViewProps) {
  return (
    <div>
      <HelpHero
        eyebrow="Returns"
        title="Returns guide"
        description="How to request a return, what qualifies, and when to expect your refund."
      />
      <StepList steps={steps} />
    </div>
  );
}
