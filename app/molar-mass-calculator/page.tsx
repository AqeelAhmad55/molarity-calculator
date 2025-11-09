import { MolarMassCalculator } from "@/components/molar-mass-calculator/calculator";
import { MolarMassInfoSection } from "@/components/molar-mass-calculator/info-sections";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <MolarMassCalculator />
      <MolarMassInfoSection />
    </div>
  );
}
