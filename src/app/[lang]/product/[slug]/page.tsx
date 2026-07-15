import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { ProductView } from '@/views/front-pages/marketplace/ProductView';

export default async function ProductPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  return <ProductView lang={lang} slug={slug} />;
}
