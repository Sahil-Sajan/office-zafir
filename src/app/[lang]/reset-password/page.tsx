import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { ResetPasswordView } from "@/views/auth/ResetPasswordView";

export const metadata: Metadata = {
  title: "Reset Password | Zafir360",
};

export default async function ResetPasswordPage({ params }: PageProps<'/[lang]/reset-password'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ResetPasswordView lang={lang} />;
}
