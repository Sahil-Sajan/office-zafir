import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/utils/getDictionary";
import { AboutView } from '@/views/front-pages/AboutView';

export const metadata: Metadata = {
  title: "About Us — Iraq's Premier B2B2C Marketplace | Zafir360",
};

export default async function AboutPage({ params }: PageProps<'/[lang]/about'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const about = dict.about as Record<string, string>;
  return <AboutView lang={lang} about={about} />;
}