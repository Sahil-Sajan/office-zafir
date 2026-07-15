import { Link2, CheckCircle, Gift } from "@/components/common/NavIcons";

const steps = [
  { num: "01", icon: <Link2 />, title: "Share your link", desc: "Send your unique referral link to friends by WhatsApp, email, or anywhere else." },
  { num: "02", icon: <CheckCircle />, title: "Friend signs up", desc: "Your friend creates a Zafir360 account and places their first order." },
  { num: "03", icon: <Gift />, title: "Both get rewarded", desc: "Your friend gets a discount on their first order — you earn store credit or Nuqat points." },
];

export default function ReferralSteps() {
  return (
    <section className="py-16 bg-[#FAF6EA]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <h2 className="text-[clamp(1.4rem,1.2rem+1vw,2rem)] font-bold tracking-[-0.02em] text-[#0E241C] mb-8 text-center">
          How it works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white border border-[#F0EADB] rounded-[12px] p-5 sm:p-6 text-center"
            >
              <div className="w-14 h-14 rounded-[14px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.6rem] mx-auto">
                {s.icon}
              </div>
              <span className="block text-[0.75rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mt-4">
                Step {s.num}
              </span>
              <h3 className="text-[1rem] font-bold text-[#0E241C] mt-1">{s.title}</h3>
              <p className="text-[0.85rem] text-[#1C2420] leading-[1.6] mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
