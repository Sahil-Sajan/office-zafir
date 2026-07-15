import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { CartView } from '@/views/front-pages/marketplace/CartView';

export const metadata: Metadata = {
  title: "Inquiry Basket | Zafir360",
};

export default async function CartPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <CartView lang={lang} />;
}
