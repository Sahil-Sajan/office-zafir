import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { ShippingGuideView } from '@/views/front-pages/help/ShippingGuideView';

export const metadata: Metadata = {
  title: "Shipping Guide — Delivery Timelines Explained | Zafir360",
};

export default async function ShippingGuidePage({ params }: PageProps<'/[lang]/shipping-guide'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ShippingGuideView lang={lang} />;
}
