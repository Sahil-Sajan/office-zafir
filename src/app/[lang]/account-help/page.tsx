import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { AccountHelpView } from '@/views/front-pages/help/AccountHelpView';

export const metadata: Metadata = {
  title: "Manage Your Account, Security & Orders | Zafir360",
};

export default async function AccountHelpPage({ params }: PageProps<'/[lang]/account-help'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <AccountHelpView lang={lang} />;
}
