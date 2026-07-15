"use client";

import SearchHero from "@/components/Front-Pages/Search/Search-hero";
import ProductBrowser from "@/components/Front-Pages/Product/ProductBrowser";
import { getAllProducts, getCategories } from "@/components/Front-Pages/Product/products-data";

interface SearchViewProps {
  lang: string;
  query: string;
}

export function SearchView({ lang, query }: SearchViewProps) {
  return (
    <div>
      <SearchHero query={query} />
      <ProductBrowser
        lang={lang}
        mode="search"
        products={getAllProducts()}
        categories={getCategories()}
        initialQuery={query}
      />
    </div>
  );
}
