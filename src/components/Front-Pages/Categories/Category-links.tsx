import Link from "next/link";
import { getCategories, getAllProducts } from "@/components/Front-Pages/Product/products-data";
import { Cube, Storefront, ShoppingBag, Globe } from "@/components/common/NavIcons";

const CATEGORY_ICONS: Record<string, () => React.JSX.Element> = {
  "home-appliances-electronics": Cube,
  "apparel-textiles": Storefront,
};

export default function CategoryLinks({ lang }: { lang: string }) {
  const categories = getCategories();
  const totalCount = getAllProducts().length;

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
          <Link
            href={`/${lang}/search-products`}
            className="group flex flex-col bg-white border border-[#F0EADB] rounded-[16px] p-6 no-underline hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center justify-center size-12 rounded-[12px] bg-[#F0EADB] text-[#234A3A] group-hover:bg-[#17362A] group-hover:text-white transition-colors duration-200">
                <Globe />
              </div>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.04em] text-[#5B6961] bg-[#FAF6EA] border border-[#F0EADB] rounded-full px-2.5 py-1 whitespace-nowrap">
                {totalCount} items
              </span>
            </div>
            <h3 className="text-[1.1rem] font-bold text-[#0E241C] mt-5">All Products</h3>
            <span className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-[#17362A] mt-auto pt-5">
              View all
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
          </Link>

          {categories.map((c) => {
            const Icon = CATEGORY_ICONS[c.slug] ?? ShoppingBag;
            return (
              <Link
                key={c.slug}
                href={`/${lang}/categories/${c.slug}`}
                className="group flex flex-col bg-white border border-[#F0EADB] rounded-[16px] p-6 no-underline hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center justify-center size-12 rounded-[12px] bg-[#F0EADB] text-[#234A3A] group-hover:bg-[#17362A] group-hover:text-white transition-colors duration-200">
                    <Icon />
                  </div>
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.04em] text-[#5B6961] bg-[#FAF6EA] border border-[#F0EADB] rounded-full px-2.5 py-1 whitespace-nowrap">
                    {c.count} {c.count === 1 ? "item" : "items"}
                  </span>
                </div>
                <h3 className="text-[1.1rem] font-bold text-[#0E241C] mt-5">{c.name}</h3>
                <span className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-[#17362A] mt-auto pt-5">
                  View category
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
