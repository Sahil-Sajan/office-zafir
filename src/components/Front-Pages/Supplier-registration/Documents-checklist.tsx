import { Building, Receipt, Cube, Camera, Ruler, Certificate } from "@/components/common/NavIcons";

const documents = [
  { icon: Building, title: "Business registration", desc: "Valid commercial registration certificate for your company or factory." },
  { icon: Receipt, title: "Tax certificate", desc: "Current tax identification and registration documents for your jurisdiction." },
  { icon: Cube, title: "Product catalogue", desc: "Categories, specifications, MOQ, and pricing tiers for what you intend to list." },
  { icon: Camera, title: "Factory photos", desc: "Real photos of your production floor — not stock imagery or a supplier's showroom." },
  { icon: Ruler, title: "Capacity details", desc: "Monthly production capacity and typical lead times per product category." },
  { icon: Certificate, title: "Certifications", desc: "ISO, CE, or industry-specific certificates, if applicable to your product line." },
];

export default function DocumentsChecklist() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            What you'll need
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Six things to have ready before you apply.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {documents.map((d) => (
            <div
              key={d.title}
              className="bg-white border border-[#F0EADB] rounded-[16px] p-6 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.3rem]">
                <d.icon />
              </div>
              <h3 className="text-[1rem] font-bold mt-4">{d.title}</h3>
              <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-2">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
