import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { ForgotPasswordView } from "@/views/auth/ForgotPasswordView";

export const metadata: Metadata = {
  title: "Forgot Password | Zafir360",
};

export default async function ForgotPasswordPage({ params }: PageProps<'/[lang]/forgot-password'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ForgotPasswordView lang={lang} />;
}
