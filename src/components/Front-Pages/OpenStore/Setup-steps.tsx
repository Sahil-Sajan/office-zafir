const steps = [
  { title: "Name & URL", desc: "Pick a store name and a branded URL — zafir360.com/store/your-name — free and yours the moment you claim it." },
  { title: "Logo & Banner", desc: "Upload a logo and a cover banner, or start from a template. Storefronts are mobile-first and Arabic-first by default." },
  { title: "Policies", desc: "Set your return window, shipping timelines, and dispatch commitments — shown to every buyer before checkout." },
  { title: "First Product", desc: "List manually, or import anything you've already bought wholesale — photos and specs carry over automatically." },
  { title: "Preview & Publish", desc: "See exactly what buyers will see. Nothing goes live until you approve it." },
];

export default function SetupSteps() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Store setup
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Five steps between you <span className="text-[#C9A853] italic">and a live storefront.</span>
          </h2>
        </div>
        <div className="relative pl-9">
          <div className="absolute left-[11px] top-[6px] bottom-[6px] w-[2px] bg-[#F0EADB]" />
          {steps.map((step) => (
            <div key={step.title} className="relative pb-8 last:pb-0">
              <div className="absolute -left-9 top-[2px] w-6 h-6 rounded-full bg-[#F0EADB] border-2 border-[#17362A]" />
              <h3 className="text-[1rem] font-bold mb-1">{step.title}</h3>
              <p className="text-[0.9rem] text-[#1C2420]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
