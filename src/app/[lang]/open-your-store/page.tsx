import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { OpenYourStoreView } from '@/views/front-pages/seller/OpenYourStoreView';

export const metadata: Metadata = {
  title: "Open Your Storefront — Five Steps to Live | Zafir360",
};

export default async function OpenYourStorePage({ params }: PageProps<'/[lang]/open-your-store'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <OpenYourStoreView lang={lang} />;
}