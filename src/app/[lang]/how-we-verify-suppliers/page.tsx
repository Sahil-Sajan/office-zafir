import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { HowWeVerifySuppliersView } from '@/views/front-pages/trust/HowWeVerifySuppliersView';

export const metadata: Metadata = {
  title: "How Every Supplier Gets Personally Verified | Zafir360",
};

export default async function HowWeVerifySuppliersPage({ params }: PageProps<'/[lang]/how-we-verify-suppliers'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <HowWeVerifySuppliersView lang={lang} />;
}