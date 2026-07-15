interface JourneyTimelineProps {
  about: Record<string, string>;
}

export default function JourneyTimeline({ about }: JourneyTimelineProps) {
  const t = (key: string, fallback: string) => about[key] ?? fallback;

  const steps = [
    {
      title: t("journey.step1.title", "2020 \u00B7 Founded"),
      desc: t("journey.step1.desc", "Zafir360 was founded with a bold vision to digitise Iraqi commerce, empower local entrepreneurs, and modernise trade nationwide."),
    },
    {
      title: t("journey.step2.title", "2021 \u00B7 Platform Launch"),
      desc: t("journey.step2.desc", "Officially launched in Baghdad with 100 sellers \u2014 a user-friendly platform and the foundation for a nationwide marketplace."),
    },
    {
      title: t("journey.step3.title", "2022 \u00B7 National Expansion"),
      desc: t("journey.step3.desc", "Rapidly expanded to all 18 governorates, connecting rural and urban communities with seamless digital transactions."),
    },
    {
      title: t("journey.step4.title", "2024 \u00B7 Scaling Growth"),
      desc: t("journey.step4.desc", "Surpassed 10,000 active sellers and hundreds of thousands of listings \u2014 Iraq\u2019s leading e-commerce platform."),
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            {t("journey.eyebrow", "Our journey")}
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            {(() => {
              const title = t("journey.title", "From idea to Iraq\u2019s marketplace.");
              const gold = "Iraq\u2019s marketplace.";
              return title.includes(gold)
                ? <>{title.slice(0, -gold.length)}<span className="text-[#C9A853] italic">{gold}</span></>
                : title;
            })()}
          </h2>
        </div>
        <div className="relative pl-9">
          <div className="absolute left-[11px] top-[6px] bottom-[6px] w-[2px] bg-[#F0EADB]" />
          {steps.map((step) => (
            <div key={step.title} className="relative pb-8 last:pb-0">
              <div className="absolute -left-9 top-[2px] w-6 h-6 rounded-full bg-[#F0EADB] border-2 border-[#17362A]" />
              <h3 className="text-[1rem] font-bold mb-1">{step.title}</h3>
              <p className="text-[0.9rem] text-[#1C2420]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
