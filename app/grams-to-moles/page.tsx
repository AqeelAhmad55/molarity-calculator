"use client";

import {
  ActionButtons,
  FormulaBox,
  InputField,
} from "@/components/common/calculator-components";
import { GramToMolesInfoSection } from "@/components/gram-to-moles/info-sections";
import { calculateGramsToMoles } from "@/utils/gram-to-moles-calculations";
import { useCallback, useState } from "react";

const MASS_UNITS = [
  { value: "g", label: "g (grams)" },
  { value: "mg", label: "mg (milligrams)" },
  { value: "μg", label: "μg (micrograms)" },
  { value: "kg", label: "kg (kilograms)" },
  { value: "ng", label: "ng (nanograms)" },
  { value: "pg", label: "pg (picograms)" },
];

const MOLAR_MASS_UNITS = [
  { value: "g/mol", label: "g/mol" },
  { value: "mg/mol", label: "mg/mol" },
  { value: "μg/mol", label: "μg/mol" },
  { value: "kg/mol", label: "kg/mol" },
  { value: "ng/mol", label: "ng/mol" },
  { value: "pg/mol", label: "pg/mol" },
];

export default function GramsToMolesCalculator() {
  const [mass, setMass] = useState("");
  const [massUnit, setMassUnit] = useState("g");
  const [molarMass, setMolarMass] = useState("");
  const [molarMassUnit, setMolarMassUnit] = useState("g/mol");
  const [showResults, setShowResults] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleCalculate = useCallback(() => {
    setError("");
    const massValue = Number.parseFloat(mass);
    const molarMassValue = Number.parseFloat(molarMass);

    if (isNaN(massValue) || massValue <= 0) {
      setError("Please enter a valid positive mass value.");
      return;
    }

    if (isNaN(molarMassValue) || molarMassValue <= 0) {
      setError("Please enter a valid positive molar mass value.");
      return;
    }

    try {
      const calcResult = calculateGramsToMoles(
        massValue,
        molarMassValue,
        massUnit,
        molarMassUnit
      );
      setResult(calcResult);
      setShowResults(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Calculation error occurred"
      );
    }
  }, [mass, massUnit, molarMass, molarMassUnit]);

  const handleClear = useCallback(() => {
    setMass("");
    setMolarMass("");
    setMassUnit("g");
    setMolarMassUnit("g/mol");
    setShowResults(false);
    setResult(null);
    setError("");
  }, []);

  const handleCopy = useCallback(() => {
    if (!result) return;

    const resultText = `Number of Moles: ${result.moles} mol\nMass: ${mass} ${massUnit} | Molar Mass: ${molarMass} ${molarMassUnit}`;
    const stepsText = result.calculationSteps.join("\n");
    const fullText = `Grams to Moles Conversion Result:\n${resultText}\n\nCalculation Steps:\n${stepsText}`;

    navigator.clipboard
      .writeText(fullText)
      .then(() => {
        alert("✅ Grams to moles result copied to clipboard!");
      })
      .catch(() => {
        alert("❌ Failed to copy. Please select and copy manually.");
      });
  }, [result, mass, massUnit, molarMass, molarMassUnit]);

  return (
    <>
      {/* Calculator Section */}
      <section className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-8 py-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-2xl font-bold text-blue-900 mb-4">
              Grams to Moles - Convert g to Moles ( Free & Unlimited )
            </h1>
            <p className="text-blue-700 text-sm md:text-base">
              Our grams to moles converter is a free and easy-to-use online tool
              that helps you convert mass in grams to moles. Simply enter the
              given mass and the molar mass of the compound, and our g to mol
              calculator will instantly calculate the number of moles for you.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
            <div className="text-center mb-8 md:block hidden">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                Formula: n = m/M
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Where: n = number of moles, m = mass, M = molar mass
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
              <InputField
                label="Mass (m)"
                id="mass-input"
                placeholder="Enter mass"
                type="number"
                withUnit={true}
                unitId="mass-unit"
                unitOptions={MASS_UNITS}
                value={mass}
                onChange={(e) => setMass(e.target.value)}
                selectedUnit={massUnit}
                onUnitChange={setMassUnit}
              />

              <InputField
                label="Molar Mass (M)"
                id="molar-mass-input"
                placeholder="Enter molar mass"
                type="number"
                withUnit={true}
                unitId="molar-mass-unit"
                unitOptions={MOLAR_MASS_UNITS}
                value={molarMass}
                onChange={(e) => setMolarMass(e.target.value)}
                selectedUnit={molarMassUnit}
                onUnitChange={setMolarMassUnit}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-700 text-center">
                {error}
              </div>
            )}

            <ActionButtons
              calculateLabel="Convert to Moles"
              onCalculate={handleCalculate}
              onClear={handleClear}
              disabled={!mass || !molarMass}
            />
          </div>

          {showResults && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mt-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex-start">
                Calculation Results
              </h3>
              <div className="text-center mb-6">
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 mb-4">
                  <p className="text-lg text-gray-800 mb-2">
                    Number of Moles:{" "}
                    <strong className="text-green-600">
                      {result?.moles !== undefined
                        ? `${Number(result.moles)} mol`
                        : ""}
                    </strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    Mass: {mass} {massUnit} | Molar Mass: {molarMass}{" "}
                    {molarMassUnit}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Calculation Steps:
                </h4>
                <div className="space-y-2">
                  {result?.calculationSteps.map((step: string, idx: number) => (
                    <div
                      key={idx}
                      className="p-2 bg-white rounded border-l-4 border-blue-400 text-sm text-gray-700"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCopy}
                  className="flex-1 rounded-lg bg-linear-to-r from-blue-600 to-indigo-500 py-2.5 font-semibold text-white shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-600 transition-all duration-200"
                >
                  📋 Copy Result
                </button>
              </div>
            </div>
          )}

          <FormulaBox
            formula="n = m / M"
            description="Where: n = Number of moles, m = Mass, M = Molar mass"
            color="orange"
          />
        </div>
      </section>

      {/* Information Sections */}
      <GramToMolesInfoSection />
    </>
  );
}
