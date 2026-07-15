const stats = [
  { num: "100K", suffix: "+", label: "Registered users" },
  { num: "5K", suffix: "+", label: "Daily orders" },
  { num: "40", suffix: "+", label: "Verified factories" },
  { num: "18", suffix: "", label: "Governorates covered" },
];

export default function StoryIntro() {
  return (
    <section className="py-16 border-t border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Where it started
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] mb-4 text-[#0E241C]">
            A problem worth solving.
          </h2>
          <p className="text-[1.05rem] text-[#1C2420] max-w-[760px] leading-[1.65]">
            Iraqi businesses were spending weeks sourcing from Turkey and China — cold-calling factories, wiring money abroad with no guarantees, waiting months for containers that sometimes never arrived. Our founders had lived this firsthand. So they built the platform they wished existed: verified factories, transparent pricing, escrow-protected payments, and door-to-door logistics under one roof.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="border border-[#F0EADB] rounded-[12px] p-6 text-center">
              <div className="text-[2rem] font-extrabold tracking-[-0.02em] text-[#0E241C] tabular-nums">
                {s.num}<span className="text-[#17362A]">{s.suffix}</span>
              </div>
              <div className="text-[0.85rem] text-[#1C2420] mt-2 leading-[1.4]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
