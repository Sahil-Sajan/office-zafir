import { Breadcrumb } from "@/components/common/Breadcrumb";

export default function GuidesHero({ lang }: { lang: string }) {
  return (
    <header className="px-4 sm:px-7 pt-12 sm:pt-[76px] pb-10 sm:pb-14 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center text-center">
        <Breadcrumb lang={lang} trail={[{ label: "Help Center", href: "/help-center" }, { label: "Buying Guides" }]} />
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px]">
          Buying Guides
        </span>
        <h1 className="max-w-[760px] mb-[18px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
          Buy with confidence, <span className="text-[#C9A853] italic">every tier.</span>
        </h1>
        <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
          From reading a supplier profile to negotiating payment terms — the practical guides behind every good purchase decision on Zafir360.
        </p>
      </div>
    </header>
  );
}
