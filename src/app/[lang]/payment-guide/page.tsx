import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { PaymentGuideView } from '@/views/front-pages/help/PaymentGuideView';

export const metadata: Metadata = {
  title: "Payment Guide — Methods & Escrow Explained | Zafir360",
};

export default async function PaymentGuidePage({ params }: PageProps<'/[lang]/payment-guide'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <PaymentGuideView lang={lang} />;
}
