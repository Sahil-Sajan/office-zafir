"use client";

import AuthShell from "@/components/Front-Pages/Auth/AuthShell";
import ForgotPasswordForm from "@/components/forms/Forgot-password-form";

interface ForgotPasswordViewProps {
  lang: string;
}

export function ForgotPasswordView({ lang }: ForgotPasswordViewProps) {
  return (
    <AuthShell
      lang={lang}
      eyebrow="Account recovery"
      title="Forgot your password?"
      lede="No problem — we'll send a reset code to your email so you can get back to trading."
    >
      <h2 className="text-[1.5rem] font-bold text-[#0E241C] mb-1">Reset your password</h2>
      <p className="text-[0.9rem] text-[#1C2420] mb-6">Enter the email linked to your account.</p>
      <ForgotPasswordForm lang={lang} />
    </AuthShell>
  );
}
