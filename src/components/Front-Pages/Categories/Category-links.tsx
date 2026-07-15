import Link from "next/link";
import { getCategories } from "@/components/Front-Pages/Product/products-data";

export default function CategoryLinks({ lang }: { lang: string }) {
  const categories = getCategories();

  return (
    <section className="py-14 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-8">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Browse the marketplace
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Shop by <span className="text-[#C9A853] italic">category.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${lang}/categories/${c.slug}`}
              className="bg-white border border-[#F0EADB] rounded-[16px] p-6 no-underline hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
            >
              <h3 className="text-[1.05rem] font-bold text-[#0E241C]">{c.name}</h3>
              <p className="text-[0.85rem] text-[#5B6961] mt-1.5">
                {c.count} {c.count === 1 ? "product" : "products"}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-[#17362A] mt-4">
                View category →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
