import { calculateDilution, convertToStandard, formatNumber, UNIT_CONVERSIONS } from "@/utils/dilution-calculations";
import { useEffect, useMemo, useState } from "react";
import { ActionButtons, FormulaBox, InputField, ResultPanel } from "../common/calculator-components";
import { CONCENTRATION_UNITS, VOLUME_UNITS } from "@/utils/unit-constants";
import { showResult, showSteps } from "@/utils/dom-utils";

export function DilutionCalculator() {
  const [c1, setC1] = useState("");
  const [v1, setV1] = useState("");
  const [c2, setC2] = useState("");
  const [v2, setV2] = useState("");
  const [c1Unit, setC1Unit] = useState("M");
  const [v1Unit, setV1Unit] = useState("L");
  const [c2Unit, setC2Unit] = useState("M");
  const [v2Unit, setV2Unit] = useState("L");
  const [solventUnit, setSolventUnit] = useState("L");
  const [result, setResult] = useState("");
  const [steps, setSteps] = useState<string[]>([]);
  const [showResultPanel, setShowResultPanel] = useState(false);

  const isCalculateDisabled = useMemo(() => {
    const values = [c1, v1, c2, v2].filter(
      (val) => val !== "" && !isNaN(Number(val))
    );
    return values.length < 3;
  }, [c1, v1, c2, v2]);

  const solvent = useMemo(() => {
    if (v1 && v2 && v1Unit && v2Unit) {
      try {
        const v1InLiters = convertToStandard(Number(v1), v1Unit, "volume");
        const v2InLiters = convertToStandard(Number(v2), v2Unit, "volume");
        const solventInLiters = v2InLiters - v1InLiters;
        // eslint-disable-next-line
        const conversion = (UNIT_CONVERSIONS as any).volume[solventUnit];
        const solventValue = solventInLiters / conversion;
        return formatNumber(solventValue).toString();
      } catch {
        return "";
      }
    }
    return "";
  }, [v1, v2, v1Unit, v2Unit, solventUnit]);

  const handleCalculateDilution = () => {
    try {
      const c1Val = parseFloat(c1);
      const v1Val = parseFloat(v1);
      const c2Val = parseFloat(c2);
      const v2Val = parseFloat(v2);

      const providedValues = [c1Val, v1Val, c2Val, v2Val].filter(
        (val) => !isNaN(val) && val >= 0
      );
      if (providedValues.length < 3) {
        setResult(
          "Please enter at least 3 values to calculate the missing one."
        );
        setShowResultPanel(true);
        return;
      }

      const { resultText, calculationSteps } = calculateDilution(
        c1Val,
        v1Val,
        c2Val,
        v2Val,
        c1Unit,
        v1Unit,
        c2Unit,
        v2Unit
      );

      setResult(resultText);
      setSteps(calculationSteps);
      setShowResultPanel(true);
      // eslint-disable-next-line
    } catch (error: any) {
      setResult(`Error: ${error.message}`);
      setShowResultPanel(true);
    }
  };

  // showResult and showSteps after result updates
  useEffect(() => {
    if (showResultPanel) {
      showResult("result-display", result);
      showSteps("steps-display", steps);
    }
  }, [result, steps, showResultPanel]);

  const handleClear = () => {
    setC1("");
    setV1("");
    setC2("");
    setV2("");
    setC1Unit("M");
    setV1Unit("L");
    setC2Unit("M");
    setV2Unit("L");
    setSolventUnit("L");
    setShowResultPanel(false);
    setResult("");
    setSteps([]);
  };

  const handleCopyResult = () => {
    const fullText = `Dilution Calculation Result:\n${result}\n\nCalculation Steps:\n${steps.join(
      "\n"
    )}`;
    navigator.clipboard.writeText(fullText).then(() => {
      alert("✅ Dilution result copied to clipboard!");
    });
  };

  return (
    <section className="bg-blue-50 border-b border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-blue-900 mb-4">
            Dilution Calculator - Free & Accurate C1V1 C2V2 Calculator
          </h1>
          <p className="text-blue-700">
            Our Dilution Calculator helps solve dilution problems using the
            standard formula C₁V₁=C₂V₂.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Dilution Formula: C₁V₁ = C₂V₂
            </h2>
            <p className="text-gray-600">
              Enter any three values to calculate the fourth, plus solvent
              volume.
            </p>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <InputField
              label="Initial Concentration (C₁)"
              id="c1-input"
              placeholder="Enter C₁"
              type="number"
              withUnit
              unitId="c1-unit"
              unitOptions={CONCENTRATION_UNITS}
              value={c1}
              onChange={(e) => setC1(e.target.value)}
              selectedUnit={c1Unit}
              onUnitChange={setC1Unit}
            />

            <InputField
              label="Initial Volume (V₁)"
              id="v1-input"
              placeholder="Enter V₁"
              type="number"
              withUnit
              unitId="v1-unit"
              unitOptions={VOLUME_UNITS}
              value={v1}
              onChange={(e) => setV1(e.target.value)}
              selectedUnit={v1Unit}
              onUnitChange={setV1Unit}
            />

            <InputField
              label="Final Concentration (C₂)"
              id="c2-input"
              placeholder="Enter C₂"
              type="number"
              withUnit
              unitId="c2-unit"
              unitOptions={CONCENTRATION_UNITS}
              value={c2}
              onChange={(e) => setC2(e.target.value)}
              selectedUnit={c2Unit}
              onUnitChange={setC2Unit}
            />

            <InputField
              label="Final Volume (V₂)"
              id="v2-input"
              placeholder="Enter V₂"
              type="number"
              withUnit
              unitId="v2-unit"
              unitOptions={VOLUME_UNITS}
              value={v2}
              onChange={(e) => setV2(e.target.value)}
              selectedUnit={v2Unit}
              onUnitChange={setV2Unit}
            />

            {/* Solvent auto calc */}
            <div className="flex flex-col gap-2">
              <label className="text-sm lg:text-base font-semibold text-gray-700">
                Solvent Volume
              </label>
              <div className="flex gap-1">
                <input
                  type="number"
                  value={solvent}
                  placeholder="Auto-calculated"
                  readOnly
                  className="flex-1 px-2.5 py-1.5 border border-gray-200 rounded-l-xl bg-white text-gray-900"
                />
                <select
                  value={solventUnit}
                  onChange={(e) => setSolventUnit(e.target.value)}
                  className="w-28 border border-l-0 border-gray-200 bg-white rounded-r-xl text-gray-700"
                >
                  {VOLUME_UNITS.map((unit) => (
                    <option key={unit.value} value={unit.value}>
                      {unit.label}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-xs text-gray-600">V₂ - V₁</p>
            </div>
          </div>

          {/* Buttons */}
          <ActionButtons
            calculateLabel="Calculate Dilution"
            onCalculate={handleCalculateDilution}
            onClear={handleClear}
            disabled={isCalculateDisabled}
          />

          {showResultPanel && (
            <div className="my-5">
              <ResultPanel
                title="Calculation Results"
                resultId="result-display"
                stepsId="steps-display"
                copyBtnId="copy-result-btn"
                onCopy={handleCopyResult}
                defaultMessage={result}
                showCopyButton={
                  !!result &&
                  !result.includes("Please enter") &&
                  !result.includes("Error")
                } // Only show when there's a valid result
              />
            </div>
          )}

          <FormulaBox
            formula="C₁V₁ = C₂V₂"
            description="Where: C₁ = Initial concentration, V₁ = Initial volume, C₂ = Final concentration, V₂ = Final volume"
            color="purple"
          />
        </div>
      </div>
    </section>
  );
}
