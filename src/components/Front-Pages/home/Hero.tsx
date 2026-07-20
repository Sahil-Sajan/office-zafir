import Link from "next/link"
import Image from "next/image"
import { hero1, hero2 } from "@/utils/images"
import { navIcons, Search } from "@/components/common/NavIcons"

interface HeroProps {
  home: Record<string, string>;
  lang: string;
}

const gateways: { key: string; fallback: string; href: string; icon: string; primary?: boolean }[] = [
  { key: "hero.gateway1", fallback: "Shop products", href: "/categories", icon: "shoppingBag", primary: true },
  { key: "hero.gateway2", fallback: "Sell on Zafir360", href: "/become-a-seller", icon: "storefront" },
  { key: "hero.gateway3", fallback: "Become a supplier", href: "/become-a-supplier", icon: "shieldCheck" },
];

export default function Hero({ home, lang }: HeroProps) {
  const chips: { text: string; href: string }[] = [
    { text: home["hero.chip1"] ?? "Home Appliances", href: "/categories" },
    { text: home["hero.chip2"] ?? "Apparel & Textiles", href: "/categories" },
    { text: home["hero.chip3"] ?? "Building Materials", href: "/categories" },
    { text: home["hero.chip4"] ?? "MOQ Calculator", href: "/moq-calculator" },
  ];

  const title = home["hero.title"] ?? "Buy it, sell it, or source it — all on one trusted platform.";
  const goldPhrase = "all on one trusted platform.";
  const titleNode = title.includes(goldPhrase)
    ? <>{title.slice(0, -goldPhrase.length)}<span className="text-[#C9A853] italic">{goldPhrase}</span></>
    : title;

  return (
    <header className="px-4 sm:px-7 py-12 sm:py-[76px] pb-10 sm:pb-14 border-b border-[#F0EADB]">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
        <div>
          <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-[14px]">
            {home["hero.eyebrow"] ?? "Iraq's First Complete Commerce Ecosystem"}
          </span>
          <h1 className="max-w-[760px] mb-[18px] text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#0E241C]">
            {titleNode}
          </h1>
          <p className="text-[1.1rem] text-[#1C2420] max-w-[640px] leading-[1.65]">
            {home["hero.lede"] ?? "Zafir360 sources verified goods from Turkish and Chinese factories, lets Iraqi businesses buy at wholesale and resell to consumers, and delivers every order through JayakHub. One stock movement updates all three tiers at once."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 max-w-[560px] mt-6">
            {gateways.map((g) => {
              const Icon = navIcons[g.icon];
              return (
                <Link
                  key={g.href}
                  href={g.href}
                  className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[6px] text-[0.88rem] font-semibold no-underline transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17362A] ${g.primary
                    ? "bg-[#17362A] text-[#FAF6EA] hover:bg-[#234A3A] hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)]"
                    : "bg-[#FAF6EA] text-[#17362A] border border-[#17362A] hover:bg-[#F0EADB]"
                    }`}
                >
                  {Icon ? <Icon /> : null}
                  {home[g.key] ?? g.fallback}
                </Link>
              );
            })}
          </div>

          <form
            action={`/${lang}/search-products`}
            method="GET"
            className="relative flex items-center gap-1.5 sm:gap-2.5 bg-white border border-[#F0EADB] rounded-full px-3 sm:px-[18px] py-1.5 max-w-[560px] mt-6 focus-within:border-[#17362A] focus-within:shadow-[0_0_0_4px_#F0EADB] transition-[border-color,box-shadow] duration-200"
          >
            <span aria-hidden="true" className="text-[#5B6961] flex-none">
              <Search />
            </span>
            <input
              type="search"
              name="q"
              placeholder={home["hero.searchPlaceholder"] ?? "Search factories, products, or an HS code…"}
              aria-label={home["hero.searchAriaLabel"] ?? "Search Zafir360"}
              className="border-none outline-none flex-1 min-w-0 text-[0.85rem] sm:text-[0.95rem] bg-transparent text-[#0E241C] py-2"
            />
            <span className="hidden sm:inline text-[0.78rem] font-semibold text-[#1C2420] border-l border-[#F0EADB] pl-3 whitespace-nowrap">
              {home["hero.searchFilter"] ?? "All Tiers ▾"}
            </span>
            <button type="submit" className="flex-none inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full text-[0.8rem] sm:text-[0.85rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] transition-colors duration-150 cursor-pointer border-none">
              {home["hero.searchBtn"] ?? "Search"}
            </button>
          </form>

          <div className="flex gap-2 flex-wrap mt-[14px]">
            <span className="text-[0.78rem] text-[#1C2420] self-center">{home["hero.popularLabel"] ?? "Popular:"}</span>
            {chips.map((chip, i) => (
              <Link
                key={chip.text}
                href={chip.href}
                className={`inline-flex items-center gap-1.5 px-3 py-[5px] rounded-full border text-[0.82rem] no-underline cursor-pointer transition-all duration-150 ${i === 0
                  ? "bg-[#0E241C] text-white border-[#0E241C]"
                  : "bg-white text-[#1C2420] border-[#F0EADB] hover:border-[#17362A] hover:text-[#234A3A] hover:bg-[#F0EADB]"
                  }`}
              >
                {chip.text}
              </Link>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap mt-6">
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-[#17362A] text-white no-underline hover:bg-[#234A3A] hover:-translate-y-[1px] hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-150"
            >
              {home["hero.btn1"] ?? "See the Architecture"}
            </Link>
            <Link
              href="/why-zafir360"
              className="inline-flex items-center justify-center gap-2 px-[18px] py-[9px] rounded-[6px] text-[0.92rem] font-semibold bg-transparent text-[#0E241C] border border-[#F0EADB] no-underline hover:border-[#17362A] hover:text-[#234A3A] hover:-translate-y-[1px] transition-all duration-150"
            >
              {home["hero.btn2"] ?? "How Verification Works"}
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-start justify-center mt-9 perspective-[1400px]">
          <Image
            src={hero2}
            alt=""
            className="w-full max-w-[560px] h-auto rounded-[18px] transition-transform duration-400 ease hover:rotate-y-[-8deg] hover:rotate-x-[4deg] hover:-translate-y-1"
            style={{
              transform: "rotateY(-14deg) rotateX(8deg) rotateZ(-1deg)",
              filter: "drop-shadow(24px 20px 40px rgba(0,0,0,0.18)) drop-shadow(60px 50px 70px rgba(0,0,0,0.16))",
            }}
          />
        </div>
      </div>
    </header>
  )
}
