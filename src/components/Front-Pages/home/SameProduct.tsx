import Link from "next/link"

interface SameProductProps {
  home: Record<string, string>;
}

export default function BentoGrid({ home }: SameProductProps) {
  const t = (key: string, fallback: string) => home[key] ?? fallback;

  const tiles = [
    {
      href: "/features",
      dark: true,
      w2: true,
      h2: true,
      eyebrow: null,
      label: t("sameProduct.tile1.label", "Live Sync"),
      title: t("sameProduct.tile1.title", "Sell it once, everywhere sees it."),
      desc: t("sameProduct.tile1.desc", "Buyers get MOQ and price tiers, sellers get their cost, shoppers get the retail price — same product, one truth. Move one unit and the count drops everywhere at once."),
      bigNum: "1",
      bigUnit: t("sameProduct.tile1.bigUnit", "index"),
      linkText: t("sameProduct.tile1.linkText", "See the architecture →"),
      bgIcon: "⬡",
    },
    {
      href: "/features#tier1",
      eyebrow: t("sameProduct.tile2.eyebrow", "Wholesale"),
      bigNum: "75",
      desc: t("sameProduct.tile2.desc", "features for buying direct from the factory"),
    },
    {
      href: "/sellers",
      eyebrow: t("sameProduct.tile3.eyebrow", "Marketplace"),
      bigNum: "55",
      desc: t("sameProduct.tile3.desc", "features for reselling what you bought"),
    },
    {
      href: "/categories",
      eyebrow: t("sameProduct.tile4.eyebrow", "Consumer"),
      bigNum: "65",
      desc: t("sameProduct.tile4.desc", "features for shopping and getting it delivered"),
    },
    {
      href: "/platform",
      eyebrow: t("sameProduct.tile5.eyebrow", "Platform"),
      bigNum: "105",
      desc: t("sameProduct.tile5.desc", "features running everything above"),
    },
    {
      href: "/why-zafir360",
      eyebrow: t("sameProduct.tile5b.eyebrow", "Escrow"),
      bigNum: "100",
      bigUnit: "%",
      desc: t("sameProduct.tile5b.desc", "of wholesale funds held until delivery is confirmed"),
    },
    {
      href: null,
      brass: true,
      eyebrow: t("sameProduct.tile6.eyebrow", "Revenue model"),
      bigNum: "10",
      desc: t("sameProduct.tile6.desc", "ways the platform earns on one item, moving once"),
      bgIcon: "◈",
    },
    {
      href: null,
      eyebrow: t("sameProduct.tile7.eyebrow", "Under the hood"),
      bigNum: "15",
      desc: t("sameProduct.tile7.desc", "microservices, none of them yours to run"),
    },
    {
      href: null,
      eyebrow: t("sameProduct.tile8.eyebrow", "Built for Iraq"),
      bigNum: "3",
      desc: t("sameProduct.tile8.desc", "languages, Arabic first — not bolted on after"),
    },
    {
      href: null,
      w2: true,
      eyebrow: t("sameProduct.tile9.eyebrow", "Standing by"),
      bigNum: "99.9",
      bigUnit: "%",
      desc: t("sameProduct.tile9.desc", "uptime target, backed by a Bahrain-to-Frankfurt failover"),
    },
    {
      href: "/seller-pricing",
      eyebrow: t("sameProduct.tile10.eyebrow", "Payout cycle"),
      bigNum: "7",
      bigUnit: t("sameProduct.tile10.bigUnit", "days"),
      desc: t("sameProduct.tile10.desc", "net earnings post automatically, no request needed"),
    },
    {
      href: "/wholesale",
      eyebrow: t("sameProduct.tile11.eyebrow", "Coverage"),
      bigNum: "18",
      desc: t("sameProduct.tile11.desc", "governorates reached through JayakHub delivery"),
    },
  ];

  return (
    <section className="">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="mb-9 text-center sm:text-left">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            {t("sameProduct.eyebrow", "One index, three tiers")}
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            {(() => {
              const title = t("sameProduct.title", "The same product, sold three times.");
              const gold = "sold three times.";
              return title.includes(gold)
                ? <>{title.slice(0, -gold.length)}<span className="text-[#C9A853] italic">{gold}</span></>
                : title;
            })()}
          </h2>
          <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65] mt-3">
            {t("sameProduct.lede", "A factory item can carry MOQ pricing for a wholesale buyer, land in a reseller&apos;s storefront with one click, and reach a consumer&apos;s doorstep — all without a single duplicated record.")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] auto-rows-auto sm:auto-rows-[150px]">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={[
                "relative rounded-[16px] p-6 flex flex-col justify-between overflow-hidden transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)]",
                t.dark ? "bg-[#0E241C] border-[#0E241C] text-white" : "bg-white border border-[#F0EADB]",
                t.brass
                  ? "bg-gradient-to-br from-[#17362A] to-[#234A3A] border-[#234A3A] text-white"
                  : "",
                t.w2 ? "sm:col-span-2" : "",
                t.h2 ? "sm:row-span-2" : "",
                t.href ? "cursor-pointer" : "",
              ].join(" ")}
            >
              {t.href ? (
                <Link href={t.href} className="absolute inset-0 z-10" />
              ) : null}
              <div className="z-[1]">
                {t.eyebrow && (
                  <span className={`text-[0.78rem] font-semibold tracking-[0.08em] uppercase ${t.brass ? "text-white/85" : "text-[#234A3A]"}`}>
                    {t.eyebrow}
                  </span>
                )}
                {t.label && (
                  <span className="text-[0.78rem] font-bold tabular-nums text-[#C9A853]">{t.label}</span>
                )}
                {t.title && (
                  <h3 className="text-[1rem] font-bold mt-2">{t.title}</h3>
                )}
                {t.desc && (
                  <p className={`text-[0.88rem] leading-[1.55] mt-2 ${t.dark || t.brass ? "text-[#C9A853] text-white/85" : "text-[#1C2420]"}`}>
                    {t.desc}
                  </p>
                )}
              </div>
              <div className={`flex items-end justify-between z-[1] ${t.title ? "mt-4" : ""}`}>
                <span className="text-[2.4rem] font-extrabold tracking-[-0.02em] leading-none">
                  {t.bigNum}
                  {t.bigUnit && (
                    <span className="text-[1.1rem] font-bold text-[#17362A] ml-[2px]">{t.bigUnit}</span>
                  )}
                </span>
                {t.linkText && (
                  <span className="text-[0.82rem] text-[#C9A853]">{t.linkText}</span>
                )}
              </div>
              {t.bgIcon && (
                <span className="absolute right-[-10px] bottom-[-14px] text-[5rem] opacity-[0.08] leading-none z-0">
                  {t.bgIcon}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
