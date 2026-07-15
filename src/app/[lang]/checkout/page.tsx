import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { CheckoutView } from '@/views/front-pages/marketplace/CheckoutView';

export const metadata: Metadata = {
  title: "Checkout | Zafir360",
};

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <CheckoutView lang={lang} />;
}
