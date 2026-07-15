import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { HelpCenterView } from '@/views/front-pages/help/HelpCenterView';

export const metadata: Metadata = {
  title: "Help Center — Guides, FAQs & Support | Zafir360",
};

export default async function HelpCenterPage({ params }: PageProps<'/[lang]/help-center'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <HelpCenterView lang={lang} />;
}
