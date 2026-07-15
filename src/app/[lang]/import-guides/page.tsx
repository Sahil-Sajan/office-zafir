import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { ImportGuidesView } from '@/views/front-pages/help/ImportGuidesView';

export default async function ImportGuidesPage({ params }: PageProps<'/[lang]/import-guides'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ImportGuidesView lang={lang} />;
}
