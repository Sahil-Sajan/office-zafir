import { Factory, CreditCard, Lock, Target } from "@/components/common/NavIcons";

const pillars = [
  { icon: <Factory />, title: "Verified Suppliers", desc: "Every factory passes Sam's review before it's admitted — nobody self-lists." },
  { icon: <CreditCard />, title: "Secure Payments", desc: "PCI DSS Level 1, tokenised, never stored — the same standard banks are held to." },
  { icon: <Lock />, title: "Buyer Protection", desc: "Escrow holds the money until delivery actually happens — not on order confirmation." },
  { icon: <Target />, title: "Fraud Detection", desc: "IP scoring and device fingerprinting run quietly in the background — a 3-strike policy does the rest." },
];

export default function TrustPillars() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-[#F0EADB] rounded-[16px] p-7 text-center hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-[14px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.6rem] mx-auto">
                {p.icon}
              </div>
              <h3 className="text-[1rem] font-bold mt-4">{p.title}</h3>
              <p className="text-[0.85rem] text-[#1C2420] leading-[1.6] mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
