// app/page.tsx

import { CalculatorSuite } from "@/components/calculators/calculator-suite";
import { InfoSections } from "@/components/info-section";

export default function Page() {
  return (
    <>
      <CalculatorSuite />
      <InfoSections />
    </>
  );
}
