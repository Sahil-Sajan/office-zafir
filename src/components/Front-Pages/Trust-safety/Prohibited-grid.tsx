const items = [
  { title: "Weapons", desc: "No listing category permits weapons or replicas." },
  { title: "Alcohol & drugs", desc: "Excluded outright under the Iraqi regulatory context." },
  { title: "Counterfeit goods", desc: "Blocked at moderation; repeat attempts escalate to a supplier or seller ban." },
  { title: "Adult & political content", desc: "Excluded from every tier of the catalogue." },
];

export default function ProhibitedGrid() {
  return (
    <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Trust &amp; Safety Framework
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] mb-3 text-[#0E241C]">
            What isn't allowed <span className="text-[#C9A853] italic">on Zafir360.</span>
          </h2>
          <p className="text-[1rem] text-[#1C2420] max-w-[720px] leading-[1.65]">
            A prohibited-items policy written for the Iraqi context — enforced at listing time by the moderation queue, not after the fact.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((i) => (
            <div key={i.title} className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
              <h3 className="text-[1rem] font-bold">{i.title}</h3>
              <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
