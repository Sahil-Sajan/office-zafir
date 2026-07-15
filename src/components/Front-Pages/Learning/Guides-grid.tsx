import { Factory, Cube, Ship, ClipboardList, Handshake, Search, CurrencyExchange, Refresh } from "@/components/common/NavIcons";

const guides = [
  { icon: Factory, title: "How to Choose a Supplier", desc: "Reading verification badges, inspection reports, and buyer ratings before you commit.", level: "Beginner" },
  { icon: Cube, title: "Understanding MOQ", desc: "How minimum order quantity works, and how to use the MOQ Calculator to size your first order.", level: "Beginner" },
  { icon: Ship, title: "Container Shipping 101", desc: "FCL vs LCL, lead times, and what actually happens between dispatch and delivery.", level: "Intermediate" },
  { icon: ClipboardList, title: "Customs & Duties Explained", desc: "The documents you need and how Zafir360's HS code lookup estimates your landed cost.", level: "Intermediate" },
  { icon: Handshake, title: "Negotiating Payment Terms", desc: "When to use escrow, deposits, or a Letter of Credit — and how to ask for better terms.", level: "Intermediate" },
  { icon: Search, title: "Quality Inspection Checklist", desc: "What to check in product samples before you approve a bulk production run.", level: "Advanced" },
  { icon: CurrencyExchange, title: "Managing Currency Risk", desc: "Working across IQD, USD, and TRY without losing margin to exchange-rate swings.", level: "Advanced" },
  { icon: Refresh, title: "Reordering & Supplier Relationships", desc: "Turning a one-off wholesale order into a repeat, better-priced supply line.", level: "Advanced" },
];

export default function GuidesGrid() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {guides.map((g) => (
            <a
              key={g.title}
              href="#"
              className="bg-white border border-[#F0EADB] rounded-[16px] p-6 no-underline hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-[12px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.3rem]">
                  <g.icon />
                </div>
                <span className="text-[0.7rem] font-semibold px-[8px] py-[3px] rounded-[6px] bg-[#F0EADB] text-[#5B6961]">
                  {g.level}
                </span>
              </div>
              <h3 className="text-[1.02rem] font-bold text-[#0E241C] mt-4">{g.title}</h3>
              <p className="text-[0.86rem] text-[#1C2420] leading-[1.6] mt-2">{g.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
