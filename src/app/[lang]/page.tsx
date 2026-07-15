import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/utils/getDictionary";
import { HomeView } from "@/views/front-pages/HomeView";

export default async function HomePage({
  params,
}: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const home = dict.home as Record<string, string>;

  return <HomeView lang={lang} home={home} />;
}
