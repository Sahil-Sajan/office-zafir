import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { BusinessTipsView } from '@/views/front-pages/help/BusinessTipsView';

export default async function BusinessTipsPage({ params }: PageProps<'/[lang]/business-tips'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <BusinessTipsView lang={lang} />;
}
