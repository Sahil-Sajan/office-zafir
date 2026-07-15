import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { BecomeASupplierView } from '@/views/front-pages/supplier/BecomeASupplierView';

export const metadata: Metadata = {
  title: "Become a Verified Wholesale Supplier | Zafir360",
};

export default async function BecomeASupplierPage({ params }: PageProps<'/[lang]/become-a-supplier'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <BecomeASupplierView lang={lang} />;
}