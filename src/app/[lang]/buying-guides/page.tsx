import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { BuyingGuidesView } from '@/views/front-pages/help/BuyingGuidesView';

export default async function BuyingGuidesPage({ params }: PageProps<'/[lang]/buying-guides'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <BuyingGuidesView lang={lang} />;
}
