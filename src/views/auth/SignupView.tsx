"use client";

import AuthShell from "@/components/Front-Pages/Auth/AuthShell";
import SignupForm from "@/components/forms/Signup-form";

interface SignupViewProps {
  lang: string;
}

export function SignupView({ lang }: SignupViewProps) {
  return (
    <AuthShell
      lang={lang}
      eyebrow="Get started"
      title="Create your Zafir360 account."
      lede="Buy wholesale, sell on the marketplace, or source from verified factories — one account, three tiers."
    >
      <h2 className="text-[1.5rem] font-bold text-[#0E241C] mb-1">Sign up</h2>
      <p className="text-[0.9rem] text-[#1C2420] mb-6">Create a free account in under a minute.</p>
      <SignupForm lang={lang} />
    </AuthShell>
  );
}
