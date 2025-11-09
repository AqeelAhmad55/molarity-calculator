"use client";

import { DilutionCalculator } from "@/components/dilution-calculator/dilution-calculator";
import DilutionInfoSection from "@/components/dilution-calculator/info-section";

export default function DilutionPage() {
  return (
    <>
      <DilutionCalculator />
      <DilutionInfoSection />
    </>
  );
}
