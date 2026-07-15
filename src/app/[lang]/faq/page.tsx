import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { FaqView } from '@/views/front-pages/help/FaqView';

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Zafir360",
};

export default async function FaqPage({ params }: PageProps<'/[lang]/faq'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <FaqView lang={lang} />;
}
