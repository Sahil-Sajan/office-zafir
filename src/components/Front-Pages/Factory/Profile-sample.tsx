export default function ProfileSample() {
  return (
    <section className="bg-[#F0EADB]/40 border-t border-[#F0EADB] py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Sample profile
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Anadolu Tekstil, <span className="text-[#C9A853] italic">Bursa.</span>
          </h2>
        </div>
        <div className="bg-white border border-[#F0EADB] rounded-[16px] p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="flex-none flex items-center justify-center size-14 rounded-full bg-[#0E241C] text-white font-bold">
                AT
              </div>
              <div>
                <div className="text-[1.1rem] font-bold text-[#0E241C]">Anadolu Tekstil</div>
                <div className="text-[0.85rem] text-[#1C2420]">🇹🇷 Bursa, Turkey · Textile &amp; Apparel</div>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[12px] py-[5px] rounded-[999px] bg-[#17362A] text-white">
              ✓ Verified by Sam · Visited Apr 2025
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="border border-[#F0EADB] rounded-[10px] p-4">
              <div className="text-[1.3rem] font-extrabold text-[#0E241C]">80K</div>
              <div className="text-[0.78rem] text-[#1C2420] mt-1">Units / month</div>
            </div>
            <div className="border border-[#F0EADB] rounded-[10px] p-4">
              <div className="text-[1.3rem] font-extrabold text-[#0E241C]">300</div>
              <div className="text-[0.78rem] text-[#1C2420] mt-1">Unit MOQ</div>
            </div>
            <div className="border border-[#F0EADB] rounded-[10px] p-4">
              <div className="text-[1.3rem] font-extrabold text-[#0E241C]">12yr</div>
              <div className="text-[0.78rem] text-[#1C2420] mt-1">In operation</div>
            </div>
            <div className="border border-[#F0EADB] rounded-[10px] p-4">
              <div className="text-[1.3rem] font-extrabold text-[#0E241C]">18</div>
              <div className="text-[0.78rem] text-[#1C2420] mt-1">Export countries</div>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap mt-6">
            {["ISO 9001", "OEKO-TEX", "CE"].map((c) => (
              <span key={c} className="inline-flex items-center text-[0.75rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#234A3A]">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
