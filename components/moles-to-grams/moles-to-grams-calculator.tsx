"use client";

import { useState } from "react";
import {
  InputField,
  FormulaBox,
  ActionButtons,
} from "@/components/common/calculator-components";

const MOLAR_MASS_UNITS: { [key: string]: number } = {
  "g/mol": 1,
  "μg/mol": 0.000001,
  "mg/mol": 0.001,
  "kg/mol": 1000,
  "ng/mol": 0.000000001,
  "pg/mol": 0.000000000001,
};

const unitOptions = [
  { value: "g/mol", label: "g/mol" },
  { value: "μg/mol", label: "μg/mol" },
  { value: "mg/mol", label: "mg/mol" },
  { value: "kg/mol", label: "kg/mol" },
  { value: "ng/mol", label: "ng/mol" },
  { value: "pg/mol", label: "pg/mol" },
];

function convertMolarMassToStandard(value: number, unit: string): number {
  const conversionFactor = MOLAR_MASS_UNITS[unit];
  return value * conversionFactor;
}

// Smart number formatting function
function formatMassValue(value: number): string {
  const absValue = Math.abs(value);

  // For very small numbers (less than 0.0001), use exponential notation
  if (absValue > 0 && absValue < 0.0001) {
    return Number(value).toExponential(4);
  }

  // For numbers between 0.0001 and 1, show up to 6 decimal places but trim trailing zeros
  if (absValue < 1 && absValue >= 0.0001) {
    return value.toFixed(6).replace(/\.?0+$/, "");
  }

  // For numbers between 1 and 1000, show 2 decimal places but trim trailing zeros
  if (absValue >= 1 && absValue < 1000) {
    return value.toFixed(2).replace(/\.00$/, "");
  }

  // For numbers 1000 and above, show no decimal places
  if (absValue >= 1000) {
    return value.toFixed(0);
  }

  // Default case: show the number as is (for numbers between 0.0001 and 1 that need precise display)
  return value.toString();
}

function generateCalculationSteps(
  moles: number,
  molarMass: number,
  unit: string,
  molarMassStandard: number,
  massInGrams: number
): string[] {
  const steps: string[] = [];

  // Step 1: Unit conversion if needed
  if (unit !== "g/mol") {
    steps.push(
      `Convert molar mass from ${unit} to g/mol: ${molarMass} ${unit} × ${
        MOLAR_MASS_UNITS[unit]
      } = ${formatMassValue(molarMassStandard)} g/mol`
    );
  }

  // Step 2: Apply the formula
  steps.push(
    `Apply the formula m = n × M: m = ${formatMassValue(
      moles
    )} mol × ${formatMassValue(molarMassStandard)} g/mol`
  );

  // Step 3: Calculate result
  steps.push(`Calculate the result: m = ${formatMassValue(massInGrams)} g`);

  return steps;
}

export function MolesToGramsCalculator() {
  const [moles, setMoles] = useState("");
  const [molarMass, setMolarMass] = useState("");
  const [unit, setUnit] = useState("g/mol");
  const [result, setResult] = useState<{
    massInGrams: number;
    calculationSteps: string[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    const molesNum = Number.parseFloat(moles);
    const molarMassNum = Number.parseFloat(molarMass);

    setError(null);
    setShowResults(false);

    if (isNaN(molesNum) || isNaN(molarMassNum)) {
      setError("Please enter valid numbers for both moles and molar mass.");
      return;
    }

    if (molesNum < 0) {
      setError("Number of moles cannot be negative.");
      return;
    }

    if (molarMassNum <= 0) {
      setError("Molar mass must be greater than zero.");
      return;
    }

    // Convert molar mass to standard unit (g/mol)
    const molarMassStandard = convertMolarMassToStandard(molarMassNum, unit);

    // Calculate mass in grams (FORMULA: m = n × M)
    const massInGrams = molesNum * molarMassStandard;

    // Generate calculation steps
    const calculationSteps = generateCalculationSteps(
      molesNum,
      molarMassNum,
      unit,
      molarMassStandard,
      massInGrams
    );

    setResult({ massInGrams, calculationSteps });
    setShowResults(true);
  };

  const handleClear = () => {
    setMoles("");
    setMolarMass("");
    setUnit("g/mol");
    setResult(null);
    setError(null);
    setShowResults(false);
  };

  const handleCopy = () => {
    if (!result) return;

    const resultText = `${formatMassValue(result.massInGrams)} g`;
    const stepsText = result.calculationSteps.join("\n");
    const fullText = `Moles to Grams Conversion Result:\n${resultText}\n\nCalculation Steps:\n${stepsText}`;

    navigator.clipboard.writeText(fullText).then(() => {
      setToastMessage("✅ Result copied to clipboard!");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  return (
    <div className="bg-blue-50 py-8">
      <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-blue-50 border-b border-blue-100 py-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-blue-900 mb-4">
                Moles to Grams - Convert Moles to Grams (Free)
              </h1>
              <p className="text-blue-700">
                Our moles to grams converter is a free and easy-to-use online
                tool that helps you convert moles to grams within seconds.
                Simply enter the number of moles and the molar mass of the
                compound, and our mol to g converter will instantly calculate
                the moles in grams for you.
              </p>
            </div>
          </div>
        </div>

        {/* Calculator Interface */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Formula: m = n × M (mass = moles × molar mass)
            </p>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <InputField
              label="Number of Moles (n)"
              id="moles-input"
              placeholder="Enter number of moles"
              type="number"
              value={moles}
              onChange={(e) => setMoles(e.target.value)}
            />

            <InputField
              label="Molar Mass (M)"
              id="molar-mass-input"
              placeholder="Enter molar mass"
              type="number"
              withUnit={true}
              unitId="molar-mass-unit"
              unitOptions={unitOptions}
              value={molarMass}
              onChange={(e) => setMolarMass(e.target.value)}
              selectedUnit={unit}
              onUnitChange={setUnit}
            />
          </div>

          {/* Action Buttons */}
          <ActionButtons
            calculateLabel="Convert to Grams"
            onCalculate={handleCalculate}
            onClear={handleClear}
          />

          {/* Error Display */}
          {error && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="text-center text-red-600">
                <div className="text-lg font-semibold mb-2">⚠️ Error</div>
                <p>{error}</p>
              </div>
            </div>
          )}
        </div>

        {/* Results Display - Matching the first page design */}
        {showResults && result && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mt-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex-start">
              Calculation Results
            </h3>
            <div className="text-center mb-6">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 mb-4">
                <p className="text-lg text-gray-800 mb-2">
                  Mass in Grams:{" "}
                  <strong className="text-green-600">
                    {result.massInGrams !== undefined
                      ? `${formatMassValue(result.massInGrams)} g`
                      : ""}
                  </strong>
                </p>
                <p className="text-sm text-gray-600">
                  Moles: {formatMassValue(parseFloat(moles))} mol | Molar Mass:{" "}
                  {formatMassValue(parseFloat(molarMass))} {unit}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Calculation Steps:
              </h4>
              <div className="space-y-2">
                {result.calculationSteps.map((step: string, idx: number) => (
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

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-medium bg-green-500 transition-all duration-300">
            {toastMessage}
          </div>
        )}

        {/* Formula Box */}
        <FormulaBox
          formula="m = n × M"
          description="Where: m = Mass, n = Number of moles, M = Molar mass"
          color="red"
        />
      </div>
    </div>
  );
}
