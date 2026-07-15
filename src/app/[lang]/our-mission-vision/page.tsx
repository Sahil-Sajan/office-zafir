import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { OurMissionVisionView } from '@/views/front-pages/OurMissionVisionView';

export default async function OurMissionVisionPage({ params }: PageProps<'/[lang]/our-mission-vision'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <OurMissionVisionView lang={lang} />;
}