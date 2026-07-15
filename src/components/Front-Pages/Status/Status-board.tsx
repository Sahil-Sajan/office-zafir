interface SystemStatus {
  name: string;
  desc: string;
  uptime: string;
}

const SYSTEMS: SystemStatus[] = [
  { name: "Marketplace Platform", desc: "Browsing, search, and product pages", uptime: "99.98%" },
  { name: "Payments & Escrow", desc: "Wallet, escrow release, cash-on-delivery", uptime: "99.95%" },
  { name: "JayakHub Logistics", desc: "Fulfillment, tracking, delivery updates", uptime: "99.91%" },
  { name: "Factory Verification", desc: "Supplier onboarding and audit pipeline", uptime: "100.00%" },
  { name: "Search & Discovery", desc: "Product search and category browsing", uptime: "99.97%" },
];

export default function StatusBoard() {
  return (
    <div className="px-4 sm:px-7 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="border border-[#F0EADB] rounded-[12px] divide-y divide-[#F0EADB]">
          {SYSTEMS.map((s) => (
            <div key={s.name} className="flex items-center justify-between gap-4 p-4 sm:p-5">
              <div>
                <div className="text-[0.92rem] font-semibold text-[#0E241C]">{s.name}</div>
                <div className="text-[0.8rem] text-[#5B6961] mt-0.5">{s.desc}</div>
              </div>
              <div className="flex items-center gap-4 flex-none">
                <span className="text-[0.8rem] text-[#5B6961] tabular-nums hidden sm:inline">{s.uptime} uptime (90d)</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0EADB] text-[#1F5C4D] text-[0.76rem] font-semibold">
                  <span className="size-1.5 rounded-full bg-[#1F5C4D]" /> Operational
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[0.78rem] text-[#5B6961] mt-4">
          This is a static status summary — the platform has no live monitoring/incident backend yet, so uptime
          figures above are illustrative, not pulled from a real metrics source.
        </p>
      </div>
    </div>
  );
}
