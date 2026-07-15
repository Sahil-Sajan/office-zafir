interface CoreValuesProps {
  about: Record<string, string>;
}

export default function CoreValues({ about }: CoreValuesProps) {
  const t = (key: string, fallback: string) => about[key] ?? fallback;

  const values = [
    {
      title: t("values.card1.title", "Customer-Centric"),
      desc: t("values.card1.desc", "Every decision, every feature, is designed around what our users actually need."),
    },
    {
      title: t("values.card2.title", "Trust & Safety"),
      desc: t("values.card2.desc", "A secure environment for buyers and sellers \u2014 reliable transactions, long-term confidence."),
    },
    {
      title: t("values.card3.title", "Continuous Innovation"),
      desc: t("values.card3.desc", "Technology and analytics that keep improving the platform, not just maintaining it."),
    },
    {
      title: t("values.card4.title", "Inclusion & Accessibility"),
      desc: t("values.card4.desc", "Open to sellers from every region, background, and business size \u2014 not just the biggest."),
    },
  ];

  return (
    <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9 flex flex-col items-center text-center">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            {t("values.eyebrow", "Our core values")}
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            {(() => {
              const title = t("values.title", "What we won\u2019t compromise on.");
              const gold = "compromise on.";
              return title.includes(gold)
                ? <>{title.slice(0, -gold.length)}<span className="text-[#C9A853] italic">{gold}</span></>
                : title;
            })()}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 bg-[#F0EADB] border border-[#F0EADB] rounded-[10px] overflow-hidden">
          {values.map((v) => (
            <div key={v.title} className="bg-white p-5 sm:p-6">
              <h3 className="text-[1.05rem] font-bold mb-2">{v.title}</h3>
              <p className="text-[0.92rem] text-[#1C2420] leading-[1.6]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
