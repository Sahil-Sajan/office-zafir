import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { WholesaleDashboardView } from "@/views/dashboards/WholesaleDashboardView";

export default async function WholesalePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <WholesaleDashboardView lang={lang} />;
}
