const mentions = [
  { year: "2025", outlet: "Arab News", quote: "How Zafir360 is digitising Iraq's informal trade economy", rtl: false },
  { year: "2025", outlet: "Tech Crunch Arabic", quote: "The B2B startup connecting Iraqi factories to global supply chains", rtl: false },
  { year: "2024", outlet: "Al-Sabah", quote: "قصة زافير٣٦٠ تعيد رسم خريطة التجارة الإلكترونية في العراق", rtl: true },
  { year: "2024", outlet: "Gulf Business", quote: "Iraq's Zafir360: building commerce infrastructure from scratch", rtl: false },
];

export default function InTheNews() {
  return (
    <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            In the news
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            What others <span className="text-[#C9A853] italic">are saying.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mentions.map((m) => (
            <div key={m.outlet} className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
              <span className="inline-flex items-center text-[0.72rem] font-semibold px-[10px] py-[3px] rounded-[6px] bg-[#F0EADB] text-[#234A3A]">
                {m.year}
              </span>
              <h3 className="text-[1rem] font-bold mt-3">{m.outlet}</h3>
              <p
                dir={m.rtl ? "rtl" : "ltr"}
                className={`text-[0.85rem] text-[#1C2420] leading-[1.6] mt-2 ${m.rtl ? "text-right" : ""}`}
              >
                {m.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
