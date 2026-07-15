import { ChartBar, Certificate, Camera, Ship, Trophy } from "@/components/common/NavIcons";

const tiles = [
  { icon: <ChartBar />, title: "Capacity & MOQ", desc: "Monthly output capacity and minimum order quantity per product line." },
  { icon: <Certificate />, title: "Certifications", desc: "ISO, CE, and industry-specific certificates, verified against the original document." },
  { icon: <Camera />, title: "Production Photos", desc: "Real factory-floor photos taken during Sam's visit — not stock images." },
  { icon: "⏱️", title: "Response Time", desc: "Average time this supplier takes to respond to a buyer's RFQ." },
  { icon: <Ship />, title: "Export History", desc: "Countries this factory has shipped to and years in operation." },
  { icon: <Trophy />, title: "Buyer Ratings", desc: "Verified ratings from Zafir360 buyers who completed an order with this factory." },
];

export default function ProfileIncludes() {
  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            What's included
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Six things <span className="text-[#C9A853] italic">every profile shows you.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiles.map((t) => (
            <div key={t.title} className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
              <div className="w-12 h-12 rounded-[12px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.3rem]">
                {t.icon}
              </div>
              <h3 className="text-[1rem] font-bold mt-4">{t.title}</h3>
              <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-2">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
