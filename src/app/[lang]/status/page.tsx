import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { StatusView } from '@/views/front-pages/trust/StatusView';

export const metadata: Metadata = {
  title: "Platform Status | Zafir360",
};

export default async function StatusPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <StatusView />;
}
