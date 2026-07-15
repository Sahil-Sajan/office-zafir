import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { FactoryInspectionProcessView } from '@/views/front-pages/trust/FactoryInspectionProcessView';

export const metadata: Metadata = {
  title: "Inside Our Factory Inspection Process | Zafir360",
};

export default async function FactoryInspectionProcessPage({ params }: PageProps<'/[lang]/factory-inspection-process'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <FactoryInspectionProcessView lang={lang} />;
}