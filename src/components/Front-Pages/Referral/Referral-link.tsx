"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "zafir360.referralCode";
const FALLBACK_CODE = "ZAFIR-FRIEND";

export default function ReferralLink({ lang }: { lang: string }) {
  const [code, setCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const existing = window.localStorage.getItem(STORAGE_KEY);
      if (existing) {
        setCode(existing);
        return;
      }
      const suffix = Math.floor(1000 + Math.random() * 9000);
      const generated = `${FALLBACK_CODE}-${suffix}`;
      window.localStorage.setItem(STORAGE_KEY, generated);
      setCode(generated);
    } catch {
      setCode(FALLBACK_CODE);
    }
  }, []);

  const link = code ? `https://zafir360.com/${lang}/signup?ref=${code}` : "";
  const shareMessage = `Join me on Zafir360 and get a discount on your first order: ${link}`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;

  const handleCopy = async () => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — ignore silently
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
        <div className="bg-white border border-[#F0EADB] rounded-[12px] p-5 sm:p-6">
          <h2 className="text-[1.15rem] font-bold text-[#0E241C]">Your referral link</h2>
          <p className="text-[0.88rem] text-[#5B6961] mt-1.5 mb-5">
            This is a demo code generated in your browser — there is no account system wired up yet, so it isn&apos;t tied to a real user.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 bg-[#FAF6EA] border border-[#F0EADB] rounded-[8px] px-4 py-2.5 text-[0.88rem] text-[#1C2420] font-mono overflow-x-auto whitespace-nowrap">
              {link || "Generating your link…"}
            </div>
            <button
              type="button"
              onClick={handleCopy}
              disabled={!link}
              className="bg-[#17362A] text-white hover:bg-[#234A3A] px-5 py-2.5 rounded-[8px] text-[0.88rem] font-semibold disabled:opacity-50 whitespace-nowrap"
            >
              {copied ? "Copied!" : "Copy link"}
            </button>
            <a
              href={link ? whatsappHref : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!link}
              className={`px-5 py-2.5 rounded-[8px] text-[0.88rem] font-semibold border border-[#F0EADB] text-[#0E241C] hover:bg-[#FAF6EA] whitespace-nowrap text-center ${!link ? "pointer-events-none opacity-50" : ""}`}
            >
              Share on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
