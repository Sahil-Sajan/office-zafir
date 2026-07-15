import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { LoyaltyView } from '@/views/front-pages/account/LoyaltyView';

export const metadata: Metadata = { title: "Nuqat Rewards | Zafir360" };

export default async function LoyaltyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <LoyaltyView lang={lang} />;
}
