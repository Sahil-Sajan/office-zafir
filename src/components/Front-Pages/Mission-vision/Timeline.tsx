const steps = [
  { title: "2021 · The Idea", desc: "Three Iraqi entrepreneurs saw a gap: no reliable B2B channel connecting Iraqi buyers to verified Turkish and Chinese factories. Zafir360 was born on a napkin in Baghdad." },
  { title: "2022 · First Suppliers", desc: "Onboarded 40 verified factories in Turkey and China, completed the first container shipment, and launched the RFQ platform for wholesale buyers." },
  { title: "2023 · Marketplace Launch", desc: "The B2C marketplace went live. Iraqi consumers could buy directly from verified sellers. JayakHub became our last-mile delivery partner across Baghdad." },
  { title: "2024 · 18 Governorates", desc: "Expanded coverage to all 18 Iraqi governorates, crossed 100,000 registered users, and launched Zafir Wallet and the Nuqat loyalty programme." },
  { title: "2025 · Regional Scale", desc: "Zafir360 processes over 5,000 orders daily, supports 3 tiers of trade, and is building Iraq's first end-to-end commerce infrastructure." },
];

export default function Timeline() {
  return (
    <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            The journey so far
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Five years, one problem, <span className="text-[#C9A853] italic">kept getting solved harder.</span>
          </h2>
        </div>
        <div className="relative pl-9">
          <div className="absolute left-[11px] top-[6px] bottom-[6px] w-[2px] bg-[#F0EADB]" />
          {steps.map((step) => (
            <div key={step.title} className="relative pb-8 last:pb-0">
              <div className="absolute -left-9 top-[2px] w-6 h-6 rounded-full bg-[#F0EADB] border-2 border-[#17362A]" />
              <h3 className="text-[1rem] font-bold mb-1">{step.title}</h3>
              <p className="text-[0.9rem] text-[#1C2420] leading-[1.6]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
