import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { SignupView } from '@/views/auth/SignupView';

export default async function SignupPage({ params }: PageProps<'/[lang]/signup'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <SignupView lang={lang} />;
}
