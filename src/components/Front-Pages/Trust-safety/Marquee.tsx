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
  const track = [...chips, ...chips];
  return (
    <div className="border-b border-[#F0EADB] py-3 sm:py-[18px] overflow-hidden">
      <div className="flex gap-3 w-max animate-[marquee_30s_linear_infinite]">
        {track.map((chip, i) => (
          <span
            key={`${chip}-${i}`}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#F0EADB] text-[0.76rem] sm:text-[0.82rem] font-medium text-[#1C2420] whitespace-nowrap"
          >
            <span className="size-1.5 rounded-full bg-[#17362A]" />
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
