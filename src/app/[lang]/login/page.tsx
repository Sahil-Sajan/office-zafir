import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { LoginView } from '@/views/auth/LoginView';

export default async function LoginPage({ params }: PageProps<'/[lang]/login'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <LoginView lang={lang} />;
}
