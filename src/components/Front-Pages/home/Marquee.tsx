interface MarqueeProps {
  home: Record<string, string>;
}

export default function MarqueeBar({ home }: MarqueeProps) {
  const chips = [
    home["marquee.chip1"] ?? "Zafir360 Verified Turkish Factories",
    home["marquee.chip2"] ?? "Zafir360 Verified Chinese Factories",
    home["marquee.chip3"] ?? "Escrow-Protected Payments",
    home["marquee.chip4"] ?? "JayakHub Live Delivery Tracking",
    home["marquee.chip5"] ?? "Arabic · English · Kurdish",
    home["marquee.chip6"] ?? "Cash on Delivery + Local Wallets",
  ];

  return (
    <div dir="ltr" className="overflow-hidden py-3 sm:py-[18px] border-b border-[#F0EADB] mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        <MarqueeTrack chips={chips} />
        <MarqueeTrack chips={chips} />
      </div>
    </div>
  )
}

function MarqueeTrack({ chips }: { chips: string[] }) {
  return (
    <div className="flex gap-[14px] pr-[14px] shrink-0">
      {chips.map((text, i) => (
        <span
          key={`${text}-${i}`}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-[9px] border border-[#F0EADB] rounded-full bg-white text-[0.76rem] sm:text-[0.85rem] font-semibold whitespace-nowrap"
        >
          <span className="w-[6px] h-[6px] rounded-full bg-[#17362A]" />
          {text}
        </span>
      ))}
    </div>
  );
}
