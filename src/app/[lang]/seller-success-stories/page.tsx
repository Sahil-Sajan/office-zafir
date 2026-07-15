import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { SellerSuccessStoriesView } from '@/views/front-pages/seller/SellerSuccessStoriesView';

export const metadata: Metadata = {
  title: "Seller Success Stories From Across Iraq | Zafir360",
};

export default async function SellerSuccessStoriesPage({ params }: PageProps<'/[lang]/seller-success-stories'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <SellerSuccessStoriesView lang={lang} />;
}