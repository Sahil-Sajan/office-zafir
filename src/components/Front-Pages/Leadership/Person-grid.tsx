const people = [
  { initials: "SA", name: "Samar Al-Rashidi", role: "Co-Founder & CEO", tag: "Leadership", bio: "Ex-McKinsey. Built Iraq's first digital freight brokerage. 15+ years in supply chain across MENA." },
  { initials: "LM", name: "Lara Mansour", role: "Co-Founder & CTO", tag: "Engineering", bio: "MIT Computer Science. Built payment infrastructure at Careem. Architect of Zafir's multi-tier platform." },
  { initials: "OF", name: "Omar Fadhel", role: "Chief Operating Officer", tag: "Operations", bio: "Former logistics director at IQ Group. Manages the JayakHub partnership and 18-governorate delivery network." },
  { initials: "NA", name: "Nour Al-Khafaji", role: "Chief Product Officer", tag: "Product", bio: "RISD-trained designer. Led product at Souq.com (Amazon). Obsessed with Arabic-first UX for Iraqi consumers." },
  { initials: "KH", name: "Karrar Hussain", role: "VP Finance", tag: "Finance", bio: "Chartered accountant. Former CFO at Baghdad Construction Group. Oversees Zafir Wallet and escrow operations." },
  { initials: "AS", name: "Aya Salim", role: "VP Marketing", tag: "Growth", bio: "Growth marketer with 10 years in Iraqi digital media. Scaled Zafir from 0 to 100K users in 18 months." },
  { initials: "ZK", name: "Zaid Khatib", role: "Head of Supplier Relations", tag: "Partnerships", bio: "Based in Istanbul. Fluent in Arabic, Turkish, and Mandarin. Manages 40+ verified factory relationships." },
  { initials: "HI", name: "Hana Ibrahim", role: "Head of Trust & Safety", tag: "Trust", bio: "Former fraud analyst at Visa MENA. Leads Zafir's AI-driven risk engine protecting 100K+ transactions daily." },
];

export default function PersonGrid() {
  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {people.map((p) => (
            <div
              key={p.name}
              className="bg-white border border-[#F0EADB] rounded-[16px] p-6 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="flex-none flex items-center justify-center size-11 rounded-full bg-[#0E241C] text-white font-bold text-[0.9rem]">
                  {p.initials}
                </div>
                <div>
                  <div className="text-[0.98rem] font-bold text-[#0E241C] leading-[1.25]">{p.name}</div>
                  <div className="text-[0.82rem] text-[#1C2420]">{p.role}</div>
                </div>
              </div>
              <span className="inline-flex items-center text-[0.72rem] font-semibold px-[10px] py-[3px] rounded-[6px] bg-[#F0EADB] text-[#234A3A] mt-4">
                {p.tag}
              </span>
              <p className="text-[0.85rem] text-[#1C2420] leading-[1.6] mt-2">{p.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
