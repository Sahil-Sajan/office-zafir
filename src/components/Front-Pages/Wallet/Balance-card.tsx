export default function BalanceCard({ balance }: { balance: number }) {
  return (
    <div className="bg-white border border-[#F0EADB] rounded-[12px] p-5 sm:p-6">
      <span className="block text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C9A853] mb-2">
        Current Balance
      </span>
      <div className="flex items-baseline gap-2">
        <span className="text-[clamp(2rem,1.6rem+2vw,3rem)] font-bold tracking-[-0.02em] text-[#0E241C]">
          {balance.toLocaleString("en-US")}
        </span>
        <span className="text-[1rem] font-semibold text-[#5B6961]">IQD</span>
      </div>
      <p className="text-[0.85rem] text-[#5B6961] mt-2">
        Available to spend across Zafir360 retail, marketplace, and wholesale orders.
      </p>
    </div>
  );
}
