const reports = [
  { factory: "Anadolu Tekstil", country: "Turkey", city: "Bursa", date: "Apr 2025", verdict: "Approved", notes: "Clean floor, working fire safety systems, capacity matched claimed 80K units/month. Sample line inspected end-to-end." },
  { factory: "Shenzhen Elec Co.", country: "China", city: "Shenzhen", date: "Mar 2025", verdict: "Approved", notes: "SMT line and QC station confirmed. Certificates cross-checked against issuing body database." },
  { factory: "Ege Seramik", country: "Turkey", city: "Izmir", date: "Feb 2025", verdict: "Approved", notes: "Kiln capacity and glazing process reviewed on-site. Export documentation for EU shipments verified." },
  { factory: "Yiwu Toy Group", country: "China", city: "Yiwu", date: "Jan 2025", verdict: "Approved with conditions", notes: "Approved for listing; follow-up visit scheduled in 6 months to confirm new safety-testing lab." },
  { factory: "Marmara Mobilya", country: "Turkey", city: "Istanbul", date: "Dec 2024", verdict: "Approved", notes: "Wood sourcing chain and finishing workshop reviewed. Warehouse capacity matched listing." },
  { factory: "Guangzhou Home", country: "China", city: "Guangzhou", date: "Nov 2024", verdict: "Approved", notes: "Assembly line and packaging area inspected. Prior buyer complaints on packaging resolved on-site." },
];

export default function ReportList() {
  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex flex-col gap-5">
          {reports.map((r) => (
            <div key={r.factory} className="bg-white border border-[#F0EADB] rounded-[16px] p-6 flex gap-5 flex-wrap">
              <div className="flex-none w-[130px]">
                <div className="text-[0.85rem] font-semibold text-[#0E241C]">{r.date}</div>
                <div className="text-[0.8rem] text-[#1C2420] mt-1">{r.country === "Turkey" ? "🇹🇷" : "🇨🇳"} {r.city}</div>
              </div>
              <div className="flex-1 min-w-[240px]">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-[1rem] font-bold text-[#0E241C]">{r.factory}</h3>
                  <span
                    className={`inline-flex items-center text-[0.7rem] font-semibold px-[8px] py-[2px] rounded-[6px] ${
                      r.verdict === "Approved" ? "bg-[#F0EADB] text-[#17362A]" : "bg-[#F0EADB] text-[#234A3A]"
                    }`}
                  >
                    {r.verdict}
                  </span>
                </div>
                <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-1.5">{r.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
