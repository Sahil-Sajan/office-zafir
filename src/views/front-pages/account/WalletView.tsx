"use client";

import { useEffect, useState } from "react";
import WalletHero from "@/components/Front-Pages/Wallet/Wallet-hero";
import BalanceCard from "@/components/Front-Pages/Wallet/Balance-card";
import TopUpFlow, { TopUpResult } from "@/components/Front-Pages/Wallet/TopUp-flow";
import TransactionHistory, { WalletTransaction } from "@/components/Front-Pages/Wallet/Transaction-history";
import WalletDisclaimer from "@/components/Front-Pages/Wallet/Wallet-disclaimer";

const STORAGE_KEY = "zafir360.wallet";

interface WalletState {
  balance: number;
  transactions: WalletTransaction[];
}

export function WalletView({ lang }: { lang: string }) {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<WalletTransaction[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: WalletState = JSON.parse(raw);
        setBalance(parsed.balance ?? 0);
        setTransactions(parsed.transactions ?? []);
      }
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ balance, transactions }));
  }, [balance, transactions, hydrated]);

  const handleTopUp = ({ method, amount }: TopUpResult) => {
    setBalance((prevBalance) => {
      const newBalance = prevBalance + amount;
      const tx: WalletTransaction = {
        id: `${Date.now()}-${Math.floor(Math.random() * 100000)}`,
        date: new Date().toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        method,
        amount,
        balanceAfter: newBalance,
      };
      setTransactions((prev) => [tx, ...prev]);
      return newBalance;
    });
  };

  return (
    <div>
      <WalletHero />

      <section className="py-16">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-6">
            <div className="flex flex-col gap-6">
              <TopUpFlow onTopUp={handleTopUp} />
              <TransactionHistory transactions={transactions} />
              <WalletDisclaimer />
            </div>
            <div>
              <BalanceCard balance={balance} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
