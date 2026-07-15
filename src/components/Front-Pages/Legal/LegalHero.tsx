import { Breadcrumb } from "@/components/common/Breadcrumb";

interface LegalHeroProps {
  lang: string;
  title: string;
  updated: string;
}

export default function LegalHero({ lang, title, updated }: LegalHeroProps) {
  return (
    <header className="px-4 sm:px-7 py-12 sm:py-[76px] pb-10 sm:pb-14 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        <Breadcrumb lang={lang} trail={[{ label: "Home", href: "/" }, { label: title }]} />
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px]">
          Legal
        </span>
        <h1 className="max-w-[760px] mb-[10px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          {title}
        </h1>
        <p className="text-[0.95rem] text-[#5B6961]">Last updated: {updated}</p>
      </div>
    </header>
  );
}
