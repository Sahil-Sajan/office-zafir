"use client";

import DocumentsChecklist from "@/components/Front-Pages/Supplier-registration/Documents-checklist";
import RegistrationCta from "@/components/Front-Pages/Supplier-registration/Registration-cta";
import RegistrationHero from "@/components/Front-Pages/Supplier-registration/Registration-hero";
import RegistrationSteps from "@/components/Front-Pages/Supplier-registration/Registration-steps";
import SupplierRegistrationForm from "@/components/forms/Supplier-registration-form";

interface SupplierRegistrationViewProps {
  lang: string;
}

export function SupplierRegistrationView({ lang }: SupplierRegistrationViewProps) {
  return (
    <div>
      <RegistrationHero />
      <DocumentsChecklist />
      <RegistrationSteps />
      <SupplierRegistrationForm />
      <RegistrationCta />
    </div>
  );
}
