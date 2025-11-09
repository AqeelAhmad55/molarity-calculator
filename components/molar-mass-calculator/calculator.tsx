/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
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

  const handleCopy = () => {
    if (!results) return;

    let textToCopy = "Molar Mass Calculation Results\n\n";
    textToCopy += `Formula: ${results.formula}\n`;
    textToCopy += `Counts: ${formatElementCounts(results.elements)}\n`;
    textToCopy += `Molar Mass: ${results.totalMass.toFixed(3)} g/mol\n\n`;
    textToCopy += "Detailed Calculation:\n";
    textToCopy += `Mass = ${results.steps
      .map((step: any) => `${step.count}×M(${step.element})`)
      .join(" + ")}\n\n`;

    results.steps.forEach((step: any) => {
      textToCopy += `${step.element}: ${step.atomicMass.toFixed(3)} g/mol × ${
        step.count
      } = ${step.mass.toFixed(3)} g/mol\n`;
    });

    textToCopy += `\nTotal Molar Mass: ${results.totalMass.toFixed(3)} g/mol`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("✅ Molar mass result copied to clipboard!");
    });
  };

  return (
    <section className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-blue-900 mb-4">
            Molar Mass Calculator - Calculate Molar Mass ( Free )
          </h1>
          <p className="text-blue-700">
            Our molar mass calculator is a free and user-friendly tool that
            helps you accurately calculate the molar mass (molecular weight) of
            any chemical compound. Just enter the chemical formula, and the
            molecular mass finder will instantly analyze the elements and
            calculate the total molar mass in grams per mole (g/mol).
          </p>
        </div>

        <div className="calculator-interface bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 gap-8 mb-8">
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
          <div className="bg-white rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex-start">
              Calculation Results
            </h3>
            <div className="text-center mb-6 border border-green-200 bg-green-50 p-4 rounded-xl ">
              <p className="text-lg text-gray-800 mb-3">
                Formula: <strong>{results.formula}</strong>
              </p>
              <p className="text-md text-gray-600 mb-3">
                Counts: <strong>{formatElementCounts(results.elements)}</strong>
              </p>
              <p className="text-xl font-bold text-blue-600">
                Molar Mass: {results.totalMass.toFixed(3)} g/mol
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Detailed Calculation:
              </h4>

              <div className="mb-3 p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                <p className="text-sm font-medium text-blue-900">
                  Formula Breakdown:
                </p>
                <p className="text-sm text-blue-800">
                  Mass ={" "}
                  {results.steps
                    .map((step: any) => `${step.count}×M(${step.element})`)
                    .join(" + ")}
                </p>
              </div>

              {results.steps.map((step: any, index: number) => (
                <div
                  key={index}
                  className="mb-2 text-sm flex justify-between items-center text-gray-900"
                >
                  <span>
                    <strong>{step.element}:</strong>{" "}
                    {step.atomicMass.toFixed(3)} g/mol × {step.count}
                  </span>
                  <span className="font-medium text-blue-600">
                    = {step.mass.toFixed(3)} g/mol
                  </span>
                </div>
              ))}

              <div className="mt-4 pt-3 border-t border-gray-200 bg-green-50 p-3 rounded">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-green-900">
                    Total Molar Mass:
                  </span>
                  <span className="font-bold text-green-700 text-lg">
                    {results.totalMass.toFixed(3)} g/mol
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCopy}
                className="flex-1 rounded-lg bg-linear-to-r from-blue-600 to-indigo-500 py-2.5 font-semibold text-white shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-600 transition-all duration-200"
              >
                📋 Copy Result
              </button>
              <button
                onClick={() => {
                  setShowResults(false);
                  setFormula("");
                  setError("");
                }}
                className="flex-1 rounded-lg bg-gray-200 py-2.5 font-semibold text-gray-800 shadow-sm hover:bg-gray-300 transition-all duration-200"
              >
                ← Back to Calculator
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
