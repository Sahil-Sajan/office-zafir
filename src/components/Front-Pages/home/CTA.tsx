import Link from "next/link"

interface CTAProps {
  home: Record<string, string>;
}

export default function CTABand({ home }: CTAProps) {
  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="bg-[#0E241C] text-white rounded-[16px] p-6 sm:p-[52px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 flex-wrap">
          <div>
            <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] max-w-[480px]">
              {(() => {
                const title = home["cta.title"] ?? "See how a single order moves through the system.";
                const gold = "through the system.";
                return title.includes(gold)
                  ? <>{title.slice(0, -gold.length)}<span className="text-[#C9A853] italic">{gold}</span></>
                  : title;
              })()}
            </h2>
            <p className="text-[#C9A853] mt-2.5 max-w-[440px]">
              {home["cta.lede"] ?? "From factory RFQ to a doorstep in Baghdad — walk through the architecture, the trust framework, or the seller economics."}
            </p>
          </div>
          <div className="flex gap-3 flex-wrap w-full lg:w-auto">
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-white text-[#0E241C] no-underline hover:bg-[#F0EADB] transition-colors duration-150"
            >
              {home["cta.btn1"] ?? "View Architecture"}
            </Link>
            <Link
              href="/why-zafir360"
              className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-transparent text-white border border-white/25 no-underline hover:border-[#17362A] transition-all duration-150"
            >
              {home["cta.btn2"] ?? "Trust & Safety"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
