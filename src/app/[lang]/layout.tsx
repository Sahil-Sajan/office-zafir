import { notFound } from "next/navigation";
import { locales, localeDirections } from "@/config/i18n";
import { getDictionary, hasLocale } from "@/utils/getDictionary";
import { SiteChrome } from "@/components/common/SiteChrome";


export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const dir = localeDirections[lang];
  const nav = dict.nav as Record<string, string>;
  const footer = { ...(dict.footer as Record<string, string>), ...nav };

  return (
    <div dir={dir} className="flex min-h-screen flex-col">
      <SiteChrome lang={lang} nav={nav} footer={footer}>
        {children}
      </SiteChrome>
    </div>
  );
}
