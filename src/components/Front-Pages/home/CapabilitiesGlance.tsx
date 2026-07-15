import { ShoppingBag, Storefront, Wallet, Cube, ShieldCheck, Cog } from "@/components/common/NavIcons";

interface CapabilitiesProps {
  home: Record<string, string>;
}

export default function FeatureGrid({ home }: CapabilitiesProps) {
  const t = (key: string, fallback: string) => home[key] ?? fallback;

  const categories = [
    {
      icon: ShoppingBag,
      title: t("capabilities.cat1.title", "Customer Experience"),
      items: [
        t("capabilities.cat1.item1", "Arabic-first search"),
        t("capabilities.cat1.item2", "Purchase-verified reviews"),
        t("capabilities.cat1.item3", "One-tap reorder"),
        t("capabilities.cat1.item4", "Live delivery tracking"),
      ],
    },
    {
      icon: Storefront,
      title: t("capabilities.cat2.title", "Seller Tools"),
      items: [
        t("capabilities.cat2.item1", "One-click wholesale import"),
        t("capabilities.cat2.item2", "Real-time inventory"),
        t("capabilities.cat2.item3", "Commission calculator"),
        t("capabilities.cat2.item4", "Performance scorecard"),
      ],
    },
    {
      icon: Wallet,
      title: t("capabilities.cat3.title", "Payment & Finance"),
      items: [
        t("capabilities.cat3.item1", "Escrow on every wholesale order"),
        t("capabilities.cat3.item2", "Multi-gateway payments"),
        t("capabilities.cat3.item3", "7-day seller payouts"),
        t("capabilities.cat3.item4", "Commission transparency"),
      ],
    },
    {
      icon: Cube,
      title: t("capabilities.cat4.title", "Operations & Logistics"),
      items: [
        t("capabilities.cat4.item1", "Full JayakHub API integration"),
        t("capabilities.cat4.item2", "Dynamic delivery fee engine"),
        t("capabilities.cat4.item3", "Container shipment tracking"),
        t("capabilities.cat4.item4", "Proof-of-delivery photo"),
      ],
    },
    {
      icon: ShieldCheck,
      title: t("capabilities.cat5.title", "Security & Compliance"),
      items: [
        t("capabilities.cat5.item1", "KYB / KYC on every account"),
        t("capabilities.cat5.item2", "IP + device fraud detection"),
        t("capabilities.cat5.item3", "AES-256 data encryption"),
        t("capabilities.cat5.item4", "Iraqi Central Bank compliance"),
      ],
    },
    {
      icon: Cog,
      title: t("capabilities.cat6.title", "Admin & Management"),
      items: [
        t("capabilities.cat6.item1", "Super admin dashboard"),
        t("capabilities.cat6.item2", "Role-based access control"),
        t("capabilities.cat6.item3", "Immutable audit log"),
        t("capabilities.cat6.item4", "Launch readiness gate"),
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex flex-col items-center text-center mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            {t("capabilities.eyebrow", "Capabilities at a glance")}
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            {(() => {
              const title = t("capabilities.title", "Six categories. Every one already shipped a feature you've seen on this page.");
              const gold = "you've seen on this page.";
              return title.includes(gold)
                ? <>{title.slice(0, -gold.length)}<span className="text-[#C9A853] italic">{gold}</span></>
                : title;
            })()}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white border border-[#F0EADB] rounded-[16px] p-7 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-[14px] flex-none bg-[#F0EADB] text-[#234A3A] flex items-center justify-center scale-125">
                  <cat.icon />
                </div>
                <h3 className="text-[1.15rem] font-bold">{cat.title}</h3>
              </div>
              <div className="flex flex-col gap-[2px]">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 py-[14px] pl-1 border-b border-[#F0EADB] text-[0.92rem] last:border-b-0"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#F0EADB] text-[#17362A] flex items-center justify-center text-[0.7rem] font-extrabold flex-none mt-[2px]">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
