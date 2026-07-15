export default function StorePreview() {
  return (
    <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            What you're building
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Every field is yours <span className="text-[#C9A853] italic">to edit.</span>
          </h2>
        </div>

        <div className="bg-white border border-[#F0EADB] rounded-[16px] overflow-hidden">
          <div className="relative h-[160px]" style={{ background: "linear-gradient(120deg, #0E241C 0%, #3a2c1f 45%, #234A3A 100%)" }}>
            <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[0.7rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-white/90 text-[#0E241C]">
              ✎ Edit banner
            </span>
          </div>
          <div className="px-4 sm:px-6 pb-6">
            <div className="flex items-center gap-3 sm:gap-5 -mt-10 relative z-10">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[10px] bg-white border-4 border-white shadow-[0_8px_24px_rgba(14,36,28,0.08)] flex items-center justify-center text-[1.4rem] sm:text-[1.7rem] font-extrabold text-[#234A3A] shrink-0">
                +
                <span className="absolute -bottom-2 -right-2 inline-flex items-center justify-center size-6 rounded-full bg-[#0E241C] text-white text-[0.7rem]">✎</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="h-5 w-full max-w-[220px] rounded-[4px] bg-[#F0EADB] border border-dashed border-[#F0EADB] flex items-center px-2 text-[0.75rem] text-[#5B6961]">Your store name</div>
                <div className="h-4 w-full max-w-[280px] rounded-[4px] bg-[#F0EADB] border border-dashed border-[#F0EADB] mt-1.5 flex items-center px-2 text-[0.7rem] text-[#5B6961] truncate">zafir360.com/store/your-name</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="border border-[#F0EADB] rounded-[10px] p-4">
                <div className="text-[0.78rem] font-semibold text-[#0E241C] mb-2">Return policy</div>
                <div className="h-3 w-full rounded-[4px] bg-[#F0EADB]" />
                <div className="h-3 w-[70%] rounded-[4px] bg-[#F0EADB] mt-1.5" />
              </div>
              <div className="border border-[#F0EADB] rounded-[10px] p-4">
                <div className="text-[0.78rem] font-semibold text-[#0E241C] mb-2">Shipping timeline</div>
                <div className="h-3 w-full rounded-[4px] bg-[#F0EADB]" />
                <div className="h-3 w-[60%] rounded-[4px] bg-[#F0EADB] mt-1.5" />
              </div>
              <div className="border border-[#F0EADB] rounded-[10px] p-4">
                <div className="text-[0.78rem] font-semibold text-[#0E241C] mb-2">First product</div>
                <div className="h-3 w-full rounded-[4px] bg-[#F0EADB]" />
                <div className="h-3 w-[80%] rounded-[4px] bg-[#F0EADB] mt-1.5" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-6 pt-5 border-t border-[#F0EADB]">
              <span className="text-[0.82rem] text-[#5B6961]">Draft — not visible to buyers yet</span>
              <span className="inline-flex items-center gap-2 px-[16px] py-[8px] rounded-[6px] text-[0.85rem] font-semibold bg-[#17362A] text-white">
                Preview &amp; Publish →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
