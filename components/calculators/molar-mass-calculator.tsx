// components/Calculator/MolarMassCalculator.tsx
"use client";

import { useState } from "react";
import {
  ActionButtons,
  FormulaBox,
  InputField,
  ResultPanel,
} from "../common/calculator-components";
import {
  calculateMolarMass,
  clearMolarMassCalc,
  copyMolarMassResult,
} from "../../utils/calculator-functions";

const massUnits = [
  { value: "g", label: "g" },
  { value: "mg", label: "mg" },
  { value: "kg", label: "kg" },
  { value: "μg", label: "μg" },
  { value: "ng", label: "ng" },
  { value: "pg", label: "pg" },
];

const molarityUnits = [
  { value: "mol/L", label: "mol/L" },
  { value: "mmol/L", label: "mmol/L" },
  { value: "μmol/L", label: "μmol/L" },
  { value: "nmol/L", label: "nmol/L" },
  { value: "pmol/L", label: "pmol/L" },
  { value: "fmol/L", label: "fmol/L" },
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

export function MolarMassCalculator() {
  const [massUnit, setMassUnit] = useState("g");
  const [molarityUnit, setMolarityUnit] = useState("mol/L");
  const [volumeUnit, setVolumeUnit] = useState("L");
  const [inputValues, setInputValues] = useState({
    mass: "",
    molarity: "",
    volume: "",
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
        Calculate Molar Mass from Mass, Molarity, and Volume
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <InputField
            label="Mass (m)"
            id="molar-mass-mass-input"
            placeholder="Enter mass"
            withUnit
            unitId="molar-mass-mass-unit"
            unitOptions={massUnits}
            value={inputValues.mass}
            onChange={handleInputChange("mass")}
            selectedUnit={massUnit}
            onUnitChange={setMassUnit}
          />
          <InputField
            label="Molarity (M)"
            id="molar-mass-molarity-input"
            placeholder="Enter molarity"
            withUnit
            unitId="molar-mass-molarity-unit"
            unitOptions={molarityUnits}
            value={inputValues.molarity}
            onChange={handleInputChange("molarity")}
            selectedUnit={molarityUnit}
            onUnitChange={setMolarityUnit}
          />
          <InputField
            label="Volume (V)"
            id="molar-mass-volume-input"
            placeholder="Enter volume"
            withUnit
            unitId="molar-mass-volume-unit"
            unitOptions={volumeUnits}
            value={inputValues.volume}
            onChange={handleInputChange("volume")}
            selectedUnit={volumeUnit}
            onUnitChange={setVolumeUnit}
          />
          <ActionButtons
            calculateLabel="Calculate Molar Mass"
            onCalculate={calculateMolarMass}
            onClear={clearMolarMassCalc}
          />
        </div>
        <ResultPanel
          title="Result"
          resultId="molar-mass-result"
          stepsId="molar-mass-steps"
          copyBtnId="molar-mass-copy-btn"
          onCopy={copyMolarMassResult}
        />
      </div>
      <FormulaBox
        formula="Mo = m / (M × V)"
        description="Where: Mo = Molar Mass, m = Mass, M = Molarity, V = Volume"
        color="red"
      />
    </div>
  );
}
