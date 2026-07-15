import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { FactoryProfilesView } from '@/views/front-pages/factory/FactoryProfilesView';

export default async function FactoryProfilesPage({ params }: PageProps<'/[lang]/factory-profiles'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <FactoryProfilesView lang={lang} />;
}