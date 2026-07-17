"use client";

import AuthShell from "@/components/Front-Pages/Auth/AuthShell";
import ResetPasswordForm from "@/components/forms/Reset-password-form";

interface ResetPasswordViewProps {
  lang: string;
}

export function ResetPasswordView({ lang }: ResetPasswordViewProps) {
  return (
    <AuthShell
      lang={lang}
      eyebrow="Account recovery"
      title="Choose a new password."
      lede="Pick something strong you haven't used before — you'll use it to log back in right after."
    >
      <h2 className="text-[1.5rem] font-bold text-[#0E241C] mb-1">Set new password</h2>
      <p className="text-[0.9rem] text-[#1C2420] mb-6">Your identity is verified — set a new password to finish.</p>
      <ResetPasswordForm lang={lang} />
    </AuthShell>
  );
}
