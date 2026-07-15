"use client";

import ImportCountries from "@/components/Front-Pages/Learning/Import-countries";
import ImportCta from "@/components/Front-Pages/Learning/Import-cta";
import ImportFaq from "@/components/Front-Pages/Learning/Import-faq";
import ImportHero from "@/components/Front-Pages/Learning/Import-hero";
import ImportNote from "@/components/Front-Pages/Learning/Import-note";

interface ImportGuidesViewProps {
  lang: string;
}

export function ImportGuidesView({ lang }: ImportGuidesViewProps) {
  return (
    <div>
      <ImportHero lang={lang} />
      <ImportCountries />
      <ImportFaq lang={lang} />
      <ImportNote lang={lang} />
      <ImportCta />
    </div>
  );
}
