import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { ContactUsView } from '@/views/front-pages/ContactUsView';

export const metadata: Metadata = {
  title: "Get in Touch With Our Team | Zafir360",
};

export default async function ContactUsPage({ params }: PageProps<'/[lang]/contact-us'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ContactUsView lang={lang} />;
}