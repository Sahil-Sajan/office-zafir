export interface WalletTransaction {
  id: string;
  date: string;
  method: string;
  amount: number;
  balanceAfter: number;
}

export default function TransactionHistory({ transactions }: { transactions: WalletTransaction[] }) {
  return (
    <div className="bg-white border border-[#F0EADB] rounded-[12px] p-5 sm:p-6">
      <h2 className="text-[1.1rem] font-bold text-[#0E241C] mb-4">Transaction History</h2>

      {transactions.length === 0 ? (
        <p className="text-[0.9rem] text-[#5B6961]">No top-ups yet — your transaction history will appear here.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#F0EADB]">
                <th className="py-2 pr-3 text-[0.78rem] font-semibold tracking-[0.06em] uppercase text-[#5B6961]">
                  Date
                </th>
                <th className="py-2 pr-3 text-[0.78rem] font-semibold tracking-[0.06em] uppercase text-[#5B6961]">
                  Method
                </th>
                <th className="py-2 pr-3 text-[0.78rem] font-semibold tracking-[0.06em] uppercase text-[#5B6961]">
                  Amount
                </th>
                <th className="py-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase text-[#5B6961]">
                  Balance After
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b border-[#F0EADB] last:border-b-0">
                  <td className="py-2.5 pr-3 text-[0.85rem] text-[#1C2420]">{tx.date}</td>
                  <td className="py-2.5 pr-3 text-[0.85rem] text-[#1C2420]">{tx.method}</td>
                  <td className="py-2.5 pr-3 text-[0.85rem] font-semibold text-[#17362A]">
                    +{tx.amount.toLocaleString("en-US")} IQD
                  </td>
                  <td className="py-2.5 text-[0.85rem] text-[#1C2420]">
                    {tx.balanceAfter.toLocaleString("en-US")} IQD
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
