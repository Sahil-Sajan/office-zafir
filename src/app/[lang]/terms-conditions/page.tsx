import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { TermsConditionsView } from '@/views/front-pages/legal/TermsConditionsView';

export default async function TermsConditionsPage({ params }: PageProps<'/[lang]/terms-conditions'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <TermsConditionsView lang={lang} />;
}
