import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { BlogView } from '@/views/front-pages/help/BlogView';

export default async function BlogPage({ params }: PageProps<'/[lang]/blog'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <BlogView lang={lang} />;
}
