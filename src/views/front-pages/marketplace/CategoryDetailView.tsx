import { notFound } from "next/navigation";
import CategoryHero from "@/components/Front-Pages/CategoryDetail/Category-hero";
import ProductBrowser from "@/components/Front-Pages/Product/ProductBrowser";
import { getCategories, getCategoryBySlug, getProductsByCategory } from "@/components/Front-Pages/Product/products-data";

interface CategoryDetailViewProps {
  lang: string;
  slug: string;
}

export function CategoryDetailView({ lang, slug }: CategoryDetailViewProps) {
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const otherCategories = getCategories().filter((c) => c.slug !== slug);

  return (
    <div>
      <CategoryHero lang={lang} category={category} otherCategories={otherCategories} />
      <ProductBrowser lang={lang} mode="category" products={getProductsByCategory(slug)} />
    </div>
  );
}
