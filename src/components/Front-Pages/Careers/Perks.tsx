import { Cash, Home, BookOpen, HeartPulse, Plane, TrendingUp } from "@/components/common/NavIcons";

const perks = [
  { icon: <Cash />, title: "Competitive Pay", desc: "Top-of-market salaries in IQD/USD plus equity." },
  { icon: <Home />, title: "Remote-Friendly", desc: "Hybrid model — Baghdad HQ plus full remote options." },
  { icon: <BookOpen />, title: "Learning Budget", desc: "$1,000/year for courses, books, and conferences." },
  { icon: <HeartPulse />, title: "Healthcare", desc: "Full medical, dental, and vision for you and your family." },
  { icon: <Plane />, title: "Travel", desc: "Annual team retreat plus supplier visit trips to Turkey and China." },
  { icon: <TrendingUp />, title: "Growth", desc: "Fast-track promotions in a company that's still finding its shape." },
];

export default function Perks() {
  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Why Zafir360
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            What you get <span className="text-[#C9A853] italic">for building here.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {perks.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-[#F0EADB] rounded-[16px] p-7 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
            >
              <h3 className="text-[1.05rem] font-bold">{p.icon} {p.title}</h3>
              <p className="text-[0.9rem] text-[#1C2420] leading-[1.6] mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
