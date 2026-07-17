import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { OtpView } from "@/views/auth/OtpView";

export const metadata: Metadata = {
  title: "Verify Code | Zafir360",
};

export default async function VerifyOtpPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ email?: string; context?: string }>;
}) {
  const { lang } = await params;
  const { email } = await searchParams;
  if (!hasLocale(lang)) notFound();
  return <OtpView lang={lang} email={email} />;
}
