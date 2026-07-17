"use client";

import AuthShell from "@/components/Front-Pages/Auth/AuthShell";
import OtpForm from "@/components/forms/Otp-form";

interface OtpViewProps {
  lang: string;
  email?: string;
}

export function OtpView({ lang, email }: OtpViewProps) {
  return (
    <AuthShell
      lang={lang}
      eyebrow="Verify your identity"
      title="You're almost there."
      lede="A one-time code keeps your Zafir360 account — and every order in it — secure."
    >
      <OtpForm lang={lang} email={email} />
    </AuthShell>
  );
}
