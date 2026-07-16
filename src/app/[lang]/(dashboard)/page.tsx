import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { redirect } from "next/navigation";

export default async function DashboardPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  redirect(`/${lang}/dashboard/seller`);
}
