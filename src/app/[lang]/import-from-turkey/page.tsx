import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { ImportFromTurkeyView } from '@/views/front-pages/wholesale/ImportFromTurkeyView';

export const metadata: Metadata = {
  title: "Import Wholesale Goods Direct From Turkey | Zafir360",
};

export default async function ImportFromTurkeyPage({ params }: PageProps<'/[lang]/import-from-turkey'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ImportFromTurkeyView lang={lang} />;
}