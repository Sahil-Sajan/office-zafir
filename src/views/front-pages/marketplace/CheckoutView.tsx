"use client";

import CheckoutHero from "@/components/Front-Pages/Checkout/Checkout-hero";
import CheckoutForm from "@/components/Front-Pages/Checkout/Checkout-form";

export function CheckoutView({ lang }: { lang: string }) {
  return (
    <div>
      <CheckoutHero />
      <div className="px-4 sm:px-7 py-8 sm:py-10">
        <div className="max-w-[1180px] mx-auto">
          <CheckoutForm lang={lang} />
        </div>
      </div>
    </div>
  );
}
