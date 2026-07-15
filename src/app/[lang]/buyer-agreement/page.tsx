import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { BuyerAgreementView } from '@/views/front-pages/legal/BuyerAgreementView';

export default async function BuyerAgreementPage({ params }: PageProps<'/[lang]/buyer-agreement'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <BuyerAgreementView lang={lang} />;
}
