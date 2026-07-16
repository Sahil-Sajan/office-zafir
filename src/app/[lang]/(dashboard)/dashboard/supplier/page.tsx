import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { SupplierDashboardView } from "@/views/dashboards/SupplierDashboardView";

export default async function SupplierPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <SupplierDashboardView lang={lang} />;
}
