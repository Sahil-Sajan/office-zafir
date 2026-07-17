"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordForm({ lang }: { lang: string }) {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  if (sent) {
    return (
      <div className="flex flex-col items-center text-center gap-4">
        <span className="flex items-center justify-center size-12 rounded-full bg-[#F0EADB] text-[#17362A] text-[1.3rem]">
          ✓
        </span>
        <div>
          <h2 className="text-[1.3rem] font-bold text-[#0E241C]">Check your email</h2>
          <p className="text-[0.9rem] text-[#1C2420] mt-1.5 leading-[1.55]">
            We sent a password reset code to <span className="font-semibold">{email}</span>. Enter it on the next screen to set a new password.
          </p>
        </div>
        <Link
          href={`/${lang}/verify-otp?context=reset&email=${encodeURIComponent(email)}`}
          className="w-full inline-flex items-center justify-center gap-2 px-[18px] py-[11px] rounded-[8px] text-[0.92rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-200"
        >
          Enter code →
        </Link>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="text-[0.82rem] text-[#5B6961] hover:text-[#234A3A] bg-transparent border-none cursor-pointer"
        >
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="flex flex-col gap-[6px]">
        <label htmlFor="forgot-email" className="text-[0.82rem] font-semibold text-[#1C2420]">
          Email address
        </label>
        <input
          id="forgot-email"
          type="email"
          required
          autoFocus
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="px-[14px] py-[11px] border border-[#F0EADB] rounded-[6px] font-[inherit] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]"
        />
        <p className="text-[0.78rem] text-[#5B6961]">We'll email you a 6-digit code to reset your password.</p>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 px-[18px] py-[11px] rounded-[8px] text-[0.92rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-200 cursor-pointer mt-1"
      >
        Send reset code →
      </button>

      <p className="text-[0.85rem] text-[#1C2420] text-center mt-1">
        Remembered your password?{" "}
        <Link href={`/${lang}/login`} className="text-[#234A3A] font-semibold no-underline hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
}
