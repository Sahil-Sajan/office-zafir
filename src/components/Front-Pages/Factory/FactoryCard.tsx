export interface Factory {
  name: string;
  city: string;
  country: "Turkey" | "China";
  category: string;
  moq: string;
}

export function FactoryCard({ f }: { f: Factory }) {
  const flag = f.country === "Turkey" ? "🇹🇷" : "🇨🇳";
  return (
    <div className="bg-white border border-[#F0EADB] rounded-[16px] p-6 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex-none flex items-center justify-center size-11 rounded-full bg-[#0E241C] text-white font-bold text-[0.85rem]">
            {f.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="text-[0.98rem] font-bold text-[#0E241C] leading-[1.25]">{f.name}</div>
            <div className="text-[0.8rem] text-[#1C2420]">{flag} {f.city}, {f.country}</div>
          </div>
        </div>
        <span
          className="flex-none inline-flex items-center gap-1 text-[0.68rem] font-semibold px-[8px] py-[3px] rounded-[6px] bg-[#F0EADB] text-[#234A3A]"
          title="Verified by Sam"
        >
          ✓ Verified
        </span>
      </div>
      <span className="inline-flex items-center text-[0.72rem] font-semibold px-[10px] py-[3px] rounded-[6px] bg-[#F0EADB] text-[#1C2420] mt-4">
        {f.category}
      </span>
      <p className="text-[0.85rem] text-[#1C2420] mt-2">MOQ from {f.moq}</p>
    </div>
  );
}
