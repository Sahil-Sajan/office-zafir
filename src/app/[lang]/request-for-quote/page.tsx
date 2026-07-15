import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { RequestForQuoteView } from '@/views/front-pages/wholesale/RequestForQuoteView';

export const metadata: Metadata = {
  title: "Request a Quote From Up to Five Suppliers | Zafir360",
};

export default async function RequestForQuotePage({ params }: PageProps<'/[lang]/request-for-quote'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <RequestForQuoteView lang={lang} />;
}