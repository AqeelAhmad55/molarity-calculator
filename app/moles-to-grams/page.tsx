import InfoSections from "@/components/moles-to-grams/info-sections";
import { MolesToGramsCalculator } from "@/components/moles-to-grams/moles-to-grams-calculator";

export default function Home() {
  return (
    <main className="">
      <MolesToGramsCalculator />
      <InfoSections />
    </main>
  );
}
