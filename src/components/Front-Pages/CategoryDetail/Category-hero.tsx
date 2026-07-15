import Link from "next/link";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import type { CategoryInfo } from "@/components/Front-Pages/Product/products-data";

interface CategoryHeroProps {
  lang: string;
  category: CategoryInfo;
  otherCategories: CategoryInfo[];
}

export default function CategoryHero({ lang, category, otherCategories }: CategoryHeroProps) {
  return (
    <header className="px-4 sm:px-7 pt-8 sm:pt-10 pb-6 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto">
        <Breadcrumb lang={lang} trail={[{ label: "Home", href: "/" }, { label: "Categories", href: "/categories" }, { label: category.name }]} />
        <h1 className="text-[clamp(1.8rem,1.4rem+1.8vw,2.8rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C] mt-2">
          {category.name}
        </h1>
        <p className="text-[0.9rem] text-[#5B6961] mt-1.5">
          {category.count} {category.count === 1 ? "product" : "products"}
        </p>
        {otherCategories.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-4">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/${lang}/categories/${c.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-[6px] rounded-full border border-[#F0EADB] bg-white text-[0.82rem] text-[#1C2420] no-underline hover:border-[#17362A] hover:text-[#234A3A] transition-colors duration-150"
              >
                {c.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
