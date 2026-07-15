import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { WhyZafir360View } from '@/views/front-pages/trust/WhyZafir360View';

export default async function WhyZafir360Page({ params }: PageProps<'/[lang]/why-zafir360'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <WhyZafir360View lang={lang} />;
}