export default function FeaturedStory() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="bg-[#0E241C] text-white rounded-[16px] p-6 sm:p-[44px] grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-start md:items-center">
          <div className="flex-none flex items-center justify-center size-16 sm:size-20 rounded-full bg-white text-[#0E241C] font-extrabold text-[1.2rem] sm:text-[1.5rem]">
            BS
          </div>
          <div>
            <span className="inline-flex items-center text-[0.72rem] font-semibold px-[10px] py-[3px] rounded-[6px] bg-white/10 text-white/90">
              Featured · Home Supplies
            </span>
            <p className="text-[1.05rem] sm:text-[1.3rem] font-semibold leading-[1.4] mt-3 max-w-[720px]">
              "We were selling out of a single shop in Karrada. Eighteen months on Zafir360 and we ship to all eighteen governorates without hiring a single extra driver."
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4 text-[0.85rem] sm:text-[0.9rem] text-white/70">
              <span className="font-semibold text-white">Baghdad Home Supplies</span>
              <span>·</span>
              <span>Baghdad, Iraq</span>
              <span>·</span>
              <span className="text-[#17362A] font-semibold">+340% revenue, YoY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
