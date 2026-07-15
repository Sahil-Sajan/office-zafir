export default function BadgeSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Verification badge
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            The badge <span className="text-[#C9A853] italic">that can't be bought.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-[#F0EADB] rounded-[16px] p-7">
            <span
              className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold px-[12px] py-[5px] rounded-[999px] bg-[#17362A] text-white animate-[pulseRing_2s_ease-out_infinite]"
            >
              Verified by Sam
            </span>
            <h3 className="text-[1.05rem] font-bold mt-4">Factory visit, not a form</h3>
            <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-2">
              Gold badge shows the exact visit date. It's issued after a personal factory inspection — not after a document upload.
            </p>
          </div>
          <div className="bg-white border border-[#F0EADB] rounded-[16px] p-7">
            <h3 className="text-[1.05rem] font-bold">Gated onboarding</h3>
            <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-2">
              Suppliers submit company details, photos, capacity, and certifications. Nothing goes live without Sam's approval.
            </p>
          </div>
          <div className="bg-white border border-[#F0EADB] rounded-[16px] p-7">
            <h3 className="text-[1.05rem] font-bold">Instant blacklist</h3>
            <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-2">
              Sam can delist a supplier immediately. Active RFQs are reassigned and buyers with open orders are protected automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
