import { notFound, redirect } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";

export default async function DashboardIndexPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  redirect(`/${lang}/dashboard/seller`);
}
