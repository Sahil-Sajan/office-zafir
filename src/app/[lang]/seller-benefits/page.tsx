import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { SellerBenefitsView } from '@/views/front-pages/seller/SellerBenefitsView';

export const metadata: Metadata = {
  title: "What You Get as a Verified Seller | Zafir360",
};

export default async function SellerBenefitsPage({ params }: PageProps<'/[lang]/seller-benefits'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <SellerBenefitsView lang={lang} />;
}