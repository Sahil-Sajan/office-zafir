const roles = [
  { domain: "Engineering", title: "Senior Full-Stack Engineer", location: "Baghdad / Remote · Full-time" },
  { domain: "Product", title: "Product Designer (Arabic UX)", location: "Baghdad / Remote · Full-time" },
  { domain: "Operations", title: "Logistics Operations Manager", location: "Baghdad · Full-time" },
  { domain: "Partnerships", title: "Supplier Relations Specialist", location: "Istanbul / Remote · Full-time" },
  { domain: "Marketing", title: "Growth Marketing Manager", location: "Baghdad / Remote · Full-time" },
  { domain: "Data", title: "Data Analyst", location: "Remote · Full-time" },
  { domain: "Support", title: "Customer Success Lead", location: "Baghdad · Full-time" },
  { domain: "Finance", title: "Finance & Compliance Officer", location: "Baghdad · Full-time" },
];

export default function OpenRoles() {
  return (
    <section id="open-roles" className="bg-[#F0EADB]/40 border-y border-[#F0EADB] py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Open positions
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Eight roles, <span className="text-[#C9A853] italic">eight teams.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roles.map((r) => (
            <div key={r.title} className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
              <span className="inline-flex items-center text-[0.72rem] font-semibold px-[10px] py-[3px] rounded-[6px] bg-[#F0EADB] text-[#234A3A]">
                {r.domain}
              </span>
              <h4 className="text-[1rem] font-bold mt-3">{r.title}</h4>
              <p className="text-[0.85rem] text-[#1C2420] mt-1">{r.location}</p>
              <a
                href="mailto:careers@zafir360.com"
                className="inline-flex items-center justify-center gap-1.5 px-[14px] py-[7px] rounded-[6px] text-[0.82rem] font-semibold bg-transparent text-[#0E241C] border border-[#F0EADB] no-underline hover:border-[#17362A] hover:text-[#234A3A] transition-colors duration-150 mt-4"
              >
                Apply →
              </a>
            </div>
          ))}
        </div>
        <div className="border-l-[3px] border-[#17362A] py-4 px-5 bg-[#F0EADB] rounded-r-[6px] text-[0.92rem] text-[#332F27] mt-9">
          <strong>Don't see your role?</strong> Send us your CV — we hire on talent, not just open headcount. <a href="mailto:careers@zafir360.com" className="text-[#234A3A] underline">careers@zafir360.com</a>
        </div>
      </div>
    </section>
  );
}
