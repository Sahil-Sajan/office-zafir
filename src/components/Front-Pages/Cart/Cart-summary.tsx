"use client";

import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { Lock, Cash } from "@/components/common/NavIcons";

export default function CartSummary({ lang }: { lang: string }) {
  const { items, count, subtotal, clear } = useCart();

  if (items.length === 0) return null;

  return (
    <aside className="border border-[#F0EADB] rounded-[12px] p-5 h-fit sticky top-24">
      <h2 className="text-[0.95rem] font-bold text-[#0E241C] mb-4">Request Summary</h2>
      <div className="flex justify-between text-[0.88rem] text-[#1C2420] mb-2">
        <span>Items ({count})</span>
        <span className="tabular-nums">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-[0.82rem] text-[#5B6961] mb-4">
        <span>Freight &amp; landed cost</span>
        <span>Calculated at checkout</span>
      </div>
      <div className="flex justify-between text-[1.05rem] font-bold text-[#0E241C] border-t border-[#F0EADB] pt-4">
        <span>Estimated subtotal</span>
        <span className="tabular-nums">${subtotal.toFixed(2)}</span>
      </div>
      <p className="text-[0.76rem] text-[#5B6961] mt-3">
        This is a request for quote, not a final invoice. Suppliers confirm pricing, MOQ, and lead time before payment.
      </p>
      <Link
        href={`/${lang}/checkout`}
        className="block text-center mt-5 px-5 py-3 rounded-[8px] text-[0.92rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-200"
      >
        Proceed to Checkout
      </Link>
      <button
        type="button"
        onClick={clear}
        className="block w-full text-center mt-2.5 px-5 py-2 rounded-[8px] text-[0.82rem] font-semibold text-[#5B6961] hover:text-[#B3422F] transition-colors duration-150 cursor-pointer"
      >
        Clear basket
      </button>
      <div className="flex gap-4 flex-wrap mt-5 pt-5 border-t border-[#F0EADB] text-[0.76rem] text-[#5B6961]">
        <span className="flex items-center gap-1.5"><Lock /> Escrow protected</span>
        <span className="flex items-center gap-1.5"><Cash /> Cash on delivery</span>
      </div>
    </aside>
  );
}
