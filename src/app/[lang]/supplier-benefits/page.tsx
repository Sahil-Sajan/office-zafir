import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { SupplierBenefitsView } from '@/views/front-pages/supplier/SupplierBenefitsView';

export const metadata: Metadata = {
  title: "What Changes Once You're a Verified Supplier | Zafir360",
};

export default async function SupplierBenefitsPage({ params }: PageProps<'/[lang]/supplier-benefits'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <SupplierBenefitsView lang={lang} />;
}