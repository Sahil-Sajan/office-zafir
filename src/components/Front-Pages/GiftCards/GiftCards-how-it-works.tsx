const STEPS = [
  {
    n: "1",
    title: "Buy",
    desc: "Choose a preset or custom IQD amount and enter the recipient's details above.",
  },
  {
    n: "2",
    title: "Recipient gets a code",
    desc: "A unique gift card code is generated instantly and shown on screen.",
  },
  {
    n: "3",
    title: "Redeem at checkout",
    desc: "The recipient enters the code at checkout to apply the balance to their order.",
  },
];

export default function GiftCardsHowItWorks() {
  return (
    <section className="py-16 bg-[#FAF6EA] border-y border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[10px]">
          ◆ How It Works
        </span>
        <h2 className="text-[1.5rem] sm:text-[1.8rem] font-bold tracking-[-0.02em] text-[#0E241C] mb-6">
          Three simple steps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {STEPS.map((step) => (
            <div key={step.n} className="bg-white border border-[#F0EADB] rounded-[12px] p-5 sm:p-6">
              <span className="inline-flex items-center justify-center size-8 rounded-full bg-[#17362A] text-white text-[0.85rem] font-bold mb-3">
                {step.n}
              </span>
              <h3 className="text-[1rem] font-bold text-[#0E241C]">{step.title}</h3>
              <p className="text-[0.85rem] text-[#5B6961] mt-1.5">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
