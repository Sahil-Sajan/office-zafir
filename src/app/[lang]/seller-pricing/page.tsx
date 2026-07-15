import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { SellerPricingView } from '@/views/front-pages/seller/SellerPricingView';

export const metadata: Metadata = {
  title: "Seller Commission & Payout Pricing Explained | Zafir360",
};

export default async function SellerPricingPage({ params }: PageProps<'/[lang]/seller-pricing'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <SellerPricingView lang={lang} />;
}