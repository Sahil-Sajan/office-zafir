import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { ImportFromChinaView } from '@/views/front-pages/wholesale/ImportFromChinaView';

export const metadata: Metadata = {
  title: "Import Wholesale Goods Direct From China | Zafir360",
};

export default async function ImportFromChinaPage({ params }: PageProps<'/[lang]/import-from-china'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ImportFromChinaView lang={lang} />;
}