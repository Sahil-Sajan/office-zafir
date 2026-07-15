import Link from "next/link";
import { ProductData } from "./products-data";

const tierTags: Record<ProductData["tier"], { label: string; color: string }> = {
  retail: { label: "Retail", color: "bg-[#1F5C4D] text-white" },
  marketplace: { label: "Seller Marketplace", color: "bg-[#C9A853] text-[#1C2420]" },
  wholesale: { label: "Wholesale", color: "bg-[#17362A] text-white" },
};

export default function RelatedProducts({ lang, products, category }: { lang: string; products: ProductData[]; category: string }) {
  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Frequently bought together · Similar products
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            More <span className="text-[#C9A853] italic">from {category}.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
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
                <span className={`inline-block mb-1.5 ${tierTags[p.tier].color} text-[0.6rem] font-bold uppercase tracking-[0.03em] px-1.5 py-[2px] rounded`}>
                  {tierTags[p.tier].label}
                </span>
                <div className="text-[0.72rem] text-[#1C2420]">{p.origin} · Lead time {p.leadTime}</div>
                <h3 className="text-[0.95rem] font-bold text-[#0E241C] leading-[1.35] mt-1">{p.name}</h3>
                <div className="flex items-center gap-1.5 text-[0.78rem] text-[#1C2420] mt-1.5">
                  <span className="text-[#17362A]">★★★★★</span> {p.rating} ({p.reviews})
                </div>
                <div className="flex items-baseline gap-2 mt-1.5">
                  <span className="text-[1.05rem] font-extrabold text-[#0E241C]">{p.price}</span>
                  {p.comparePrice && <span className="text-[0.8rem] text-[#5B6961] line-through">{p.comparePrice}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
