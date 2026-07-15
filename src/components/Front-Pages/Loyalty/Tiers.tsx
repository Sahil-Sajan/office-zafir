const tiers = [
  {
    name: "Bronze",
    threshold: "$0 – $4,999",
    sub: "Every account starts here",
    multiplier: "1× points",
    freeShip: "Free shipping over $500",
    support: "Standard email support",
    perk: "—",
    accent: false,
  },
  {
    name: "Silver",
    threshold: "$5,000 – $19,999",
    sub: "~40 units/yr at typical wholesale pricing",
    multiplier: "1.25× points",
    freeShip: "Free shipping over $300",
    support: "Priority email support (24h reply)",
    perk: "Birthday bonus: 500 Nuqat",
    accent: false,
  },
  {
    name: "Gold",
    threshold: "$20,000 – $74,999",
    sub: "Typical for a small store restocking quarterly",
    multiplier: "1.5× points",
    freeShip: "Free shipping over $150",
    support: "Priority phone + chat support",
    perk: "24h early access to flash sales",
    accent: true,
  },
  {
    name: "Platinum",
    threshold: "$75,000+",
    sub: "High-volume repeat wholesale buyers",
    multiplier: "2× points",
    freeShip: "Free shipping on every order",
    support: "Dedicated account manager",
    perk: "48h early access to flash sales + exclusive SKUs",
    accent: true,
  },
];

export default function Tiers() {
  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-2">◆ Membership tiers</span>
        <h2 className="text-[1.5rem] sm:text-[1.8rem] font-bold tracking-[-0.02em] text-[#0E241C] mb-2">
          Four tiers, based on <span className="text-[#C9A853] italic">trailing 12-month spend.</span>
        </h2>
        <p className="text-[0.9rem] text-[#5B6961] mb-8 max-w-[720px]">
          Your tier is recalculated automatically from your rolling annual purchase total — the more you order, the lower your shipping threshold and the higher your point multiplier.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white border rounded-[12px] p-5 sm:p-6 flex flex-col gap-3 ${
                tier.accent ? "border-[#C9A853]" : "border-[#F0EADB]"
              }`}
            >
              <div>
                <span className="text-[1.1rem] font-bold text-[#0E241C]">{tier.name}</span>
                <div className="text-[0.82rem] font-semibold text-[#17362A] mt-0.5">{tier.threshold} / yr</div>
                <div className="text-[0.74rem] text-[#5B6961] mt-1">{tier.sub}</div>
              </div>
              <div className="pt-3 border-t border-[#F0EADB] flex flex-col gap-2 text-[0.82rem] text-[#1C2420]">
                <div>
                  <span className="font-semibold text-[#0E241C]">{tier.multiplier}</span> on every purchase
                </div>
                <div>{tier.freeShip}</div>
                <div>{tier.support}</div>
                <div className="text-[#5B6961]">{tier.perk}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
