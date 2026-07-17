"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordForm({ lang }: { lang: string }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }
    setError(null);
    setSubmitting(true);
    setTimeout(() => {
      router.push(`/${lang}/login`);
    }, 700);
  }

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[6px]">
        <label htmlFor="reset-password" className="text-[0.82rem] font-semibold text-[#1C2420]">
          New password
        </label>
        <div className="relative">
          <input
            id="reset-password"
            type={showPassword ? "text" : "password"}
            required
            autoFocus
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <p className="text-[0.78rem] text-[#5B6961]">At least 8 characters.</p>
      </div>

      <div className="flex flex-col gap-[6px]">
        <label htmlFor="reset-confirm" className="text-[0.82rem] font-semibold text-[#1C2420]">
          Confirm new password
        </label>
        <input
          id="reset-confirm"
          type={showPassword ? "text" : "password"}
          required
          autoComplete="new-password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="••••••••"
          className="px-[14px] py-[11px] border border-[#F0EADB] rounded-[6px] font-[inherit] text-[0.92rem] text-[#0E241C] bg-white focus:outline-none focus:border-[#17362A] focus:shadow-[0_0_0_3px_#F0EADB]"
        />
      </div>

      {error && (
        <p role="alert" className="text-[0.82rem] text-[#B3422F]">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 px-[18px] py-[11px] rounded-[8px] text-[0.92rem] font-semibold bg-[#17362A] text-white hover:bg-[#234A3A] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(23,54,42,0.28)] transition-all duration-200 cursor-pointer mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Resetting…" : "Reset password →"}
      </button>
    </form>
  );
}
