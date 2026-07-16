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
    <div dir="ltr" className="border-b border-[#F0EADB] py-3 sm:py-[18px] overflow-hidden">
      <div className="flex w-max animate-[marquee_30s_linear_infinite]">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
}

function MarqueeTrack() {
  return (
    <div className="flex gap-3 pr-3 shrink-0">
      {chips.map((chip, i) => (
        <span
          key={`${chip}-${i}`}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#F0EADB] text-[0.76rem] sm:text-[0.82rem] font-medium text-[#1C2420] whitespace-nowrap"
        >
          <span className="size-1.5 rounded-full bg-[#17362A]" />
          {chip}
        </span>
      ))}
    </div>
  );
}
