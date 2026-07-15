import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { MoqCalculatorView } from '@/views/front-pages/wholesale/MoqCalculatorView';

export const metadata: Metadata = {
  title: "MOQ Calculator — Price by Quantity | Zafir360",
};

export default async function MoqCalculatorPage({ params }: PageProps<'/[lang]/moq-calculator'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <MoqCalculatorView lang={lang} />;
}
