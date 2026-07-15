import { Handshake, Cube, Search, Rocket, OpenHands } from "@/components/common/NavIcons";

const values = [
  { icon: <Handshake />, title: "Trust First", desc: "Every supplier is verified, every payment is protected. Trust is our foundation." },
  { icon: "🇮🇶", title: "Iraq-Built", desc: "Designed for Iraqi realities — IQD payments, Arabic-first UI, local logistics." },
  { icon: <Cube />, title: "End-to-End", desc: "From factory floor to your door. We own the full commerce chain." },
  { icon: <Search />, title: "Transparent", desc: "No hidden fees. Real-time tracking. Open commission structure." },
  { icon: <OpenHands />, title: "Inclusive", desc: "Startup or enterprise — our platform scales with every seller." },
  { icon: <Rocket />, title: "Always Forward", desc: "We invest in AI, logistics, and payments to keep Iraq competitive globally." },
];

export default function CoreValues() {
  return (
    <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Core values
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            What we stand <span className="text-[#C9A853] italic">for.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white border border-[#F0EADB] rounded-[16px] p-7 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-[14px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.6rem]">
                {v.icon}
              </div>
              <h3 className="text-[1.05rem] font-bold mt-4">{v.title}</h3>
              <p className="text-[0.9rem] text-[#1C2420] leading-[1.6] mt-2">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
