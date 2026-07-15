import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { BecomeASellerView } from '@/views/front-pages/seller/BecomeASellerView';

export const metadata: Metadata = {
  title: "Become a Marketplace Seller in Minutes | Zafir360",
};

export default async function BecomeASellerPage({ params }: PageProps<'/[lang]/become-a-seller'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <BecomeASellerView lang={lang} />;
}