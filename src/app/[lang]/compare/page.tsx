import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { CompareView } from '@/views/front-pages/marketplace/CompareView';

export const metadata: Metadata = {
  title: "Compare Products | Zafir360",
};

export default async function ComparePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <CompareView lang={lang} />;
}
