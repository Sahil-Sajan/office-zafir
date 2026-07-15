import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { ReturnsGuideView } from '@/views/front-pages/help/ReturnsGuideView';

export const metadata: Metadata = {
  title: "Returns Guide — How Refunds Actually Work | Zafir360",
};

export default async function ReturnsGuidePage({ params }: PageProps<'/[lang]/returns-guide'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ReturnsGuideView lang={lang} />;
}
