import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { VerifiedFactoriesView } from '@/views/front-pages/factory/VerifiedFactoriesView';

export default async function VerifiedFactoriesPage({ params }: PageProps<'/[lang]/verified-factories'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <VerifiedFactoriesView lang={lang} />;
}