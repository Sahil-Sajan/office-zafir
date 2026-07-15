import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { SupplierAgreementView } from '@/views/front-pages/legal/SupplierAgreementView';

export default async function SupplierAgreementPage({ params }: PageProps<'/[lang]/supplier-agreement'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <SupplierAgreementView lang={lang} />;
}
