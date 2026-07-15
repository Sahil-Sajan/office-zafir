"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import type { ProductData, CategoryInfo } from "./products-data";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCompare } from "@/contexts/CompareContext";
import { useCart } from "@/contexts/CartContext";
import { Search, Mic, Camera } from "@/components/common/NavIcons";

const tierMeta: Record<ProductData["tier"], { label: string; color: string; dot: string }> = {
  retail: { label: "Retail", color: "bg-[#1F5C4D] text-white", dot: "bg-[#1F5C4D]" },
  marketplace: { label: "Seller Marketplace", color: "bg-[#C9A853] text-[#1C2420]", dot: "bg-[#C9A853]" },
  wholesale: { label: "Wholesale", color: "bg-[#17362A] text-white", dot: "bg-[#17362A]" },
};

const originMeta: Record<string, string> = {
  Turkey: "🇹🇷 Turkey",
  China: "🇨🇳 China",
};

type SortKey = "relevance" | "priceAsc" | "priceDesc" | "rating";

interface SpeechRecognitionResultLike {
  transcript: string;
}
interface SpeechRecognitionEventLike {
  results: { [index: number]: { [index: number]: SpeechRecognitionResultLike } };
}
interface SpeechRecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  start: () => void;
}

function priceValue(p: string) {
  const n = parseFloat(p.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

interface ProductBrowserProps {
  lang: string;
  products: ProductData[];
  mode: "search" | "category";
  categories?: CategoryInfo[];
  initialQuery?: string;
}

function seededSubset(products: ProductData[], count: number) {
  return products
    .map((p) => {
      let h = 0;
      for (let i = 0; i < p.slug.length; i++) h = (h * 31 + p.slug.charCodeAt(i)) | 0;
      return { p, key: Math.abs(h) };
    })
    .sort((a, b) => a.key - b.key)
    .slice(0, count)
    .map((x) => x.p);
}

export default function ProductBrowser({ lang, products, mode, categories = [], initialQuery = "" }: ProductBrowserProps) {
  const [query, setQuery] = useState(initialQuery);
  const [tiers, setTiers] = useState<Set<ProductData["tier"]>>(new Set());
  const [cats, setCats] = useState<Set<string>>(new Set());
  const [origins, setOrigins] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<SortKey>(mode === "search" ? "relevance" : "rating");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(true);
  const [imageSearchActive, setImageSearchActive] = useState(false);
  const [imageFileName, setImageFileName] = useState("");
  const [barcodeOpen, setBarcodeOpen] = useState(false);
  const [barcodeValue, setBarcodeValue] = useState("");
  const [addedSlug, setAddedSlug] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { addItem } = useCart();
  const { isSaved, toggle: toggleWishlist } = useWishlist();
  const { isComparing, toggle: toggleCompare, count: compareCount, max: compareMax } = useCompare();

  const originOptions = useMemo(() => Array.from(new Set(products.map((p) => p.origin))), [products]);

  const startVoiceSearch = () => {
    const SpeechRecognitionCtor =
      (window as unknown as { webkitSpeechRecognition?: new () => SpeechRecognitionLike; SpeechRecognition?: new () => SpeechRecognitionLike })
        .webkitSpeechRecognition ??
      (window as unknown as { SpeechRecognition?: new () => SpeechRecognitionLike }).SpeechRecognition;

    if (!SpeechRecognitionCtor) {
      setVoiceSupported(false);
      return;
    }

    const recognition = new SpeechRecognitionCtor();
    recognition.lang = "ar-IQ";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript ?? "";
      if (transcript) {
        setImageSearchActive(false);
        setQuery(transcript);
      }
    };

    recognition.start();
  };

  const handleImageChosen = (file: File | null) => {
    if (!file) return;
    setImageFileName(file.name);
    setQuery("");
    setImageSearchActive(true);
  };

  const handleBarcodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!barcodeValue.trim()) return;
    setImageSearchActive(false);
    setQuery(barcodeValue.trim());
    setBarcodeOpen(false);
  };

  const toggle = <T,>(set: Set<T>, value: T, setter: (s: Set<T>) => void) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value); else next.add(value);
    setter(next);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = mode === "search" && imageSearchActive ? seededSubset(products, 6) : products;
    let list = base.filter((p) => {
      if (!imageSearchActive && q) {
        const hay = `${p.name} ${p.category} ${p.origin} ${p.supplier.name} ${p.hsCode}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (tiers.size > 0 && !tiers.has(p.tier)) return false;
      if (cats.size > 0 && !cats.has(p.categorySlug)) return false;
      if (origins.size > 0 && !origins.has(p.origin)) return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      if (sort === "priceAsc") return priceValue(a.price) - priceValue(b.price);
      if (sort === "priceDesc") return priceValue(b.price) - priceValue(a.price);
      if (sort === "rating") return parseFloat(b.rating) - parseFloat(a.rating);
      return 0;
    });

    return list;
  }, [products, query, tiers, cats, origins, sort, mode, imageSearchActive]);

  const activeChips: { key: string; label: string; onRemove: () => void }[] = [
    ...Array.from(tiers).map((t) => ({ key: `tier-${t}`, label: tierMeta[t].label, onRemove: () => toggle(tiers, t, setTiers) })),
    ...Array.from(cats).map((c) => ({
      key: `cat-${c}`,
      label: categories.find((cat) => cat.slug === c)?.name ?? c,
      onRemove: () => toggle(cats, c, setCats),
    })),
    ...Array.from(origins).map((o) => ({ key: `origin-${o}`, label: originMeta[o] ?? o, onRemove: () => toggle(origins, o, setOrigins) })),
  ];

  const clearAll = () => {
    setTiers(new Set());
    setCats(new Set());
    setOrigins(new Set());
    setQuery("");
    setImageSearchActive(false);
  };

  const FacetGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="border-b border-[#F0EADB] pb-4 mb-4 last:border-b-0 last:mb-0 last:pb-0">
      <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.05em] text-[#5B6961] mb-2.5">{title}</span>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );

  const Checkbox = ({ checked, onChange, children }: { checked: boolean; onChange: () => void; children: React.ReactNode }) => (
    <label className="flex items-center gap-2.5 text-[0.85rem] text-[#1C2420] cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="size-[16px] rounded-[4px] border-[#F0EADB] text-[#17362A] accent-[#17362A] cursor-pointer"
      />
      {children}
    </label>
  );

  const facetsContent = (
    <>
      <FacetGroup title="Tier">
        {(Object.keys(tierMeta) as ProductData["tier"][]).map((t) => (
          <Checkbox key={t} checked={tiers.has(t)} onChange={() => toggle(tiers, t, setTiers)}>
            <span className={`size-[8px] rounded-full ${tierMeta[t].dot}`} />
            {tierMeta[t].label}
          </Checkbox>
        ))}
      </FacetGroup>

      {mode === "search" && categories.length > 0 && (
        <FacetGroup title="Category">
          {categories.map((c) => (
            <Checkbox key={c.slug} checked={cats.has(c.slug)} onChange={() => toggle(cats, c.slug, setCats)}>
              {c.name} <span className="text-[#5B6961]">({c.count})</span>
            </Checkbox>
          ))}
        </FacetGroup>
      )}

      <FacetGroup title="Origin">
        {originOptions.map((o) => (
          <Checkbox key={o} checked={origins.has(o)} onChange={() => toggle(origins, o, setOrigins)}>
            {originMeta[o] ?? o}
          </Checkbox>
        ))}
      </FacetGroup>
    </>
  );

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        {mode === "search" && (
          <div className="mb-6 max-w-[560px]">
            <div className="relative flex items-center gap-2 bg-white border border-[#F0EADB] rounded-full px-4 py-2 focus-within:border-[#17362A] focus-within:shadow-[0_0_0_4px_#F0EADB] transition-[border-color,box-shadow] duration-200">
              <span aria-hidden="true" className="text-sm text-[#5B6961]">
                <Search />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setImageSearchActive(false);
                  setQuery(e.target.value);
                }}
                placeholder="Search products, factories, or an HS code…"
                aria-label="Search products"
                className="border-none outline-none flex-1 min-w-0 text-[0.95rem] bg-transparent text-[#0E241C] py-1.5"
              />
              <div className="flex items-center gap-1 flex-none border-l border-[#F0EADB] pl-2">
                <button
                  type="button"
                  onClick={startVoiceSearch}
                  aria-label="Search by voice"
                  title={voiceSupported ? "Search by voice" : "Voice search isn't supported in this browser"}
                  disabled={!voiceSupported}
                  className={`size-8 flex items-center justify-center rounded-full text-[0.95rem] transition-colors duration-150 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer ${
                    listening ? "bg-[#B3422F] text-white animate-pulse" : "text-[#5B6961] hover:bg-[#F0EADB] hover:text-[#0E241C]"
                  }`}
                >
                  <Mic />
                </button>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  aria-label="Search by image"
                  title="Search by image"
                  className="size-8 flex items-center justify-center rounded-full text-[0.95rem] text-[#5B6961] hover:bg-[#F0EADB] hover:text-[#0E241C] transition-colors duration-150 cursor-pointer"
                >
                  <Camera />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChosen(e.target.files?.[0] ?? null)}
                />
                <button
                  type="button"
                  onClick={() => setBarcodeOpen((v) => !v)}
                  aria-label="Search by barcode"
                  aria-expanded={barcodeOpen}
                  title="Search by barcode / HS code"
                  className={`size-8 flex items-center justify-center rounded-full text-[0.95rem] transition-colors duration-150 cursor-pointer ${
                    barcodeOpen ? "bg-[#F0EADB] text-[#0E241C]" : "text-[#5B6961] hover:bg-[#F0EADB] hover:text-[#0E241C]"
                  }`}
                >
                  ▤
                </button>
              </div>
            </div>

            {!voiceSupported && (
              <p className="text-[0.72rem] text-[#5B6961] mt-1.5 px-1">
                Voice search isn&rsquo;t supported in this browser — try Chrome or Edge.
              </p>
            )}

            {barcodeOpen && (
              <form onSubmit={handleBarcodeSubmit} className="flex items-center gap-2 mt-2.5">
                <input
                  type="text"
                  inputMode="numeric"
                  value={barcodeValue}
                  onChange={(e) => setBarcodeValue(e.target.value)}
                  placeholder="Enter barcode or HS code digits…"
                  aria-label="Barcode or HS code"
                  autoFocus
                  className="flex-1 min-w-0 border border-[#F0EADB] rounded-full px-4 py-2 text-[0.85rem] outline-none focus:border-[#17362A]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full text-[0.82rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] transition-colors duration-150 cursor-pointer"
                >
                  Look up
                </button>
              </form>
            )}

            {imageSearchActive && (
              <div className="flex items-center gap-2 mt-2.5 px-3.5 py-2 rounded-[8px] bg-[#F0EADB] text-[0.78rem] text-[#234A3A]">
                <span className="flex items-center gap-1.5"><Camera /> Showing visually similar results for &ldquo;{imageFileName}&rdquo; — demo matching, not a real image-recognition backend.</span>
              </div>
            )}
          </div>
        )}

        {mode === "category" && (
          <form
            action={`/${lang}/search-products`}
            method="GET"
            className="relative flex items-center gap-2.5 bg-white border border-[#F0EADB] rounded-full px-3 sm:px-[18px] py-1.5 max-w-[560px] mb-6 focus-within:border-[#17362A] focus-within:shadow-[0_0_0_4px_#F0EADB] transition-[border-color,box-shadow] duration-200"
          >
            <span aria-hidden="true" className="text-[#5B6961] flex-none">
              <Search />
            </span>
            <input
              type="search"
              name="q"
              placeholder="Search all categories…"
              aria-label="Search all products"
              className="border-none outline-none flex-1 min-w-0 text-[0.85rem] sm:text-[0.95rem] bg-transparent text-[#0E241C] py-2"
            />
            <button
              type="submit"
              className="flex-none inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[0.8rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] transition-colors duration-150 cursor-pointer border-none"
            >
              Search
            </button>
          </form>
        )}

        <div className="flex items-center justify-between gap-3 flex-wrap mb-5">
          <p className="text-[0.9rem] text-[#5B6961]">
            <span className="font-semibold text-[#0E241C] tabular-nums">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "result" : "results"}
            {query && <> for &ldquo;{query}&rdquo;</>}
          </p>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setFiltersOpen((v) => !v)}
              aria-expanded={filtersOpen}
              className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-[6px] text-[0.85rem] font-semibold border border-[#F0EADB] text-[#0E241C] cursor-pointer"
            >
              Filters {activeChips.length > 0 && <span className="text-[#C9A853]">({activeChips.length})</span>}
            </button>
            <label className="flex items-center gap-1.5 text-[0.85rem] text-[#5B6961]">
              Sort
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="px-2.5 py-1.5 rounded-[6px] border border-[#F0EADB] bg-white text-[0.85rem] text-[#0E241C] focus:outline-none focus:border-[#17362A]"
              >
                {mode === "search" && <option value="relevance">Relevance</option>}
                <option value="rating">Top rated</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </select>
            </label>
          </div>
        </div>

        {activeChips.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mb-5">
            {activeChips.map((chip) => (
              <button
                key={chip.key}
                type="button"
                onClick={chip.onRemove}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.78rem] font-medium bg-[#F0EADB] text-[#1C2420] hover:bg-[#E9E3D2] transition-colors duration-150 cursor-pointer"
              >
                {chip.label}
                <span aria-hidden="true" className="text-[#5B6961]">✕</span>
              </button>
            ))}
            <button
              type="button"
              onClick={clearAll}
              className="text-[0.78rem] font-semibold text-[#B3422F] hover:underline cursor-pointer"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
          <aside className={`lg:block ${filtersOpen ? "block" : "hidden"}`}>
            <div className="bg-white border border-[#F0EADB] rounded-[12px] p-5 lg:sticky lg:top-24">
              {facetsContent}
            </div>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center text-center py-16 px-6 bg-white border border-[#F0EADB] rounded-[12px]">
                <span className="mb-3 flex items-center justify-center [&_svg]:size-8 text-[#5B6961]" aria-hidden="true">
                  <Search />
                </span>
                <h2 className="text-[1.05rem] font-bold text-[#0E241C]">No products match your filters.</h2>
                <p className="text-[0.88rem] text-[#5B6961] mt-1.5 max-w-[360px]">
                  Try removing a filter or searching a broader term.
                </p>
                {activeChips.length > 0 && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="mt-4 inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.88rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] transition-colors duration-150 cursor-pointer"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map((p) => (
                  <div
                    key={p.slug}
                    role="link"
                    tabIndex={0}
                    onClick={() => router.push(`/${lang}/product/${p.slug}`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") router.push(`/${lang}/product/${p.slug}`);
                    }}
                    className="bg-white border border-[#F0EADB] rounded-[10px] overflow-hidden flex flex-col no-underline hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-250 cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                        {p.badges.map((b) => (
                          <span key={b.label} className={`${b.color} text-white text-[0.62rem] font-bold uppercase tracking-[0.03em] px-1.5 py-[2px] rounded`}>
                            {b.label}
                          </span>
                        ))}
                      </div>
                      <button
                        type="button"
                        aria-label={isSaved(p.slug) ? "Remove from wishlist" : "Save to wishlist"}
                        aria-pressed={isSaved(p.slug)}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const wasSaved = isSaved(p.slug);
                          toggleWishlist({ slug: p.slug, name: p.name, image: p.image, price: p.price, tier: p.tier });
                          toast(wasSaved ? "Removed from wishlist" : "Saved to wishlist", { icon: wasSaved ? "♡" : "♥" });
                        }}
                        className={`absolute top-2.5 right-2.5 size-8 flex items-center justify-center rounded-full text-[0.95rem] shadow-[0_2px_8px_rgba(14,36,28,0.16)] transition-colors duration-150 cursor-pointer ${
                          isSaved(p.slug) ? "bg-[#B3422F] text-white" : "bg-white text-[#5B6961] hover:text-[#B3422F]"
                        }`}
                      >
                        {isSaved(p.slug) ? "♥" : "♡"}
                      </button>
                    </div>
                    <div className="p-3.5 flex flex-col gap-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`${tierMeta[p.tier].color} text-[0.6rem] font-bold uppercase tracking-[0.03em] px-1.5 py-[2px] rounded`}>
                          {tierMeta[p.tier].label}
                        </span>
                        <button
                          type="button"
                          disabled={!isComparing(p.slug) && compareCount >= compareMax}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const wasComparing = isComparing(p.slug);
                            if (!wasComparing && compareCount >= compareMax) {
                              toast.error(`You can compare up to ${compareMax} products`);
                              return;
                            }
                            toggleCompare(p.slug);
                            toast.success(wasComparing ? "Removed from compare" : "Added to compare");
                          }}
                          aria-pressed={isComparing(p.slug)}
                          className="flex items-center gap-1.5 text-[0.72rem] text-[#5B6961] cursor-pointer select-none disabled:cursor-not-allowed disabled:opacity-40 bg-transparent border-none p-0"
                        >
                          <span
                            className={`flex items-center justify-center size-[14px] rounded-[3px] border transition-colors duration-150 ${
                              isComparing(p.slug) ? "bg-[#17362A] border-[#17362A] text-white" : "border-[#5B6961] bg-white"
                            }`}
                          >
                            {isComparing(p.slug) && (
                              <svg viewBox="0 0 24 24" className="size-[10px]" fill="none" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                          Compare
                        </button>
                      </div>
                      <div className="text-[0.72rem] text-[#5B6961]">{originMeta[p.origin] ?? p.origin} · {p.leadTime}</div>
                      <h3 className="text-[0.9rem] leading-[1.3] font-bold text-[#0E241C] line-clamp-2 min-h-[2.4em]">{p.name}</h3>
                      <div className="flex items-center gap-1 text-[0.76rem] text-[#1C2420]">
                        <span className="text-[#17362A]">★</span> {p.rating} ({p.reviews})
                      </div>
                      <div className="flex items-baseline gap-1.5 mt-[2px]">
                        <span className="text-[1.02rem] font-extrabold text-[#0E241C] tabular-nums">{p.price}</span>
                        {p.comparePrice && <span className="text-[0.76rem] text-[#5B6961] line-through tabular-nums">{p.comparePrice}</span>}
                      </div>
                      <div className="text-[0.7rem] text-[#5B6961] pt-1.5 mt-auto border-t border-[#F0EADB]">
                        MOQ <b className="text-[#0E241C] font-semibold">{p.moq}</b>
                      </div>
                      <div className="flex gap-1.5 pt-2.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addItem({
                              slug: p.slug,
                              name: p.name,
                              image: p.image,
                              price: p.price,
                              moq: p.moq,
                              variant: "Default",
                              tier: p.tier,
                            });
                            setAddedSlug(p.slug);
                            toast.success("Added to Inquiry Basket");
                            setTimeout(() => setAddedSlug((s) => (s === p.slug ? null : s)), 1800);
                          }}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-[7px] rounded-[6px] text-[0.76rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] transition-colors duration-150 cursor-pointer"
                        >
                          {addedSlug === p.slug ? "✓ Added" : "Add to Basket"}
                        </button>
                        <Link
                          href={`/${lang}/product/${p.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-[7px] rounded-[6px] text-[0.76rem] font-semibold bg-transparent text-[#0E241C] border border-[#F0EADB] no-underline hover:border-[#17362A] hover:text-[#234A3A] transition-colors duration-150"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {compareCount > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-[#0E241C] text-white px-4 sm:px-7 py-3.5 shadow-[0_-8px_24px_rgba(14,36,28,0.2)]">
          <div className="max-w-[1180px] mx-auto flex items-center justify-between gap-4 flex-wrap">
            <span className="text-[0.85rem]">
              <b className="tabular-nums">{compareCount}</b> of {compareMax} selected to compare
            </span>
            <div className="flex items-center gap-2.5">
              <Link
                href={`/${lang}/compare`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] text-[0.85rem] font-semibold bg-[#C9A853] text-[#1C2420] hover:bg-[#d8bb6e] transition-colors duration-150"
              >
                Compare now
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
