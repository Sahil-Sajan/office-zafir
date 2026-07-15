import { Search, ShoppingCart, Cube } from "@/components/common/NavIcons";

interface SimpleStepsProps {
  home: Record<string, string>;
}

export default function SimpleSteps({ home }: SimpleStepsProps) {
  const t = (key: string, fallback: string) => home[key] ?? fallback;

  const steps = [
    { num: "1", icon: Search, title: t("simpleSteps.step1.title", "Browse"), desc: t("simpleSteps.step1.desc", "Search products, factories, or an HS code across every tier.") },
    { num: "2", icon: ShoppingCart, title: t("simpleSteps.step2.title", "Order"), desc: t("simpleSteps.step2.desc", "Pay by cash on delivery, local wallet, or escrow — pick what suits you.") },
    { num: "3", icon: Cube, title: t("simpleSteps.step3.title", "Delivered"), desc: t("simpleSteps.step3.desc", "JayakHub tracks your order live, door to door, anywhere in Iraq.") },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex flex-col items-center text-center mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            {t("simpleSteps.eyebrow", "How it works")}
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            {t("simpleSteps.title", "Shopping on Zafir360, ")}<span className="text-[#C9A853] italic">{t("simpleSteps.titleGold", "in three steps.")}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.num} className="relative bg-white border border-[#F0EADB] rounded-[16px] p-7 text-center">
              <div className="mx-auto flex items-center justify-center size-14 rounded-full bg-[#F0EADB] text-[#17362A] scale-125 mb-4">
                <s.icon />
              </div>
              <span className="absolute top-4 right-5 text-[0.78rem] font-bold text-[#C9A853] tabular-nums">{s.num}</span>
              <h3 className="text-[1.05rem] font-bold text-[#0E241C]">{s.title}</h3>
              <p className="text-[0.88rem] text-[#1C2420] leading-[1.55] mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
