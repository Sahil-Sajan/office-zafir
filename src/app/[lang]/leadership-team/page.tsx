import { notFound } from "next/navigation";
import { hasLocale } from "@/utils/getDictionary";
import { LeadershipTeamView } from '@/views/front-pages/LeadershipTeamView';

export default async function LeadershipTeamPage({ params }: PageProps<'/[lang]/leadership-team'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <LeadershipTeamView lang={lang} />;
}