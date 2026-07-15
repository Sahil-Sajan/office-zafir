import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { SupplierRegistrationView } from '@/views/front-pages/supplier/SupplierRegistrationView';

export const metadata: Metadata = {
  title: "Apply for Supplier Verification | Zafir360",
};

export default async function SupplierRegistrationPage({ params }: PageProps<'/[lang]/supplier-registration'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <SupplierRegistrationView lang={lang} />;
}