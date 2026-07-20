const chips = [
  "Buyer Protection",
  "Secure Payments",
  "Verified Suppliers",
  "Quality Guarantee",
  "Easy Returns",
  "Fast Delivery",
  "Trade Assurance",
];

export default function Marquee() {
  return (
    <div dir="ltr" className="overflow-hidden py-3 sm:py-[18px] border-b border-[#F0EADB] mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
}

function MarqueeTrack() {
  return (
    <div className="flex gap-[14px] pr-[14px] shrink-0">
      {chips.map((chip, i) => (
        <span
          key={`${chip}-${i}`}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-[9px] border border-[#F0EADB] rounded-full bg-white text-[0.76rem] sm:text-[0.85rem] font-semibold whitespace-nowrap"
        >
          <span className="w-[6px] h-[6px] rounded-full bg-[#17362A]" />
          {chip}
        </span>
      ))}
    </div>
  );
}
