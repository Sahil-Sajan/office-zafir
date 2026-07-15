const controls = [
  { control: "KYB Verification", desc: "Trade license, commercial registration, and owner national ID required before a business buyer can see wholesale prices." },
  { control: "Escrow Payment", desc: "Buyer funds sit in Zafir360 escrow and release to the supplier at agreed delivery milestones — not on order confirmation." },
  { control: "Wholesale Dispute Resolution", desc: "Buyers file disputes for wrong goods, below-spec quality, short quantity, or late delivery — with evidence attached." },
  { control: "Consumer 2FA", desc: "SMS OTP required on any new-device login to a consumer account." },
  { control: "Data Protection", desc: "PII encrypted at rest (AES-256); payment data is never stored, only tokenised; KYC documents sit in access-restricted storage." },
  { control: "Iraqi Payment Compliance", desc: "KYC on wallet balances above IQD 1M, suspicious-transaction reporting above IQD 50M, AML screening on large B2B payments." },
];

export default function ControlsTable() {
  return (
    <section className="bg-[#F0EADB] border-y border-[#F0EADB] py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            Money doesn't move blind
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Escrow, KYB, and identity checks <span className="text-[#C9A853] italic">at every tier.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:hidden">
          {controls.map((c) => (
            <div key={c.control} className="bg-white border border-[#F0EADB] rounded-[12px] p-4">
              <div className="text-[0.9rem] font-semibold text-[#0E241C]">{c.control}</div>
              <p className="text-[0.85rem] text-[#1C2420] leading-[1.6] mt-1.5">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="hidden sm:block bg-white border border-[#F0EADB] rounded-[12px] overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#F0EADB]">
                <th className="px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.04em] text-[#5B6961] w-[220px]">Control</th>
                <th className="px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.04em] text-[#5B6961]">What it does</th>
              </tr>
            </thead>
            <tbody>
              {controls.map((c) => (
                <tr key={c.control} className="border-b border-[#F0EADB] last:border-b-0">
                  <td className="px-5 py-4 text-[0.9rem] font-semibold text-[#0E241C] align-top whitespace-nowrap">{c.control}</td>
                  <td className="px-5 py-4 text-[0.88rem] text-[#1C2420] leading-[1.6] align-top">{c.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
