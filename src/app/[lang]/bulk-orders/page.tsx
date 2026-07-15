import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { BulkOrdersView } from '@/views/front-pages/wholesale/BulkOrdersView';

export const metadata: Metadata = {
  title: "Bulk Orders With Tiered Volume Pricing | Zafir360",
};

export default async function BulkOrdersPage({ params }: PageProps<'/[lang]/bulk-orders'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <BulkOrdersView lang={lang} />;
}