import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { FactoryVisitReportsView } from '@/views/front-pages/factory/FactoryVisitReportsView';

export default async function FactoryVisitReportsPage({ params }: PageProps<'/[lang]/factory-visit-reports'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <FactoryVisitReportsView lang={lang} />;
}