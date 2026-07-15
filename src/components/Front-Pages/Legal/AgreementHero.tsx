import { Breadcrumb } from "@/components/common/Breadcrumb";

interface AgreementHeroProps {
  lang: string;
  title: string;
  updated: string;
  party: string;
}

export default function AgreementHero({ lang, title, updated, party }: AgreementHeroProps) {
  return (
    <header className="px-4 sm:px-7 py-12 sm:py-[76px] pb-10 sm:pb-14 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        <Breadcrumb lang={lang} trail={[{ label: "Home", href: "/" }, { label: title }]} />
        <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#C9A853] mb-[14px]">
          ✓ Legal · Binding Agreement
        </span>
        <h1 className="max-w-[760px] mb-[10px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          {title}
        </h1>
        <p className="text-[0.95rem] text-[#5B6961] mb-6">Effective / last updated: {updated}</p>

        <div className="flex items-center gap-2 sm:gap-4 max-w-[520px] bg-white border border-[#F0EADB] rounded-[12px] p-3 sm:p-5">
          <div className="flex-1 text-center">
            <div className="w-10 h-10 rounded-full bg-[#0E241C] text-white flex items-center justify-center font-bold text-[0.85rem] mx-auto">Z</div>
            <div className="text-[0.82rem] font-semibold text-[#0E241C] mt-2">Zafir360</div>
            <div className="text-[0.72rem] text-[#5B6961]">Platform Operator</div>
          </div>
          <div className="text-[#F0EADB] text-[1.2rem]">⇄</div>
          <div className="flex-1 text-center">
            <div className="w-10 h-10 rounded-full bg-[#17362A] text-white flex items-center justify-center font-bold text-[0.85rem] mx-auto">{party.slice(0, 1)}</div>
            <div className="text-[0.82rem] font-semibold text-[#0E241C] mt-2">{party}</div>
            <div className="text-[0.72rem] text-[#5B6961]">Counterparty</div>
          </div>
        </div>
      </div>
    </header>
  );
}
