import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { SellerDashboardView } from "@/views/dashboards/SellerDashboardView";

export default async function SellerPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <SellerDashboardView lang={lang} />;
}
