type Category = "New" | "Improved";

interface ChangelogEntry {
  date: string;
  category: Category;
  title: string;
  description: string;
}

const entries: ChangelogEntry[] = [
  {
    date: "2026-07-13",
    category: "New",
    title: "Product Q&A",
    description: "Ask questions directly on any product page and see answers from other buyers.",
  },
  {
    date: "2026-07-13",
    category: "New",
    title: '"Price Trend" chart',
    description: "See a 6-month price trend on every product detail page.",
  },
  {
    date: "2026-07-13",
    category: "New",
    title: '"Recommended for you"',
    description: "A curated product row now appears on the home page.",
  },
  {
    date: "2026-07-13",
    category: "New",
    title: "Site-wide feedback button",
    description: "Send feedback from anywhere on the site via the button in the bottom corner.",
  },
  {
    date: "2026-07-13",
    category: "New",
    title: "Platform Status page",
    description: "Check system status for Marketplace, Payments & Escrow, Logistics, and Verification.",
  },
  {
    date: "2026-07-13",
    category: "New",
    title: "Checkout",
    description: "Submit a request for quote directly from your basket.",
  },
  {
    date: "2026-07-13",
    category: "New",
    title: "Inquiry Basket (cart)",
    description: "Add products to a basket and manage quantities before requesting a quote.",
  },
  {
    date: "2026-07-09",
    category: "New",
    title: "Search results page",
    description: "Search products by name, category, origin, or supplier, with tier/origin filters and sorting.",
  },
  {
    date: "2026-07-09",
    category: "New",
    title: "Category detail pages",
    description: "Browse each product category on its own page with filters.",
  },
  {
    date: "2026-07-09",
    category: "Improved",
    title: "Product tier tags",
    description: "Retail / Seller Marketplace / Wholesale badges now appear consistently across product cards site-wide.",
  },
  {
    date: "2026-07-09",
    category: "Improved",
    title: "Sitewide color refresh",
    description: "The whole site moved to a green, cream, and gold palette.",
  },
];

function CategoryPill({ category }: { category: Category }) {
  const classes =
    category === "New"
      ? "bg-[#17362A] text-white"
      : "bg-[#F0EADB] text-[#234A3A]";
  return (
    <span className={`inline-block text-[0.7rem] font-semibold uppercase tracking-[0.06em] px-2.5 py-1 rounded-full ${classes}`}>
      {category}
    </span>
  );
}

export default function WhatsNewTimeline() {
  return (
    <section className="py-16 px-4 sm:px-7">
      <div className="max-w-[900px] mx-auto">
        <div className="relative pl-10">
          <span className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-[#F0EADB]" aria-hidden="true" />

          <ul className="space-y-10">
            {entries.map((entry, i) => (
              <li key={`${entry.date}-${entry.title}-${i}`} className="relative">
                <span className="absolute -left-10 top-0.5 w-6 h-6 rounded-full border-2 border-[#17362A] bg-[#FAF6EA]" aria-hidden="true" />

                <div className="flex items-center gap-3 flex-wrap mb-1.5">
                  <span className="text-[0.78rem] text-[#5B6961] tabular-nums">{entry.date}</span>
                  <CategoryPill category={entry.category} />
                </div>
                <h3 className="text-[1.05rem] font-bold text-[#0E241C] mb-1">{entry.title}</h3>
                <p className="text-[0.9rem] text-[#1C2420] leading-relaxed">{entry.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
