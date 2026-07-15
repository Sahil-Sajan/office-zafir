import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { FactoryDirectoryView } from '@/views/front-pages/factory/FactoryDirectoryView';

export default async function FactoryDirectoryPage({ params }: PageProps<'/[lang]/factory-directory'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <FactoryDirectoryView lang={lang} />;
}