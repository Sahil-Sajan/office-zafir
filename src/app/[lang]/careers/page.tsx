import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { CareersView } from '@/views/front-pages/CareersView';

export default async function CareersPage({ params }: PageProps<'/[lang]/careers'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <CareersView lang={lang} />;
}