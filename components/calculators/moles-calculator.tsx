// components/Calculator/MolesCalculator.tsx
import {
  ActionButtons,
  FormulaBox,
  InputField,
  ResultPanel,
} from "../common/calculator-components";
import {
  calculateMoles,
  clearMolesCalc,
  copyMolesResult,
} from "../../utils/calculator-functions";

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

export function MolesCalculator() {
  return (
    <div>
      <h1 className="lg:block hidden md:text-xl text-lg font-bold text-center text-gray-900 my-8">
        Calculate Molarity from No of Moles and Volume
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <InputField
            label="Number of Moles (n)"
            id="moles-input"
            placeholder="Enter number of moles"
          />
          <InputField
            label="Volume (V)"
            id="moles-volume-input"
            placeholder="Enter volume"
            withUnit
            unitId="moles-volume-unit"
            unitOptions={volumeUnits}
          />
          <ActionButtons
            calculateLabel="Calculate Molarity"
            onCalculate={calculateMoles}
            onClear={clearMolesCalc}
          />
        </div>
        <ResultPanel
          title="Result"
          resultId="moles-result"
          stepsId="moles-steps"
          copyBtnId="moles-copy-btn"
          onCopy={copyMolesResult}
        />
      </div>
      <FormulaBox
        formula="M = n/V"
        description="Where: M = Molarity, n = Moles, V = Volume"
        color="green"
      />
    </div>
  );
}
