const rows = [
  { label: "Buyer quality", before: "Cold inbound emails, no verification", after: "KYB-verified importers only" },
  { label: "Payment risk", before: "Wire transfer and hope", after: "Escrow, released on delivery milestones" },
  { label: "Trust signal", before: "Self-written company profile", after: "Zafir360-verified badge, re-checked yearly" },
  { label: "Visibility", before: "Buried in generic search results", after: "Surfaced in country and category pages" },
  { label: "Language", before: "English-only or machine translation", after: "Native Arabic↔Turkish/Chinese messaging" },
];

export default function BenefitsCompare() {
  return (
    <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Before and after
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            What being verified <span className="text-[#C9A853] italic">actually replaces.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:hidden">
          {rows.map((r) => (
            <div key={r.label} className="bg-white border border-[#F0EADB] rounded-[12px] p-4">
              <span className="text-[0.9rem] font-semibold text-[#0E241C]">{r.label}</span>
              <div className="flex flex-col gap-1.5 mt-2.5">
                <div>
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.04em] text-[#5B6961]">Without Zafir360</span>
                  <p className="text-[0.85rem] text-[#5B6961] mt-0.5">{r.before}</p>
                </div>
                <div>
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.04em] text-[#234A3A]">With Zafir360</span>
                  <p className="text-[0.85rem] text-[#0E241C] font-medium mt-0.5">{r.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden sm:block bg-white border border-[#F0EADB] rounded-[16px] overflow-hidden">
          <div className="grid grid-cols-[1fr_1fr_1fr] px-6 py-3 border-b border-[#F0EADB] bg-[#FAF6EA]">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.04em] text-[#5B6961]"></span>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.04em] text-[#5B6961]">Without Zafir360</span>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.04em] text-[#234A3A]">With Zafir360</span>
          </div>
          {rows.map((r, i) => (
            <div key={r.label} className={`grid grid-cols-[1fr_1fr_1fr] px-6 py-4 ${i !== rows.length - 1 ? "border-b border-[#F0EADB]" : ""}`}>
              <span className="text-[0.9rem] font-semibold text-[#0E241C]">{r.label}</span>
              <span className="text-[0.85rem] text-[#5B6961]">{r.before}</span>
              <span className="text-[0.85rem] text-[#0E241C] font-medium">{r.after}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
