import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { BecomeAnAffiliateView } from '@/views/front-pages/seller/BecomeAnAffiliateView';

export const metadata: Metadata = { title: "Become an Affiliate | Zafir360" };

export default async function BecomeAnAffiliatePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <BecomeAnAffiliateView lang={lang} />;
}
