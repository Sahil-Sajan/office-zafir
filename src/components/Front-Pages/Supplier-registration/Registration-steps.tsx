import Link from "next/link";

const steps = [
  { title: "Submit application", desc: "Company details, factory photos, product categories, and capacity — usually takes under 15 minutes." },
  { title: "Document review", desc: "Business registration, tax certificates, and certifications are checked against the issuing authority." },
  { title: "Factory visit", desc: "Sam visits in person to confirm the production line matches the application — the step with no automated shortcut." },
  { title: "Approval & listing", desc: "Once verified, your catalogue goes live with the Zafir360-verified badge and full pricing tiers." },
];

export default function RegistrationSteps() {
  return (
    <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            After you apply
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Four steps <span className="text-[#C9A853] italic">from application to live listing.</span>
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
        <p className="text-[0.85rem] text-[#5B6961] mt-6">
          See the full inspection standard on{" "}
          <Link href="/how-we-verify-suppliers" className="text-[#234A3A] underline">How We Verify</Link>.
        </p>
      </div>
    </section>
  );
}
