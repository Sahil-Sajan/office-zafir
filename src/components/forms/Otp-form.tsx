"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const CODE_LENGTH = 6;
const RESEND_COOLDOWN = 30;

export default function OtpForm({ lang, email }: { lang: string; email?: string }) {
  const router = useRouter();
  const [digits, setDigits] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [error, setError] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [cooldown, setCooldown] = useState(RESEND_COOLDOWN);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const code = digits.join("");
  const isComplete = code.length === CODE_LENGTH;

  function setDigitAt(index: number, value: string) {
    setDigits((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }

  function handleChange(index: number, raw: string) {
    setError(null);
    const value = raw.replace(/\D/g, "");
    if (!value) {
      setDigitAt(index, "");
      return;
    }
    setDigitAt(index, value[value.length - 1]);
    if (index < CODE_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, CODE_LENGTH);
    if (!pasted) return;
    e.preventDefault();
    setError(null);
    const next = Array(CODE_LENGTH).fill("");
    for (let i = 0; i < pasted.length; i++) next[i] = pasted[i];
    setDigits(next);
    inputRefs.current[Math.min(pasted.length, CODE_LENGTH - 1)]?.focus();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isComplete) return;
    setVerifying(true);
    setError(null);
    setTimeout(() => {
      router.push(`/${lang}/reset-password?email=${encodeURIComponent(email ?? "")}`);
    }, 900);
  }

  function handleResend() {
    if (cooldown > 0) return;
    setCooldown(RESEND_COOLDOWN);
    setError(null);
    setDigits(Array(CODE_LENGTH).fill(""));
    inputRefs.current[0]?.focus();
  }

  return (
    <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
      <div>
        <h2 className="text-[1.3rem] font-bold text-[#0E241C]">Enter verification code</h2>
        <p className="text-[0.9rem] text-[#1C2420] mt-1.5 leading-[1.55]">
          We sent a {CODE_LENGTH}-digit code to{" "}
          <span className="font-semibold">{email ?? "your email"}</span>.
        </p>
      </div>

      <div className="flex gap-2 sm:gap-3" dir="ltr" role="group" aria-label="Verification code">
        {digits.map((digit, i) => (
          <input
            key={i}
            ref={(el) => {
              inputRefs.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            autoComplete={i === 0 ? "one-time-code" : "off"}
            maxLength={1}
            value={digit}
            autoFocus={i === 0}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={handlePaste}
            aria-label={`Digit ${i + 1} of ${CODE_LENGTH}`}
            className={`w-full aspect-square min-w-0 text-center text-[1.3rem] font-bold rounded-[8px] border bg-white text-[#0E241C] focus:outline-none focus:shadow-[0_0_0_3px_#F0EADB] transition-colors duration-150 ${
              error ? "border-[#B3422F]" : "border-[#F0EADB] focus:border-[#17362A]"
            }`}
          />
        ))}
      </div>

      {error && (
        <p role="alert" className="text-[0.82rem] text-[#B3422F] -mt-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!isComplete || verifying}
        className="inline-flex items-center justify-center gap-2 px-[18px] py-[11px] rounded-[8px] text-[0.92rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {verifying ? "Verifying…" : "Verify code →"}
      </button>

      <p className="text-[0.85rem] text-[#1C2420] text-center">
        Didn't get a code?{" "}
        {cooldown > 0 ? (
          <span className="text-[#5B6961]">Resend in {cooldown}s</span>
        ) : (
          <button
            type="button"
            onClick={handleResend}
            className="text-[#234A3A] font-semibold no-underline hover:underline bg-transparent border-none cursor-pointer p-0"
          >
            Resend code
          </button>
        )}
      </p>

      <p className="text-[0.82rem] text-[#5B6961] text-center">
        Wrong account?{" "}
        <Link href={`/${lang}/login`} className="text-[#234A3A] font-semibold no-underline hover:underline">
          Log in again
        </Link>
      </p>
    </form>
  );
}
