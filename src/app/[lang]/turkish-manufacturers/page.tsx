import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { TurkishManufacturersView } from '@/views/front-pages/factory/TurkishManufacturersView';

export default async function TurkishManufacturersPage({ params }: PageProps<'/[lang]/turkish-manufacturers'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <TurkishManufacturersView lang={lang} />;
}