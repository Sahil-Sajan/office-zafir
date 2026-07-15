import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { PrivacyPolicyView } from '@/views/front-pages/legal/PrivacyPolicyView';

export default async function PrivacyPolicyPage({ params }: PageProps<'/[lang]/privacy-policy'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <PrivacyPolicyView lang={lang} />;
}
