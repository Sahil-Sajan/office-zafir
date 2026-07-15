import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { PressMediaView } from '@/views/front-pages/PressMediaView';

export default async function PressMediaPage({ params }: PageProps<'/[lang]/press-media'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <PressMediaView lang={lang} />;
}