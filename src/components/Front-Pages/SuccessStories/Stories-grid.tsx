const stories = [
  { initials: "TW", store: "Tigris Wear", category: "Apparel & Textiles", city: "Basra", quote: "Importing wholesale and reselling on the same platform cut our sourcing time in half.", metric: "+180% orders" },
  { initials: "EK", store: "Erbil Kitchens", category: "Home Appliances", city: "Erbil", quote: "The one-click import from wholesale meant our catalogue was live before our warehouse was even organized.", metric: "1,200+ SKUs listed" },
  { initials: "NS", store: "Najaf Style", category: "Fashion", city: "Najaf", quote: "Arabic-first checkout removed the one thing that used to make customers abandon their cart.", metric: "+62% conversion" },
  { initials: "MB", store: "Mosul Build", category: "Building Materials", city: "Mosul", quote: "Buyers trust the verified badge enough that we stopped fielding 'is this real' messages entirely.", metric: "4.9★ average rating" },
  { initials: "KT", store: "Karbala Tech", category: "Electronics", city: "Karbala", quote: "Payouts landing every 7 days like clockwork let us reinvest in stock without waiting on cash flow.", metric: "7-day payout cycle" },
  { initials: "SF", store: "Sulaymaniyah Foods", category: "Food & FMCG", city: "Sulaymaniyah", quote: "We reordered wholesale twice in our first month just to keep up with marketplace demand.", metric: "+95% repeat buyers" },
];

export default function StoriesGrid() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="mb-9">
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853]">
            More sellers, more categories
          </span>
          <h2 className="text-[clamp(1.6rem,1.35rem+1vw,2.3rem)] font-bold tracking-[-0.02em] leading-[1.1] mt-[10px] text-[#0E241C]">
            Different products, <span className="text-[#C9A853] italic">same playbook.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stories.map((s) => (
            <div
              key={s.store}
              className="bg-white border border-[#F0EADB] rounded-[16px] p-6 hover:border-[#17362A] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(14,36,28,0.08)] transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="flex-none flex items-center justify-center size-11 rounded-full bg-[#0E241C] text-white font-bold text-[0.85rem]">
                  {s.initials}
                </div>
                <div>
                  <div className="text-[0.98rem] font-bold text-[#0E241C] leading-[1.25]">{s.store}</div>
                  <div className="text-[0.8rem] text-[#1C2420]">{s.category} · {s.city}</div>
                </div>
              </div>
              <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-4">"{s.quote}"</p>
              <span className="inline-flex items-center text-[0.75rem] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[#F0EADB] text-[#234A3A] mt-4">
                {s.metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
