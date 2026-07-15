import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { CategoriesView } from '@/views/front-pages/marketplace/CategoriesView';

export const metadata: Metadata = {
  title: "Browse Every Product Category, Wholesale to Retail | Zafir360",
};

export default async function CategoriesPage({ params }: PageProps<'/[lang]/categories'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <CategoriesView lang={lang} />;
}