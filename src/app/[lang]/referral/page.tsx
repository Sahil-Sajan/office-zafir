import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { ReferralView } from '@/views/front-pages/account/ReferralView';

export const metadata: Metadata = { title: "Refer & Earn | Zafir360" };

export default async function ReferralPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ReferralView lang={lang} />;
}
