const steps = [
  { title: "On-site visit", desc: "Sam visits the factory floor in person — no video call, no third-party agent." },
  { title: "Document check", desc: "Business registration, certifications, and export licenses verified against the issuing authority." },
  { title: "Capacity audit", desc: "Claimed monthly output and MOQ are checked against the actual production line." },
  { title: "Sample review", desc: "Product samples are inspected for quality before the listing goes live." },
  { title: "Ongoing monitoring", desc: "Buyer feedback and dispute history can trigger a re-review or instant delisting." },
];

export default function VerificationCriteria() {
  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            How verification works
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Five checks, before a factory ever lists.
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
  );
}
