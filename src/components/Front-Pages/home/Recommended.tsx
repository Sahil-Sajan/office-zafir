import Link from "next/link";
import { getAllProducts, ProductData } from "@/components/Front-Pages/Product/products-data";

const tierTagColors: Record<ProductData["tier"], string> = {
  retail: "bg-[#1F5C4D] text-white",
  marketplace: "bg-[#C9A853] text-[#1C2420]",
  wholesale: "bg-[#17362A] text-white",
};

const tierTagFallback: Record<ProductData["tier"], string> = {
  retail: "Retail",
  marketplace: "Seller Marketplace",
  wholesale: "Wholesale",
};

function seededPick(products: ProductData[], count: number) {
  const withKey = products.map((p) => {
    let h = 0;
    for (let i = 0; i < p.slug.length; i++) h = (h * 31 + p.slug.charCodeAt(i)) | 0;
    return { p, key: Math.abs(h) };
  });
  return withKey.sort((a, b) => a.key - b.key).slice(0, count).map((x) => x.p);
}

export default function Recommended({ lang, home }: { lang: string; home: Record<string, string> }) {
  const t = (key: string, fallback: string) => home[key] ?? fallback;
  const picks = seededPick(getAllProducts(), 4);

  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-9">
          <div>
            <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
              {t("recommended.eyebrow", "Picked across the marketplace")}
            </span>
            <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
              {t("recommended.title", "Recommended")} <span className="text-[#C9A853] italic">{t("recommended.titleGold", "for you.")}</span>
            </h2>
          </div>
          <Link
            href={`/${lang}/categories`}
            className="text-[0.85rem] font-semibold text-[#17362A] no-underline hover:text-[#234A3A] whitespace-nowrap"
          >
            {t("recommended.browseAll", "Browse all products →")}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {picks.map((p) => (
            <Link
              key={p.slug}
              href={`/${lang}/product/${p.slug}`}
              className="bg-white border border-[#F0EADB] rounded-[10px] overflow-hidden flex flex-col no-underline hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-250"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <span className={`absolute top-2.5 left-2.5 ${p.badges[0].color} text-white text-[0.66rem] font-bold uppercase tracking-[0.03em] px-2 py-[3px] rounded`}>
                  {p.badges[0].label}
                </span>
              </div>
              <div className="p-4">
                <span className={`inline-block mb-1.5 ${tierTagColors[p.tier]} text-[0.6rem] font-bold uppercase tracking-[0.03em] px-1.5 py-[2px] rounded`}>
                  {t(`recommended.tier.${p.tier}`, tierTagFallback[p.tier])}
                </span>
                <div className="text-[0.72rem] text-[#1C2420]">{p.origin} · {t("recommended.leadTime", "Lead time")} {p.leadTime}</div>
                <h3 className="text-[0.9rem] font-bold text-[#0E241C] leading-[1.35] mt-1">{p.name}</h3>
                <div className="flex items-center gap-1.5 text-[0.76rem] text-[#1C2420] mt-1.5">
                  <span className="text-[#17362A]">★★★★★</span> {p.rating}
                </div>
                <div className="flex items-baseline gap-2 mt-1.5">
                  <span className="text-[1rem] font-extrabold text-[#0E241C]">{p.price}</span>
                  {p.comparePrice && <span className="text-[0.78rem] text-[#5B6961] line-through">{p.comparePrice}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </section>
  );
}
