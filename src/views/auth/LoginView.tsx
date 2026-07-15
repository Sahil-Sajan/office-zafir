"use client";

import AuthShell from "@/components/Front-Pages/Auth/AuthShell";
import LoginForm from "@/components/forms/Login-form";

interface LoginViewProps {
  lang: string;
}

export function LoginView({ lang }: LoginViewProps) {
  return (
    <AuthShell
      lang={lang}
      eyebrow="Welcome back"
      title="Log in to keep trading."
      lede="Wholesale orders, marketplace sales, and factory RFQs — all in one account."
    >
      <h2 className="text-[1.5rem] font-bold text-[#0E241C] mb-1">Log in</h2>
      <p className="text-[0.9rem] text-[#1C2420] mb-6">Enter your details to access your account.</p>
      <LoginForm lang={lang} />
    </AuthShell>
  );
}
