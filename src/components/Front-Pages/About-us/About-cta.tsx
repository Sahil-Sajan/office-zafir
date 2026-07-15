import Link from "next/link"

interface AboutCTAProps {
  about: Record<string, string>;
}

export default function AboutCTA({ about }: AboutCTAProps) {
  const t = (key: string, fallback: string) => about[key] ?? fallback;

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="bg-[#0E241C] text-white rounded-[16px] p-6 sm:p-[52px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 flex-wrap">
          <div>
            <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-[480px]">
              {(() => {
                const title = t("cta.title", "Shape the future of Iraqi commerce.");
                const gold = "of Iraqi commerce.";
                return title.includes(gold)
                  ? <>{title.slice(0, -gold.length)}<span className="text-[#C9A853] italic">{gold}</span></>
                  : title;
              })()}
            </h2>
            <p className="text-[#C9A853] mt-2.5 max-w-[440px]">
              {t("cta.lede", "Join thousands of sellers building thriving businesses on Zafir360 and driving the growth of Iraq\u2019s digital economy.")}
            </p>
          </div>
          <Link
            href="/become-a-seller"
            className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-white text-[#0E241C] no-underline hover:bg-[#F0EADB] transition-colors duration-150 w-full lg:w-auto"
          >
            {t("cta.btn", "Start Selling Today")}
          </Link>
        </div>
      </div>
    </section>
  )
}
