interface TimelineProps {
  home: Record<string, string>;
}

export default function Timeline({ home }: TimelineProps) {
  const t = (key: string, fallback: string) => home[key] ?? fallback;

  const steps = [
    {
      title: t("oneOrder.step1.title", "RFQ to a verified factory"),
      desc: t("oneOrder.step1.desc", "A buyer sends an RFQ to up to five Zafir360-verified suppliers; escrow holds funds once a quote is accepted."),
    },
    {
      title: t("oneOrder.step2.title", "Import into a storefront"),
      desc: t("oneOrder.step2.desc", "A marketplace seller one-click imports the same product into their store at retail pricing."),
    },
    {
      title: t("oneOrder.step3.title", "Consumer checkout"),
      desc: t("oneOrder.step3.desc", "A Baghdad shopper pays by Cash on Delivery or a local wallet in a three-step checkout."),
    },
    {
      title: t("oneOrder.step4.title", "JayakHub delivery"),
      desc: t("oneOrder.step4.desc", "A driver is assigned, tracked live, and a proof-of-delivery photo closes the order."),
    },
  ];

  return (
    <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-9">
          <div className="w-full text-center sm:w-auto sm:text-start">
            <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
              {t("oneOrder.eyebrow", "One order, four systems")}
            </span>
            <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
              {(() => {
                const title = t("oneOrder.title", "How a purchase moves through Zafir360.");
                const gold = "through Zafir360.";
                return title.includes(gold)
                  ? <>{title.slice(0, -gold.length)}<span className="text-[#C9A853] italic">{gold}</span></>
                  : title;
              })()}
            </h2>
          </div>
        </div>

        <div className="relative ps-9">
          <div className="absolute start-[11px] top-[6px] bottom-[6px] w-[2px] bg-[#C9A853]/40" />
          {steps.map((s) => (
            <div key={s.title} className="relative pb-8 last:pb-0">
              <div className="absolute -start-9 top-[2px] w-6 h-6 rounded-full bg-[#F0EADB] border-2 border-[#17362A]" />
              <h3 className="text-[1rem] font-bold mb-1">{s.title}</h3>
              <p className="text-[0.9rem] text-[#1C2420]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
