import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { GiftCardsView } from '@/views/front-pages/account/GiftCardsView';

export const metadata: Metadata = { title: "Gift Cards | Zafir360" };

export default async function GiftCardsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <GiftCardsView lang={lang} />;
}
