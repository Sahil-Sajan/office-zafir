"use client";

import CartHero from "@/components/Front-Pages/Cart/Cart-hero";
import CartList from "@/components/Front-Pages/Cart/Cart-list";
import CartSummary from "@/components/Front-Pages/Cart/Cart-summary";
import { useCart } from "@/contexts/CartContext";

export function CartView({ lang }: { lang: string }) {
  const { items, count } = useCart();

  return (
    <div>
      <CartHero count={count} />
      <div className="px-4 sm:px-7 py-8 sm:py-10">
        <div className={`max-w-[1180px] mx-auto ${items.length > 0 ? "grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start" : ""}`}>
          <CartList lang={lang} />
          <CartSummary lang={lang} />
        </div>
      </div>
    </div>
  );
}
