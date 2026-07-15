const news = [
  { date: "Jun 2025", tag: "Currency", title: "IQD holds steady against USD as Central Bank tightens auction controls", desc: "Wholesale buyers report more predictable landed costs on USD-denominated Chinese orders this quarter." },
  { date: "May 2025", tag: "Tariffs", title: "Iraq revises import duty schedule for home appliances and electronics", desc: "New HS-code brackets affect landed cost on several top wholesale categories — see updated estimates in the duty calculator." },
  { date: "May 2025", tag: "Demand", title: "Ramadan-season demand pushed textile imports up 22% YoY", desc: "Apparel and home-textile categories saw the sharpest seasonal spike in wholesale order volume this year." },
  { date: "Apr 2025", tag: "Logistics", title: "Container rates from Istanbul to Umm Qasr ease after Q1 spike", desc: "Freight costs on the Turkey-Iraq route dropped roughly 8% as shipping capacity normalized." },
  { date: "Mar 2025", tag: "Trade", title: "Turkey-Iraq trade volume crosses $20B for the trailing 12 months", desc: "Turkey remains Iraq's largest non-oil trading partner, led by construction materials and consumer goods." },
  { date: "Feb 2025", tag: "Regulation", title: "New KYB documentation rules for wholesale buyers take effect", desc: "Business buyers must now submit updated commercial registration to unlock wholesale pricing tiers." },
];

export default function NewsList() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="flex flex-col">
          {news.map((n) => (
            <div key={n.title} className="flex gap-4 sm:gap-6 py-6 border-b border-[#F0EADB] last:border-b-0">
              <div className="flex-none w-[90px] sm:w-[110px]">
                <div className="text-[0.85rem] font-semibold text-[#0E241C]">{n.date}</div>
                <span className="inline-flex items-center text-[0.7rem] font-semibold px-[8px] py-[2px] rounded-[6px] bg-[#F0EADB] text-[#234A3A] mt-1.5">
                  {n.tag}
                </span>
              </div>
              <div>
                <h3 className="text-[1.02rem] font-bold text-[#0E241C] leading-[1.35]">{n.title}</h3>
                <p className="text-[0.88rem] text-[#1C2420] leading-[1.6] mt-1.5">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
