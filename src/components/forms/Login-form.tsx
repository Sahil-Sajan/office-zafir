"use client";

import Link from "next/link";
import { useState } from "react";

function GoogleIcon() {
  return (
    <svg className="size-[18px]" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3.01h3.87c2.27-2.09 3.58-5.17 3.58-8.82Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.94-2.91l-3.87-3.01c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.11C3.26 21.3 7.29 24 12 24Z" />
      <path fill="#FBBC05" d="M5.27 14.27a7.24 7.24 0 0 1 0-4.54V6.62H1.28a11.98 11.98 0 0 0 0 10.76l3.99-3.11Z" />
      <path fill="#EA4335" d="M12 4.75c1.76 0 3.35.6 4.6 1.79l3.43-3.43C17.94 1.19 15.24 0 12 0 7.29 0 3.26 2.7 1.28 6.62l3.99 3.11C6.22 6.86 8.87 4.75 12 4.75Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="size-[18px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.36 1c.12 1.05-.3 2.08-.94 2.86-.68.83-1.86 1.47-2.96 1.39-.14-1.02.34-2.1 1-2.83C14.15 1.55 15.4.94 16.36 1Zm3.4 16.05c-.53 1.18-.79 1.7-1.48 2.74-.96 1.42-2.31 3.19-3.99 3.2-1.49.02-1.87-.97-3.89-.96-2.02.01-2.45.98-3.94.96-1.68-.02-2.95-1.62-3.91-3.03-2.68-3.97-2.97-8.63-1.31-11.11.88-1.35 2.46-2.28 4.06-2.29 1.56-.02 2.55 1.06 3.84 1.06 1.26 0 2.03-1.06 3.86-1.03 1.4.03 2.9.78 3.85 2.03-3.39 1.85-2.84 6.61.91 8.43Z" />
    </svg>
  );
}

export default function LoginForm({ lang }: { lang: string }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-[6px]">
        <label htmlFor="login-email" className="text-[0.82rem] font-semibold text-[#1C2420]">Email address</label>
        <input
          id="login-email"
          type="email"
          required
          placeholder="you@company.com"
          className="px-[14px] py-[11px] border border-[#F0EADB] rounded-[6px] font-[inherit] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]"
        />
      </div>

      <div className="flex flex-col gap-[6px]">
        <div className="flex items-center justify-between">
          <label htmlFor="login-password" className="text-[0.82rem] font-semibold text-[#1C2420]">Password</label>
          <Link href={`/${lang}/login`} className="text-[0.78rem] text-[#234A3A] no-underline hover:underline">
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="••••••••"
            className="w-full px-[14px] py-[11px] pr-[46px] border border-[#F0EADB] rounded-[6px] font-[inherit] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[0.78rem] font-semibold text-[#5B6961] hover:text-[#234A3A] cursor-pointer bg-transparent border-none"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 px-[18px] py-[11px] rounded-[8px] text-[0.92rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-200 cursor-pointer mt-1"
      >
        Log In →
      </button>

      <div className="flex items-center gap-3 my-1">
        <span className="flex-1 h-px bg-[#F0EADB]" />
        <span className="text-[0.78rem] text-[#5B6961]">or continue with</span>
        <span className="flex-1 h-px bg-[#F0EADB]" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-[10px] rounded-[8px] border border-[#F0EADB] bg-white text-[0.82rem] sm:text-[0.88rem] font-semibold text-[#0E241C] hover:border-[#17362A] hover:bg-[#F0EADB] transition-colors duration-150 cursor-pointer"
        >
          <GoogleIcon />
          Google
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-[10px] rounded-[8px] border border-[#F0EADB] bg-white text-[0.82rem] sm:text-[0.88rem] font-semibold text-[#0E241C] hover:border-[#17362A] hover:bg-[#F0EADB] transition-colors duration-150 cursor-pointer"
        >
          <AppleIcon />
          Apple
        </button>
      </div>

      <p className="text-[0.85rem] text-[#1C2420] text-center mt-1">
        Don't have an account?{" "}
        <Link href={`/${lang}/signup`} className="text-[#234A3A] font-semibold no-underline hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
