import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return <DashboardShell lang={lang}>{children}</DashboardShell>;
}
