import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { getCategoryBySlug } from "@/components/Front-Pages/Product/products-data";
import { CategoryDetailView } from '@/views/front-pages/marketplace/CategoryDetailView';

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  if (!getCategoryBySlug(slug)) notFound();
  return <CategoryDetailView lang={lang} slug={slug} />;
}
