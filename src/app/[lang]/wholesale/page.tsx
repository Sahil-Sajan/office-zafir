import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { WholesaleView } from '@/views/front-pages/wholesale/WholesaleView';

export const metadata: Metadata = {
  title: "Wholesale Marketplace for Verified Iraqi Buyers | Zafir360",
};

export default async function WholesalePage({ params }: PageProps<'/[lang]/wholesale'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <WholesaleView lang={lang} />;
}