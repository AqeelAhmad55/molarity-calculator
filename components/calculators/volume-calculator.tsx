// components/Calculator/VolumeCalculator.tsx
"use client";

import { useState } from "react";
import {
  ActionButtons,
  FormulaBox,
  InputField,
  ResultPanel,
} from "../common/calculator-components";
import {
  calculateVolume,
  clearVolumeCalc,
  copyVolumeResult,
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

const molarityUnits = [
  { value: "mol/L", label: "mol/L" },
  { value: "mmol/L", label: "mmol/L" },
  { value: "μmol/L", label: "μmol/L" },
  { value: "nmol/L", label: "nmol/L" },
  { value: "pmol/L", label: "pmol/L" },
  { value: "fmol/L", label: "fmol/L" },
];

export function VolumeCalculator() {
  const [massUnit, setMassUnit] = useState("g");
  const [molarMassUnit, setMolarMassUnit] = useState("g/mol");
  const [molarityUnit, setMolarityUnit] = useState("mol/L");
  const [inputValues, setInputValues] = useState({
    mass: "",
    molarMass: "",
    molarity: "",
  });

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValues((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <div>
      <h1 className="lg:block hidden md:text-xl text-lg font-bold text-center text-gray-900 my-8">
        Calculate Volume from Molarity, Mass, and Molar Mass
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <InputField
            label="Mass (m)"
            id="volume-mass-input"
            placeholder="Enter mass"
            withUnit
            unitId="volume-mass-unit"
            unitOptions={massUnits}
            value={inputValues.mass}
            onChange={handleInputChange("mass")}
            selectedUnit={massUnit}
            onUnitChange={setMassUnit}
          />
          <InputField
            label="Molar Mass (Mo)"
            id="volume-molar-mass-input"
            placeholder="Enter molar mass"
            withUnit
            unitId="volume-molar-mass-unit"
            unitOptions={molarMassUnits}
            value={inputValues.molarMass}
            onChange={handleInputChange("molarMass")}
            selectedUnit={molarMassUnit}
            onUnitChange={setMolarMassUnit}
          />
          <InputField
            label="Molarity (M)"
            id="volume-molarity-input"
            placeholder="Enter molarity"
            withUnit
            unitId="volume-molarity-unit"
            unitOptions={molarityUnits}
            value={inputValues.molarity}
            onChange={handleInputChange("molarity")}
            selectedUnit={molarityUnit}
            onUnitChange={setMolarityUnit}
          />
          <ActionButtons
            calculateLabel="Calculate Volume"
            onCalculate={calculateVolume}
            onClear={clearVolumeCalc}
          />
        </div>
        <ResultPanel
          title="Result"
          resultId="volume-result"
          stepsId="volume-steps"
          copyBtnId="volume-copy-btn"
          onCopy={copyVolumeResult}
        />
      </div>
      <FormulaBox
        formula="V = m/Mo × 1/M"
        description="Where: V = Volume, m = Mass, Mo = Molar Mass, M = Molarity"
        color="purple"
      />
    </div>
  );
}
