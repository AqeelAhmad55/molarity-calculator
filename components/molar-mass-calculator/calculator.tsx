/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback, useState } from "react";
import {
  ActionButtons,
  FormulaBox,
  InputField,
} from "../common/calculator-components";
import {
  calculateMolarMass,
  formatElementCounts,
} from "@/utils/molar-mass-calculations";

export function MolarMassCalculator() {
  const [formula, setFormula] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    try {
      const result = calculateMolarMass(formula);
      setResults(result);
      setShowResults(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Calculation error");
    }
  };

  const handleClear = () => {
    setFormula("");
    setResults(null);
    setShowResults(false);
    setError("");
  };

  const handleCopy = useCallback(() => {
    if (!results) return;

    const resultText = `Formula: ${
      results.formula
    }\nCounts: ${formatElementCounts(
      results.elements
    )}\nMolar Mass: ${results.totalMass.toFixed(3)} g/mol`;
    const stepsText = results.calculationSteps.join("\n");
    const fullText = `Molar Mass Calculation Result:\n${resultText}\n\nCalculation Steps:\n${stepsText}`;

    navigator.clipboard.writeText(fullText).then(() => {
      alert("✅ Molar mass result copied to clipboard!");
    });
  }, [results]);

  return (
    <section className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-8 py-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-blue-900 mb-4">
            Molar Mass Calculator - Calculate Molar Mass ( Free )
          </h1>
          <p className="text-blue-700 ">
            Our molar mass calculator is a free and user-friendly tool that
            helps you accurately calculate the molar mass (molecular weight) of
            any chemical compound. Just enter the chemical formula, and the
            molecular mass finder will instantly analyze the elements and
            calculate the total molar mass in grams per mole (g/mol).
          </p>
        </div>

        <div className="calculator-interface bg-white rounded-2xl shadow-sm border border-gray-100 md:p-8 p-5">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 gap-8 sm:mb-7 mb-5">
            <InputField
              label="Chemical Formula"
              id="chemical-formula"
              placeholder="e.g., H2O, Mg(OH)2, CuSO4·5H2O, K4[Fe(CN)6], (NH4)2[PtCl6]"
              type="text"
              value={formula}
              onChange={(e) => setFormula(e.target.value)}
            />
          </div>

          <p className="text-sm text-gray-600 mb-6 text-center">
            Enter the chemical formula. Supports: simple formulas (H2O),
            parentheses Mg(OH)2, brackets K4[Fe(CN)6], hydrates CuSO4·5H2O, and
            coefficients 5H2O
          </p>

          <ActionButtons
            calculateLabel="Calculate Molar Mass"
            onCalculate={handleCalculate}
            onClear={handleClear}
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
                  Formula:{" "}
                  <strong className="text-green-600">{results.formula}</strong>
                </p>
                <p className="text-md text-gray-600 mb-2">
                  Counts:{" "}
                  <strong>{formatElementCounts(results.elements)}</strong>
                </p>
                <p className="text-xl font-bold text-blue-600">
                  Molar Mass: {results.totalMass.toFixed(3)} g/mol
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Calculation Steps:
              </h4>
              <div className="space-y-2">
                {results.calculationSteps.map((step: string, idx: number) => (
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
          formula="Molar Mass = Σ(Atomic Mass × Count)"
          description="Where: Σ = Sum of all elements in the compound"
          color="green"
        />
      </div>
    </section>
  );
}
