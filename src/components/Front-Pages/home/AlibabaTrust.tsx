interface ComparisonProps {
  home: Record<string, string>;
}

export default function ComparisonCarousel({ home }: ComparisonProps) {
  const t = (key: string, fallback: string) => home[key] ?? fallback;

  const proofPoints = [
    { value: t("alibabaTrust.proof1.value", "100%"), label: t("alibabaTrust.proof1.label", "Factories visited before listing") },
    { value: t("alibabaTrust.proof2.value", "5,000+"), label: t("alibabaTrust.proof2.label", "RFQs completed") },
    { value: t("alibabaTrust.proof3.value", "18"), label: t("alibabaTrust.proof3.label", "Governorates covered") },
    { value: t("alibabaTrust.proof4.value", "$0"), label: t("alibabaTrust.proof4.label", "Lost to unreleased escrow") },
  ];

  const testimonials = [
    { quote: t("alibabaTrust.quote1", "Importing wholesale and reselling on the same platform cut our sourcing time in half."), attribution: t("alibabaTrust.quote1.attribution", "Marketplace seller, Basra") },
    { quote: t("alibabaTrust.quote2", "Buyers trust the verified badge enough that we stopped fielding ‘is this real’ messages entirely."), attribution: t("alibabaTrust.quote2.attribution", "Verified supplier, Mosul") },
    { quote: t("alibabaTrust.quote3", "Payouts landing every 7 days like clockwork let us reinvest in stock without waiting on cash flow."), attribution: t("alibabaTrust.quote3.attribution", "Marketplace seller, Karbala") },
  ];

  const comparisons = [
    {
      tag: t("alibabaTrust.comparison1.tag", "Comparator"),
      title: t("alibabaTrust.comparison1.title", "vs. Alibaba"),
      desc: t("alibabaTrust.comparison1.desc", "Every supplier is personally visited by Sam before it goes live. Trust is built in, not optional."),
    },
    {
      tag: t("alibabaTrust.comparison2.tag", "Comparator"),
      title: t("alibabaTrust.comparison2.title", "vs. Amazon"),
      desc: t("alibabaTrust.comparison2.desc", "Full wholesale import — MOQ, container pricing, proforma invoices, L/C, freight — sits on top of consumer retail."),
    },
    {
      tag: t("alibabaTrust.comparison3.tag", "Comparator"),
      title: t("alibabaTrust.comparison3.title", "vs. Noon"),
      desc: t("alibabaTrust.comparison3.desc", "Iraqi-founded, Arabic-first, with local operations and delivery owned through the JayakHub integration."),
    },
    {
      tag: t("alibabaTrust.comparison4.tag", "Comparator"),
      title: t("alibabaTrust.comparison4.title", "vs. Souq / Amazon.ae"),
      desc: t("alibabaTrust.comparison4.desc", "Built for Iraqi consumers and importers natively in Arabic — not a UAE storefront in English."),
    },
    {
      tag: t("alibabaTrust.comparison5.tag", "Comparator"),
      title: t("alibabaTrust.comparison5.title", "vs. Temu"),
      desc: t("alibabaTrust.comparison5.desc", "No factory-direct dropshipping gamble — every supplier is inspected before a single order ships, not after complaints pile up."),
    },
    {
      tag: t("alibabaTrust.comparison6.tag", "Comparator"),
      title: t("alibabaTrust.comparison6.title", "vs. Trade Shows"),
      desc: t("alibabaTrust.comparison6.desc", "No flight to Istanbul or Guangzhou needed — the same verified factories, RFQs, and pricing tiers, from a phone in Baghdad."),
    },
  ];

  return (
    <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex flex-col items-center text-center mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            {t("alibabaTrust.eyebrow", "Why this exists")}
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] max-w-[640px] text-[#0E241C]">
            {(() => {
              const title = t("alibabaTrust.title", "Alibaba's trust problem. Amazon's missing wholesale layer. Noon's foreign roots.");
              const gold = "Noon's foreign roots.";
              return title.includes(gold)
                ? <>{title.slice(0, -gold.length)}<span className="text-[#C9A853] italic">{gold}</span></>
                : title;
            })()}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-9">
          {proofPoints.map((p) => (
            <div key={p.label} className="bg-white border border-[#F0EADB] rounded-[12px] p-5 text-center">
              <div className="text-[1.7rem] font-extrabold tracking-[-0.02em] text-[#17362A]">{p.value}</div>
              <div className="text-[0.78rem] text-[#1C2420] leading-[1.4] mt-1">{p.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-9">
          {testimonials.map((tst) => (
            <div key={tst.attribution} className="bg-white border border-[#F0EADB] rounded-[12px] p-5">
              <p className="text-[0.85rem] text-[#1C2420] leading-[1.55] italic">&ldquo;{tst.quote}&rdquo;</p>
              <p className="text-[0.72rem] font-semibold text-[#234A3A] mt-2.5">{tst.attribution}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {comparisons.map((c) => (
            <div
              key={c.title}
              className="bg-white border border-[#F0EADB] rounded-[10px] p-6 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-250"
            >
              <span className="inline-block text-[0.72rem] font-semibold tracking-[0.04em] uppercase text-[#C9A853] bg-[#F0EADB] px-2 py-[3px] rounded">
                {c.tag}
              </span>
              <h3 className="text-[1.05rem] font-bold mt-4 mb-2">{c.title}</h3>
              <p className="text-[0.92rem] text-[#1C2420] leading-[1.6]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
