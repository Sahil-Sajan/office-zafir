"use client";

import { useMemo } from "react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import ProductGallery from "@/components/Front-Pages/Product/Product-gallery";
import ProductInfo from "@/components/Front-Pages/Product/Product-info";
import ProductTabs from "@/components/Front-Pages/Product/Product-tabs";
import RelatedProducts from "@/components/Front-Pages/Product/Related-products";
import { getProduct, getRelatedProducts } from "@/components/Front-Pages/Product/products-data";

interface ProductViewProps {
  lang: string;
  slug: string;
}

function seededOrder(seed: string, length: number) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  const order = Array.from({ length }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    hash = (hash * 1103515245 + 12345) >>> 0;
    const j = hash % (i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

export function ProductView({ lang, slug }: ProductViewProps) {
  const product = getProduct(slug);
  const related = useMemo(() => {
    const all = getRelatedProducts(product.slug);
    const order = seededOrder(product.slug, all.length);
    return order.slice(0, 3).map((i) => all[i]);
  }, [product.slug]);

  return (
    <div>
      <div className="px-4 sm:px-7 pt-6 sm:pt-8 pb-12 sm:pb-16">
        <div className="max-w-[1180px] mx-auto">
          <Breadcrumb
            lang={lang}
            trail={[
              { label: "Home", href: "/" },
              { label: "Categories", href: "/categories" },
              { label: product.category, href: "/categories" },
              { label: product.name },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 mt-4">
            <ProductGallery product={product} />
            <ProductInfo product={product} lang={lang} />
          </div>
        </div>
      </div>
      <ProductTabs product={product} />
      <RelatedProducts lang={lang} products={related} category={product.category} />
    </div>
  );
}
