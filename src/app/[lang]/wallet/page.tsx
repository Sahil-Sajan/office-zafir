import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { WalletView } from '@/views/front-pages/account/WalletView';

export const metadata: Metadata = { title: "Wallet | Zafir360" };

export default async function WalletPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <WalletView lang={lang} />;
}
