"use client";

import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag } from "@/components/common/NavIcons";

const tierMeta: Record<string, { label: string; color: string }> = {
  retail: { label: "Retail", color: "bg-[#1F5C4D] text-white" },
  marketplace: { label: "Seller Marketplace", color: "bg-[#C9A853] text-[#1C2420]" },
  wholesale: { label: "Wholesale", color: "bg-[#17362A] text-white" },
};

function priceValue(p: string) {
  const n = parseFloat(p.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export default function CartList({ lang }: { lang: string }) {
  const { items, removeItem, setQty } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 px-4">
        <span className="mb-3 flex items-center justify-center [&_svg]:size-10">
          <ShoppingBag />
        </span>
        <h2 className="text-[1.15rem] font-bold text-[#0E241C]">Your basket is empty</h2>
        <p className="text-[0.9rem] text-[#5B6961] mt-1.5 max-w-[380px]">
          Browse the marketplace and add products you want to request a quote for.
        </p>
        <Link
          href={`/${lang}/search-products`}
          className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-[8px] text-[0.88rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] transition-colors duration-150"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <div
          key={`${item.slug}-${item.variant}`}
          className="flex gap-3 sm:gap-4 items-center border border-[#F0EADB] rounded-[12px] p-3 sm:p-4"
        >
          <Link href={`/${lang}/product/${item.slug}`} className="flex-none">
            <img src={item.image} alt={item.name} className="size-[64px] sm:size-[80px] rounded-[8px] object-cover border border-[#F0EADB]" />
          </Link>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`${tierMeta[item.tier].color} text-[0.6rem] font-bold uppercase tracking-[0.03em] px-1.5 py-[2px] rounded`}>
                {tierMeta[item.tier].label}
              </span>
              <span className="text-[0.72rem] text-[#5B6961]">MOQ {item.moq}</span>
            </div>
            <Link
              href={`/${lang}/product/${item.slug}`}
              className="block text-[0.92rem] font-semibold text-[#0E241C] no-underline hover:text-[#234A3A] mt-1 truncate"
            >
              {item.name}
            </Link>
            <div className="text-[0.8rem] text-[#5B6961] mt-0.5">Variant: {item.variant}</div>
          </div>

          <div className="flex-none flex items-center gap-1.5 border border-[#F0EADB] rounded-[8px]">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQty(item.slug, item.variant, item.qty - 1)}
              className="size-8 flex items-center justify-center text-[#0E241C] hover:bg-[#F0EADB] rounded-l-[8px] cursor-pointer"
            >
              −
            </button>
            <span className="w-8 text-center text-[0.88rem] font-semibold text-[#0E241C] tabular-nums">{item.qty}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQty(item.slug, item.variant, item.qty + 1)}
              className="size-8 flex items-center justify-center text-[#0E241C] hover:bg-[#F0EADB] rounded-r-[8px] cursor-pointer"
            >
              +
            </button>
          </div>

          <div className="flex-none w-[86px] text-right font-bold text-[#0E241C] text-[0.95rem] tabular-nums">
            ${(priceValue(item.price) * item.qty).toFixed(2)}
          </div>

          <button
            type="button"
            aria-label={`Remove ${item.name} from basket`}
            onClick={() => removeItem(item.slug, item.variant)}
            className="flex-none size-8 flex items-center justify-center rounded-[8px] text-[#5B6961] hover:text-[#B3422F] hover:bg-[#FAF6EA] transition-colors duration-150 cursor-pointer"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
