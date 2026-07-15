import { Link2, Phone, GlobeAlt, ClipboardList, Cube, Search } from "@/components/common/NavIcons";

const items = [
  { icon: Link2, title: "Branded URL", desc: "A clean, memorable link — zafir360.com/store/your-name — included free." },
  { icon: Phone, title: "Mobile-first storefront", desc: "Built for how Iraqi shoppers actually browse — fast on mobile data, no desktop-only layout." },
  { icon: GlobeAlt, title: "Arabic-first by default", desc: "Product pages, policies, and checkout render in Arabic first, with English and Kurdish available." },
  { icon: ClipboardList, title: "Policy templates", desc: "Return, shipping, and dispatch policy templates you can accept as-is or edit line by line." },
  { icon: Cube, title: "One-click wholesale import", desc: "Already bought it wholesale on Zafir360? Import it straight into your storefront, no re-typing." },
  { icon: Search, title: "Moderation before launch", desc: "Every first listing is reviewed before it goes live — the same trust bar every buyer sees." },
];

export default function Checklist() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            What's included
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Everything a storefront needs, <span className="text-[#C9A853] italic">out of the box.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#F0EADB] rounded-[16px] p-6 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.3rem]">
                <item.icon />
              </div>
              <h3 className="text-[1rem] font-bold mt-4">{item.title}</h3>
              <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
