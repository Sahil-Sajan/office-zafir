"use client";

import HelpHero from "@/components/Front-Pages/Help/HelpHero";
import StepList from "@/components/Front-Pages/Help/StepList";

interface PaymentGuideViewProps { lang: string; }

const steps = [
  { title: "Choose a payment method", desc: "Pay by card, bank transfer, or cash on delivery where available, depending on the seller or supplier." },
  { title: "Funds held in escrow", desc: "Your payment is held securely and not released until you confirm delivery or the return window closes." },
  { title: "Wholesale terms", desc: "Wholesale orders can use proforma invoices and, for larger container orders, letters of credit (L/C)." },
  { title: "Release on confirmation", desc: "Once you confirm the order, escrowed funds release to the seller or supplier, minus applicable fees." },
];

export function PaymentGuideView({ lang }: PaymentGuideViewProps) {
  return (
    <div>
      <HelpHero
        eyebrow="Payments"
        title="Payment guide"
        description="Accepted payment methods, how escrow protects your funds, and wholesale payment terms."
      />
      <StepList steps={steps} />
    </div>
  );
}
