import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { SellerAgreementView } from '@/views/front-pages/legal/SellerAgreementView';

export default async function SellerAgreementPage({ params }: PageProps<'/[lang]/seller-agreement'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <SellerAgreementView lang={lang} />;
}
