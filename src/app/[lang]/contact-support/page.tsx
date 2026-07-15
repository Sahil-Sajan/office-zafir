import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { ContactSupportView } from '@/views/front-pages/help/ContactSupportView';

export const metadata: Metadata = {
  title: "Contact Our Support Team Directly | Zafir360",
};

export default async function ContactSupportPage({ params }: PageProps<'/[lang]/contact-support'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ContactSupportView lang={lang} />;
}
