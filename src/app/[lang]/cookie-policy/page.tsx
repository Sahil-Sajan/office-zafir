import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { CookiePolicyView } from '@/views/front-pages/legal/CookiePolicyView';

export default async function CookiePolicyPage({ params }: PageProps<'/[lang]/cookie-policy'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <CookiePolicyView lang={lang} />;
}
