"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { ProductData } from "./products-data";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCompare } from "@/contexts/CompareContext";
import { ChatBubble, Link2, Lock, Cash, Phone } from "@/components/common/NavIcons";

const tierTags: Record<ProductData["tier"], { label: string; color: string }> = {
  retail: { label: "Retail", color: "bg-[#1F5C4D] text-white" },
  marketplace: { label: "Seller Marketplace", color: "bg-[#C9A853] text-[#1C2420]" },
  wholesale: { label: "Wholesale", color: "bg-[#17362A] text-white" },
};

export default function ProductInfo({ product, lang }: { product: ProductData; lang: string }) {
  const [activeVariant, setActiveVariant] = useState(product.variants[0]);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const { isSaved, toggle: toggleWishlist } = useWishlist();
  const { isComparing, toggle: toggleCompare, count: compareCount, max: compareMax } = useCompare();

  const handleAddToBasket = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: product.price,
      moq: product.moq,
      variant: activeVariant,
      tier: product.tier,
    });
    setAdded(true);
    toast.success("Added to Inquiry Basket");
    setTimeout(() => setAdded(false), 2500);
  };

  const handleToggleWishlist = () => {
    const wasSaved = isSaved(product.slug);
    toggleWishlist({ slug: product.slug, name: product.name, image: product.image, price: product.price, tier: product.tier });
    toast(wasSaved ? "Removed from wishlist" : "Saved to wishlist", { icon: wasSaved ? "♡" : "♥" });
  };

  const handleToggleCompare = () => {
    const wasComparing = isComparing(product.slug);
    if (!wasComparing && compareCount >= compareMax) {
      toast.error(`You can compare up to ${compareMax} products`);
      return;
    }
    toggleCompare(product.slug);
    toast.success(wasComparing ? "Removed from compare" : "Added to compare");
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
          {product.category}
        </span>
        <span className={`${tierTags[product.tier].color} text-[0.62rem] font-bold uppercase tracking-[0.03em] px-1.5 py-[2px] rounded`}>
          {tierTags[product.tier].label}
        </span>
      </div>
      <h1 className="text-[1.9rem] font-bold tracking-[-0.02em] leading-[1.15] text-[#0E241C] mt-2">
        {product.name}
      </h1>
      <div className="flex items-center gap-2 flex-wrap text-[0.85rem] text-[#5B6961] mt-3">
        <span className="text-[#17362A]">{"★".repeat(Math.round(Number(product.rating)))}{"☆".repeat(5 - Math.round(Number(product.rating)))}</span>
        <span>{product.rating} ({product.reviews} reviews)</span>
        <span>·</span>
        <span>{product.sold}</span>
      </div>

      <div className="mt-6 border border-[#F0EADB] rounded-[12px] p-4 sm:p-5">
        <div className="flex items-baseline justify-between gap-3 flex-wrap">
          <div>
            <div className="text-[1.9rem] font-extrabold text-[#0E241C]">
              {product.price} <span className="text-[0.95rem] font-semibold text-[#5B6961]">/ unit</span>
            </div>
            <div className="text-[0.82rem] text-[#5B6961] mt-1">
              MOQ {product.moq} · Origin: {product.origin} · HS {product.hsCode}
            </div>
          </div>
          <span className="text-[0.75rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#5B6961]">
            Prices unlock after verification
          </span>
        </div>

        <table className="w-full mt-4 text-[0.78rem] sm:text-[0.85rem]">
          <thead>
            <tr className="border-b border-[#F0EADB] text-left text-[#5B6961]">
              <th className="pb-2 font-semibold">Quantity</th>
              <th className="pb-2 font-semibold">Unit Price</th>
              <th className="pb-2 font-semibold">Savings</th>
            </tr>
          </thead>
          <tbody>
            {product.priceTiers.map((tier) => (
              <tr key={tier.qty} className="border-b border-[#F0EADB] last:border-b-0">
                <td className="py-2 text-[#1C2420]">{tier.qty}</td>
                <td className="py-2 font-semibold text-[#0E241C]">{tier.price}</td>
                <td className="py-2 text-[#1C2420]">{tier.savings}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-[0.78rem] text-[#5B6961] mt-3">
          4-tier volume pricing, recalculated live as quantity is entered. Container-load and landed-cost totals shown at checkout.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 border border-[#F0EADB] rounded-[12px] overflow-hidden">
        <div className="p-3 sm:p-4">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.05em] text-[#234A3A] mb-1">Lead Time</div>
          <div className="font-bold text-[#0E241C] text-[0.9rem]">{product.leadTime}</div>
        </div>
        <div className="p-3 sm:p-4">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.05em] text-[#234A3A] mb-1">Incoterms</div>
          <div className="font-bold text-[#0E241C] text-[0.9rem]">{product.incoterms}</div>
        </div>
        <div className="p-3 sm:p-4">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.05em] text-[#234A3A] mb-1">Carton Qty</div>
          <div className="font-bold text-[#0E241C] text-[0.9rem]">{product.cartonQty}</div>
        </div>
        <div className="p-3 sm:p-4">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.05em] text-[#234A3A] mb-1">Container Fit</div>
          <div className="font-bold text-[#0E241C] text-[0.9rem]">{product.containerFit}</div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-[0.72rem] font-semibold uppercase tracking-[0.05em] text-[#234A3A] mb-2">Variants</div>
        <div className="flex gap-2 flex-wrap">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setActiveVariant(v)}
              className={`px-[14px] py-[7px] rounded-[999px] text-[0.82rem] font-medium border transition-all duration-150 cursor-pointer ${
                activeVariant === v
                  ? "bg-[#0E241C] text-white border-[#0E241C]"
                  : "bg-white text-[#1C2420] border-[#F0EADB] hover:border-[#17362A] hover:text-[#234A3A]"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2.5 mt-6">
        <button
          onClick={handleAddToBasket}
          className="w-full sm:flex-[2] inline-flex items-center justify-center gap-2 px-[18px] py-[11px] rounded-[8px] text-[0.92rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-200 cursor-pointer"
        >
          {added ? "✓ Added to Basket" : "Add to Inquiry Basket"}
        </button>
        <div className="flex gap-2.5">
          <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-[18px] py-[11px] rounded-[8px] text-[0.92rem] font-semibold bg-transparent text-[#0E241C] border border-[#F0EADB] hover:border-[#17362A] hover:text-[#234A3A] transition-colors duration-150 cursor-pointer">
            Request Sample
          </button>
          <button
            aria-label={isSaved(product.slug) ? "Remove from wishlist" : "Save to wishlist"}
            aria-pressed={isSaved(product.slug)}
            onClick={handleToggleWishlist}
            className={`w-[46px] flex-none inline-flex items-center justify-center rounded-[8px] border transition-colors duration-150 cursor-pointer ${
              isSaved(product.slug) ? "border-[#B3422F] text-[#B3422F] bg-[#FBEEE4]" : "border-[#F0EADB] hover:border-[#17362A] hover:text-[#234A3A]"
            }`}
          >
            {isSaved(product.slug) ? "♥" : "♡"}
          </button>
        </div>
      </div>
      {added && (
        <Link
          href={`/${lang}/cart`}
          className="block mt-2.5 text-[0.85rem] font-semibold text-[#17362A] no-underline hover:text-[#234A3A]"
        >
          View Inquiry Basket →
        </Link>
      )}
      <div className="flex gap-4 mt-4 text-[0.85rem] text-[#5B6961] flex-wrap">
        <a href="#" className="inline-flex items-center gap-1.5 no-underline text-[#5B6961] hover:text-[#234A3A]"><ChatBubble /> Chat with Supplier</a>
        <a href="#" className="inline-flex items-center gap-1.5 no-underline text-[#5B6961] hover:text-[#234A3A]"><Link2 /> Share</a>
        <button
          type="button"
          onClick={handleToggleCompare}
          disabled={!isComparing(product.slug) && compareCount >= compareMax}
          className="bg-transparent border-none p-0 text-[#5B6961] hover:text-[#234A3A] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ⇄ {isComparing(product.slug) ? "Added to Compare" : "Compare"}
        </button>
      </div>

      <div className="flex gap-4 sm:gap-6 flex-wrap mt-5 pt-5 border-t border-[#F0EADB] text-[0.78rem] text-[#5B6961]">
        <span className="flex items-center gap-1.5"><Lock /> Escrow protected</span>
        <span className="flex items-center gap-1.5"><Cash /> Cash on delivery</span>
        <span className="flex items-center gap-1.5"><Phone /> Local wallets accepted</span>
      </div>
    </div>
  );
}
