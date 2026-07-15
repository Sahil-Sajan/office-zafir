import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { ContainerShippingView } from '@/views/front-pages/wholesale/ContainerShippingView';

export const metadata: Metadata = {
  title: "Container Shipping & Freight Logistics | Zafir360",
};

export default async function ContainerShippingPage({ params }: PageProps<'/[lang]/container-shipping'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ContainerShippingView lang={lang} />;
}