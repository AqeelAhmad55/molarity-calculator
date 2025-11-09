// components/Calculator/MolarityCalculator.tsx

import {
  ActionButtons,
  FormulaBox,
  InputField,
  ResultPanel,
} from "../common/calculator-components";
import {
  calculateMolarity,
  clearMolarityCalc,
  copyMolarityResult,
} from "../../utils/calculator-functions";

const massUnits = [
  { value: "g", label: "g" },
  { value: "mg", label: "mg" },
  { value: "kg", label: "kg" },
  { value: "μg", label: "μg" },
  { value: "ng", label: "ng" },
  { value: "pg", label: "pg" },
];

const molarMassUnits = [
  { value: "g/mol", label: "g/mol" },
  { value: "mg/mol", label: "mg/mol" },
  { value: "kg/mol", label: "kg/mol" },
  { value: "μg/mol", label: "μg/mol" },
  { value: "ng/mol", label: "ng/mol" },
  { value: "pg/mol", label: "pg/mol" },
];

const volumeUnits = [
  { value: "L", label: "L" },
  { value: "mL", label: "mL" },
  { value: "cm³", label: "cm³" },
  { value: "m³", label: "m³" },
  { value: "μL", label: "μL" },
  { value: "nL", label: "nL" },
  { value: "pL", label: "pL" },
  { value: "kL", label: "kL" },
];

export function MolarityCalculator() {
  return (
    <div>
      <h1 className="lg:block hidden md:text-xl text-lg font-bold text-center text-gray-900 my-8">
        Calculate Molarity from Mass, Molar Mass, and Volume
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <InputField
            label="Mass (m)"
            id="mass-input"
            placeholder="Enter mass"
            withUnit
            unitId="mass-unit"
            unitOptions={massUnits}
          />
          <InputField
            label="Molar Mass (Mo)"
            id="molar-mass-input"
            placeholder="Enter molar mass"
            withUnit
            unitId="molar-mass-unit"
            unitOptions={molarMassUnits}
          />
          <InputField
            label="Volume (V)"
            id="volume-input"
            placeholder="Enter volume"
            withUnit
            unitId="volume-unit"
            unitOptions={volumeUnits}
          />
          <ActionButtons
            calculateLabel="Calculate Molarity"
            onCalculate={calculateMolarity}
            onClear={clearMolarityCalc}
          />
        </div>
        <ResultPanel
          title="Result"
          resultId="molarity-result"
          stepsId="molarity-steps"
          copyBtnId="molarity-copy-btn"
          onCopy={copyMolarityResult}
        />
      </div>
      <FormulaBox
        formula="M = m / (Mo × V)"
        description="Where: M = Molarity, m = Mass, Mo = Molar Mass, V = Volume"
        color="blue"
      />
    </div>
  );
}
