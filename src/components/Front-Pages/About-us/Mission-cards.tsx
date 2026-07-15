interface MissionCardsProps {
  about: Record<string, string>;
}

export default function MissionCards({ about }: MissionCardsProps) {
  const t = (key: string, fallback: string) => about[key] ?? fallback;

  const items = [
    {
      icon: "\uD83C\uDF0D",
      title: t("mission.card1.title", "Connect Communities"),
      desc: t("mission.card1.desc", "Bridging all 18 governorates of Iraq \u2014 e-commerce built to be accessible, inclusive, and convenient for every citizen."),
    },
    {
      icon: "\uD83D\uDCC8",
      title: t("mission.card2.title", "Empower Entrepreneurs"),
      desc: t("mission.card2.desc", "Sellers get real tools, data-driven insight, and education to grow \u2014 not just a listing page."),
    },
    {
      icon: "\uD83D\uDEE1\uFE0F",
      title: t("mission.card3.title", "Trust & Security"),
      desc: t("mission.card3.desc", "Secure transactions, transparent processes, and buyer protection \u2014 the baseline, not the upsell."),
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-9 flex flex-col items-center text-center">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            {t("mission.eyebrow", "Our mission")}
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            {(() => {
              const title = t("mission.title", "Connect communities.");
              const gold = "communities.";
              return title.includes(gold)
                ? <>{title.slice(0, -gold.length)}<span className="text-[#C9A853] italic">{gold}</span></>
                : title;
            })()}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#F0EADB] rounded-[16px] p-7 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-[14px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.6rem]">
                {item.icon}
              </div>
              <h3 className="text-[1.15rem] font-bold mt-4">{item.title}</h3>
              <p className="text-[0.88rem] text-[#1C2420] leading-[1.55] mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
