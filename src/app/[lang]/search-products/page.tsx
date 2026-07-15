import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { SearchView } from "@/views/front-pages/marketplace/SearchView";


export const metadata: Metadata = {
  title: "Search Products | Zafir360",
};

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { lang } = await params;
  const { q } = await searchParams;
  if (!hasLocale(lang)) notFound();
  return <SearchView lang={lang} query={q ?? ""} />;
}
