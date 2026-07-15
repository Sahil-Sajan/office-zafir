import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { SellerFaqView } from '@/views/front-pages/seller/SellerFaqView';

export const metadata: Metadata = {
  title: "Frequently Asked Questions for Sellers | Zafir360",
};

export default async function SellerFaqPage({ params }: PageProps<'/[lang]/seller-faq'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <SellerFaqView lang={lang} />;
}