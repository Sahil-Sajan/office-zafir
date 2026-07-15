"use client"

import { useState } from "react"
import Link from "next/link"
import toast from "react-hot-toast"
import { stainless, induction, cottonblend, refrigerator, castIron2, portable2000w, towel2, fridge } from "@/utils/images"
import { useCart } from "@/contexts/CartContext"
import { useWishlist } from "@/contexts/WishlistContext"
import { useCompare } from "@/contexts/CompareContext"

interface ListingProps {
  home: Record<string, string>;
  lang: string;
}

export default function ProductGrid({ home, lang }: ListingProps) {
  const t = (key: string, fallback: string) => home[key] ?? fallback;
  const [activeTier, setActiveTier] = useState<"all" | "retail" | "marketplace" | "wholesale">("all");
  const [addedSlug, setAddedSlug] = useState<string | null>(null);
  const { addItem } = useCart();
  const { isSaved, toggle: toggleWishlist } = useWishlist();
  const { isComparing, toggle: toggleCompare, count: compareCount, max: compareMax } = useCompare();

  const tiers: Record<string, { label: string; color: string }> = {
    retail: { label: t("listing.tier.retail", "Retail"), color: "bg-[#1F5C4D] text-white" },
    marketplace: { label: t("listing.tier.marketplace", "Seller Marketplace"), color: "bg-[#C9A853] text-[#1C2420]" },
    wholesale: { label: t("listing.tier.wholesale", "Wholesale"), color: "bg-[#17362A] text-white" },
  };

  const tabs: { key: "all" | "retail" | "marketplace" | "wholesale"; label: string }[] = [
    { key: "all", label: t("listing.tab.all", "All Tiers") },
    { key: "retail", label: tiers.retail.label },
    { key: "marketplace", label: tiers.marketplace.label },
    { key: "wholesale", label: tiers.wholesale.label },
  ];

  const products = [
    {
      slug: "stainless-steel-cookware-set",
      image: stainless.src,
      tier: "wholesale",
      badges: [
        { label: t("listing.badge.bestSeller", "Best Seller"), color: "bg-[#17362A]" },
        { label: t("listing.badge.new", "New"), color: "bg-[#17362A]" },
      ],
      origin: t("listing.product1.origin", "🇹🇷 Turkey · Lead time 18–25d"),
      name: t("listing.product1.name", "Stainless Steel Cookware Set, 12-Piece"),
      stars: "★★★★★",
      rating: t("listing.product1.rating", "4.8 (312)"),
      sold: t("listing.product1.sold", "1,940 sold"),
      price: t("listing.product1.price", "$18.40"),
      comparePrice: t("listing.product1.comparePrice", "$22.00"),
      moq: t("listing.product1.moq", "200 units"),
      container: t("listing.product1.container", "3,240/40ft"),
      stock: 72,
    },
    {
      slug: "commercial-induction-hob",
      image: induction.src,
      tier: "retail",
      badges: [{ label: t("listing.badge.discount", "-15%"), color: "bg-[#B3422F]" }],
      origin: t("listing.product2.origin", "🇨🇳 China · Lead time 15d"),
      name: t("listing.product2.name", "Commercial Induction Hob, 3.5kW"),
      stars: "★★★★★",
      rating: t("listing.product2.rating", "4.6 (188)"),
      sold: t("listing.product2.sold", "860 sold"),
      price: t("listing.product2.price", "$64.00"),
      comparePrice: t("listing.product2.comparePrice", "$75.00"),
      moq: t("listing.product2.moq", "50 units"),
      container: t("listing.product2.container", "Available"),
      stock: 22,
      lowStock: true,
    },
    {
      slug: "cotton-blend-bedding-set",
      image: cottonblend.src,
      tier: "marketplace",
      badges: [{ label: t("listing.badge.freeShipping", "Free Shipping"), color: "bg-[#0E241C]" }],
      origin: t("listing.product3.origin", "🇹🇷 Turkey · Lead time 20d"),
      name: t("listing.product3.name", "Cotton Blend Bedding Set, Wholesale Carton"),
      stars: "★★★★☆",
      rating: t("listing.product3.rating", "4.4 (96)"),
      sold: t("listing.product3.sold", "2,310 sold"),
      price: t("listing.product3.price", "$5.10"),
      moq: t("listing.product3.moq", "500 units"),
      container: t("listing.product3.container", "6 available"),
      colors: ["#e8e1d4", "#2c2c2c", "#8a5f21", "#c2410c"],
      stock: 60,
    },
    {
      slug: "compact-double-door-refrigerator",
      image: refrigerator.src,
      tier: "wholesale",
      badges: [{ label: t("listing.badge.new", "New"), color: "bg-[#17362A]" }],
      origin: t("listing.product4.origin", "🇨🇳 China · Lead time 22d"),
      name: t("listing.product4.name", "Compact Double-Door Refrigerator, 350L"),
      stars: "★★★★★",
      rating: t("listing.product4.rating", "4.7 (140)"),
      sold: t("listing.product4.sold", "610 sold"),
      price: t("listing.product4.price", "$210.00"),
      moq: t("listing.product4.moq", "20 units"),
      container: t("listing.product4.container", "480/40ft"),
      stock: 45,
    },
    {
      slug: "cast-iron-skillet-set",
      image: castIron2.src,
      tier: "retail",
      badges: [{ label: t("listing.badge.discount10", "-10%"), color: "bg-[#B3422F]" }],
      origin: t("listing.product5.origin", "🇹🇷 Turkey · Lead time 18d"),
      name: t("listing.product5.name", "Cast Iron Skillet Set, 3-Piece"),
      stars: "★★★★★",
      rating: t("listing.product5.rating", "4.9 (204)"),
      sold: t("listing.product5.sold", "1,120 sold"),
      price: t("listing.product5.price", "$22.50"),
      comparePrice: t("listing.product5.comparePrice", "$25.00"),
      moq: t("listing.product5.moq", "150 units"),
      container: t("listing.product5.container", "2,880/40ft"),
      stock: 80,
    },
    {
      slug: "portable-induction-cooktop",
      image: portable2000w.src,
      tier: "marketplace",
      badges: [{ label: t("listing.badge.bestSeller", "Best Seller"), color: "bg-[#17362A]" }],
      origin: t("listing.product6.origin", "🇨🇳 China · Lead time 15d"),
      name: t("listing.product6.name", "Portable Induction Cooktop, 2000W"),
      stars: "★★★★☆",
      rating: t("listing.product6.rating", "4.5 (167)"),
      sold: t("listing.product6.sold", "980 sold"),
      price: t("listing.product6.price", "$29.90"),
      moq: t("listing.product6.moq", "80 units"),
      container: t("listing.product6.container", "Available"),
      stock: 38,
      lowStock: true,
    },
    {
      slug: "cotton-towel-set-hotel-grade",
      image: towel2.src,
      tier: "wholesale",
      badges: [{ label: t("listing.badge.freeShipping", "Free Shipping"), color: "bg-[#0E241C]" }],
      origin: t("listing.product7.origin", "🇹🇷 Turkey · Lead time 20d"),
      name: t("listing.product7.name", "Cotton Towel Set, Hotel Grade"),
      stars: "★★★★★",
      rating: t("listing.product7.rating", "4.8 (88)"),
      sold: t("listing.product7.sold", "1,540 sold"),
      price: t("listing.product7.price", "$6.80"),
      moq: t("listing.product7.moq", "300 units"),
      container: t("listing.product7.container", "8 available"),
      colors: ["#ffffff", "#e8e1d4", "#8a5f21", "#4c493f"],
      stock: 55,
    },
    {
      slug: "mini-bar-fridge",
      image: fridge.src,
      tier: "retail",
      badges: [{ label: t("listing.badge.discount8", "-8%"), color: "bg-[#B3422F]" }],
      origin: t("listing.product8.origin", "🇨🇳 China · Lead time 20d"),
      name: t("listing.product8.name", "Mini Bar Fridge, 90L"),
      stars: "★★★★☆",
      rating: t("listing.product8.rating", "4.3 (52)"),
      sold: t("listing.product8.sold", "290 sold"),
      price: t("listing.product8.price", "$58.00"),
      comparePrice: t("listing.product8.comparePrice", "$64.00"),
      moq: t("listing.product8.moq", "40 units"),
      container: t("listing.product8.container", "960/40ft"),
      stock: 30,
      lowStock: true,
    },
  ];

  return (
    <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex flex-col items-center text-center mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            {t("listing.eyebrow", "Flash deals · Sample listings")}
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            {(() => {
              const title = t("listing.title", "Open a listing, see everything at once.");
              const gold = "see everything at once.";
              return title.includes(gold)
                ? <>{title.slice(0, -gold.length)}<span className="text-[#C9A853] italic">{gold}</span></>
                : title;
            })()}
          </h2>
          <p className="text-[1.05rem] text-[#1C2420] max-w-[560px] leading-[1.65] mt-3">
            {t("listing.lede", "No digging through tabs for the numbers that decide an order — MOQ, lead time, origin, and live stock sit right on the card.")}
          </p>
        </div>

        <div className="flex justify-center gap-2 flex-wrap mb-7" role="tablist" aria-label="Filter by tier">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTier === tab.key}
              onClick={() => setActiveTier(tab.key)}
              className={`px-4 py-2 rounded-full text-[0.82rem] font-semibold border transition-colors duration-150 cursor-pointer ${
                activeTier === tab.key
                  ? "bg-[#17362A] text-white border-[#17362A]"
                  : "bg-white text-[#1C2420] border-[#F0EADB] hover:border-[#17362A]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.filter((p) => activeTier === "all" || p.tier === activeTier).map((p) => (
            <div
              key={p.name}
              className="bg-white border border-[#F0EADB] rounded-[10px] overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#F0EADB] to-[#F0EADB] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {p.badges.map((b) => (
                    <span
                      key={b.label}
                      className={`${b.color} text-white text-[0.6rem] font-bold uppercase tracking-[0.03em] px-1.5 py-[2px] rounded`}
                    >
                      {b.label}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  aria-label={isSaved(p.slug) ? "Remove from wishlist" : "Save to wishlist"}
                  aria-pressed={isSaved(p.slug)}
                  onClick={() => {
                    const wasSaved = isSaved(p.slug);
                    toggleWishlist({ slug: p.slug, name: p.name, image: p.image, price: p.price, tier: p.tier as "retail" | "marketplace" | "wholesale" });
                    toast(wasSaved ? "Removed from wishlist" : "Saved to wishlist", { icon: wasSaved ? "♡" : "♥" });
                  }}
                  className={`absolute top-2 right-2 size-7 flex items-center justify-center rounded-full text-[0.85rem] shadow-[0_2px_8px_rgba(14,36,28,0.16)] transition-colors duration-150 cursor-pointer ${
                    isSaved(p.slug) ? "bg-[#B3422F] text-white" : "bg-white text-[#5B6961] hover:text-[#B3422F]"
                  }`}
                >
                  {isSaved(p.slug) ? "♥" : "♡"}
                </button>
              </div>

              <div className="p-3 flex flex-col gap-1.5 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className={`${tiers[p.tier].color} text-[0.6rem] font-bold uppercase tracking-[0.03em] px-1.5 py-[2px] rounded`}>
                    {tiers[p.tier].label}
                  </span>
                  <button
                    type="button"
                    disabled={!isComparing(p.slug) && compareCount >= compareMax}
                    aria-pressed={isComparing(p.slug)}
                    onClick={() => {
                      const wasComparing = isComparing(p.slug);
                      if (!wasComparing && compareCount >= compareMax) {
                        toast.error(`You can compare up to ${compareMax} products`);
                        return;
                      }
                      toggleCompare(p.slug);
                      toast.success(wasComparing ? "Removed from compare" : "Added to compare");
                    }}
                    className="flex items-center gap-1 text-[0.66rem] text-[#5B6961] cursor-pointer select-none disabled:cursor-not-allowed disabled:opacity-40 bg-transparent border-none p-0"
                  >
                    <span
                      className={`flex items-center justify-center size-[13px] rounded-[3px] border transition-colors duration-150 ${
                        isComparing(p.slug) ? "bg-[#17362A] border-[#17362A] text-white" : "border-[#5B6961] bg-white"
                      }`}
                    >
                      {isComparing(p.slug) && (
                        <svg viewBox="0 0 24 24" className="size-[9px]" fill="none" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    Compare
                  </button>
                </div>
                <div className="text-[0.66rem] text-[#1C2420] flex items-center gap-1">{p.origin}</div>
                <h3 className="text-[0.82rem] leading-[1.3] font-bold line-clamp-2 min-h-[2.6em]">{p.name}</h3>
                <div className="flex items-center gap-1 text-[0.7rem] text-[#1C2420]">
                  <span className="text-[#17362A] tracking-[1px]">{p.stars}</span> {p.rating}
                </div>
                <div className="flex items-baseline gap-1.5 mt-[2px]">
                  <span className="text-[0.98rem] font-extrabold text-[#0E241C]">{p.price}</span>
                  {p.comparePrice && (
                    <span className="text-[0.74rem] text-[#5B6961] line-through">{p.comparePrice}</span>
                  )}
                </div>
                <div className="text-[0.68rem] text-[#1C2420] pt-1.5 border-t border-[#F0EADB]">
                  {t("listing.label.moq", "MOQ")} <b className="text-[#0E241C] font-semibold">{p.moq}</b>
                </div>
                <div className="h-1 rounded bg-[#F0EADB] overflow-hidden mt-[2px]">
                  <span
                    className={`block h-full ${p.lowStock ? "bg-[#B3422F]" : "bg-[#17362A]"}`}
                    style={{ width: `${p.stock}%` }}
                  />
                </div>
                <div className="pt-2 mt-auto flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      addItem({
                        slug: p.slug,
                        name: p.name,
                        image: p.image,
                        price: p.price,
                        moq: p.moq,
                        variant: "Default",
                        tier: p.tier as "retail" | "marketplace" | "wholesale",
                      });
                      setAddedSlug(p.slug);
                      toast.success("Added to Inquiry Basket");
                      setTimeout(() => setAddedSlug((s) => (s === p.slug ? null : s)), 1800);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-[5px] rounded-[6px] text-[0.74rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] transition-colors duration-150 cursor-pointer"
                  >
                    {addedSlug === p.slug ? "✓ Added" : "Add to Basket"}
                  </button>
                  <Link
                    href={`/${lang}/product/${p.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-[5px] rounded-[6px] text-[0.74rem] font-semibold bg-transparent text-[#0E241C] border border-[#F0EADB] no-underline hover:border-[#17362A] hover:text-[#234A3A] transition-colors duration-150"
                  >
                    {home["listing.label.viewDetails"] ?? "View Details"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {compareCount > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-[#0E241C] text-white px-4 sm:px-7 py-3.5 shadow-[0_-8px_24px_rgba(14,36,28,0.2)]">
          <div className="max-w-[1180px] mx-auto flex items-center justify-between gap-4 flex-wrap">
            <span className="text-[0.85rem]">
              <b className="tabular-nums">{compareCount}</b> of {compareMax} selected to compare
            </span>
            <Link
              href={`/${lang}/compare`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] text-[0.85rem] font-semibold bg-[#C9A853] text-[#1C2420] hover:bg-[#d8bb6e] transition-colors duration-150"
            >
              See comparison
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
