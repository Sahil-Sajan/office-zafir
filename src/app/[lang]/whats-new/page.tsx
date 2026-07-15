import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { WhatsNewView } from '@/views/front-pages/account/WhatsNewView';

export const metadata: Metadata = { title: "What's New | Zafir360" };

export default async function WhatsNewPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <WhatsNewView lang={lang} />;
}
