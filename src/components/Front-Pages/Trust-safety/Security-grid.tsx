const items = [
  { title: "Encryption", desc: "TLS 1.3 everywhere. AES-256 for PII at rest. Payment data tokenised, never stored." },
  { title: "OWASP Top 10", desc: "Parameterised queries, XSS sanitisation, CORS whitelist, AWS WAF, CSP headers." },
  { title: "Continuous scanning", desc: "Snyk dependency and container scans, SAST in CI, weekly OWASP ZAP against staging." },
  { title: "Fraud detection", desc: "IP scoring, device fingerprinting, and rule-based detection with a three-strike ban policy." },
];

export default function SecurityGrid() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Section 6.4 — Security
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            What runs <span className="text-[#C9A853] italic">underneath the trust badges.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((i) => (
            <div key={i.title} className="bg-white border border-[#F0EADB] rounded-[16px] p-6">
              <h3 className="text-[1rem] font-bold">{i.title}</h3>
              <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
