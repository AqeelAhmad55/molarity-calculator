// components/Calculator/MassCalculator.tsx
"use client";

import { useState } from "react";
import {
  calculateMass,
  clearMassCalc,
  copyMassResult,
} from "../../utils/calculator-functions";
import {
  ActionButtons,
  FormulaBox,
  InputField,
  ResultPanel,
} from "../common/calculator-components";

const molarityUnits = [
  { value: "mol/L", label: "mol/L" },
  { value: "mmol/L", label: "mmol/L" },
  { value: "μmol/L", label: "μmol/L" },
  { value: "nmol/L", label: "nmol/L" },
  { value: "pmol/L", label: "pmol/L" },
  { value: "fmol/L", label: "fmol/L" },
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

export function MassCalculator() {
  const [molarityUnit, setMolarityUnit] = useState("mol/L");
  const [molarMassUnit, setMolarMassUnit] = useState("g/mol");
  const [volumeUnit, setVolumeUnit] = useState("L");
  const [inputValues, setInputValues] = useState({
    molarity: "",
    molarMass: "",
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
        Calculate Mass from Molarity, Molar Mass, and Volume
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <InputField
            label="Molarity (M)"
            id="mass-molarity-input"
            placeholder="Enter molarity"
            withUnit
            unitId="mass-molarity-unit"
            unitOptions={molarityUnits}
            value={inputValues.molarity}
            onChange={handleInputChange("molarity")}
            selectedUnit={molarityUnit}
            onUnitChange={setMolarityUnit}
          />
          <InputField
            label="Molar Mass (Mo)"
            id="mass-molar-mass-input"
            placeholder="Enter molar mass"
            withUnit
            unitId="mass-molar-mass-unit"
            unitOptions={molarMassUnits}
            value={inputValues.molarMass}
            onChange={handleInputChange("molarMass")}
            selectedUnit={molarMassUnit}
            onUnitChange={setMolarMassUnit}
          />
          <InputField
            label="Volume (V)"
            id="mass-volume-input"
            placeholder="Enter volume"
            withUnit
            unitId="mass-volume-unit"
            unitOptions={volumeUnits}
            value={inputValues.volume}
            onChange={handleInputChange("volume")}
            selectedUnit={volumeUnit}
            onUnitChange={setVolumeUnit}
          />
          <ActionButtons
            calculateLabel="Calculate Mass"
            onCalculate={calculateMass}
            onClear={clearMassCalc}
          />
        </div>
        <ResultPanel
          title="Result"
          resultId="mass-result"
          stepsId="mass-steps"
          copyBtnId="mass-copy-btn"
          onCopy={copyMassResult}
        />
      </div>
      <FormulaBox
        formula="m = M × Mo × V"
        description="Where: m = Mass, M = Molarity, Mo = Molar Mass, V = Volume"
        color="orange"
      />
    </div>
  );
}
