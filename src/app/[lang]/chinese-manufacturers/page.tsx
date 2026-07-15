import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { ChineseManufacturersView } from '@/views/front-pages/factory/ChineseManufacturersView';

export default async function ChineseManufacturersPage({ params }: PageProps<'/[lang]/chinese-manufacturers'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ChineseManufacturersView lang={lang} />;
}