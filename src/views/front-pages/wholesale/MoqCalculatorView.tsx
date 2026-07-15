"use client";

import CalculatorHero from "@/components/Front-Pages/MoqCalculator/Calculator-hero";
import MoqCalculatorTool from "@/components/Front-Pages/MoqCalculator/Calculator";

interface MoqCalculatorViewProps { lang: string; }

export function MoqCalculatorView({ lang }: MoqCalculatorViewProps) {
  return (
    <div>
      <CalculatorHero />
      <MoqCalculatorTool />
    </div>
  );
}
