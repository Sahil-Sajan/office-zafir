import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { MarketNewsView } from '@/views/front-pages/help/MarketNewsView';

export default async function MarketNewsPage({ params }: PageProps<'/[lang]/market-news'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <MarketNewsView lang={lang} />;
}
