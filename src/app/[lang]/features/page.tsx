import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/utils/getDictionary";

import { FeaturesView } from "@/views/front-pages/FeautresView";

export const metadata: Metadata = {
  title: "Platform Features for Wholesale, Sellers & Buyers | Zafir360",
};

export default async function FeaturesPage({ params }: PageProps<'/[lang]/features'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const about = dict.about as Record<string, string>;
  const features = dict.features as Record<string, string>;
  return <FeaturesView lang={lang} about={about} features={features} />;
}