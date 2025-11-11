"use client";

import {
  convertToStandard,
  UNIT_CONVERSIONS,
} from "@/utils/dilution-calculations";
import { useState } from "react";
import { InputField } from "../common/calculator-components";
import { formatNumber } from "@/utils/calculations";

export default function DilutionCalculator() {
  const [c1, setC1] = useState("");
  const [c1Unit, setC1Unit] = useState("M");
  const [v1, setV1] = useState("");
  const [v1Unit, setV1Unit] = useState("mL");
  const [c2, setC2] = useState("");
  const [c2Unit, setC2Unit] = useState("M");
  const [v2, setV2] = useState("");
  const [v2Unit, setV2Unit] = useState("mL");
  const [solvent, setSolvent] = useState("");

  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const c1Val = convertToStandard(Number(c1), c1Unit, "concentration");
      const v1Val = convertToStandard(Number(v1), v1Unit, "volume");
      const c2Val = convertToStandard(Number(c2), c2Unit, "concentration");

      // Calculate V2 = (C1 * V1) / C2
      const v2Val = (c1Val * v1Val) / c2Val;

      // Convert V2 back to selected unit
      const resultInSelectedUnit =
        v2Val /
        UNIT_CONVERSIONS.volume[v2Unit as keyof typeof UNIT_CONVERSIONS.volume];

      setResult(`${formatNumber(resultInSelectedUnit)} ${v2Unit}`);
    } catch (error) {
      console.error(error);
      setResult("Invalid input values");
    }
  };

  const handleReset = () => {
    setC1("");
    setC1Unit("M");
    setV1("");
    setV1Unit("mL");
    setC2("");
    setC2Unit("M");
    setV2("");
    setV2Unit("mL");
    setSolvent("");
    setResult(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-sm space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Dilution Calculator
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputField
          label="Initial Concentration (C₁)"
          id="c1"
          placeholder="Enter C₁"
          withUnit
          unitId="c1Unit"
          value={c1}
          onChange={(e) => setC1(e.target.value)}
          selectedUnit={c1Unit}
          onUnitChange={setC1Unit}
          unitOptions={[
            { value: "M", label: "M" },
            { value: "mM", label: "mM" },
            { value: "μM", label: "μM" },
            { value: "nM", label: "nM" },
            { value: "pM", label: "pM" },
            { value: "fM", label: "fM" },
          ]}
        />

        <InputField
          label="Initial Volume (V₁)"
          id="v1"
          placeholder="Enter V₁"
          withUnit
          unitId="v1Unit"
          value={v1}
          onChange={(e) => setV1(e.target.value)}
          selectedUnit={v1Unit}
          onUnitChange={setV1Unit}
          unitOptions={[
            { value: "L", label: "L" },
            { value: "mL", label: "mL" },
            { value: "μL", label: "μL" },
            { value: "nL", label: "nL" },
          ]}
        />

        <InputField
          label="Final Concentration (C₂)"
          id="c2"
          placeholder="Enter C₂"
          withUnit
          unitId="c2Unit"
          value={c2}
          onChange={(e) => setC2(e.target.value)}
          selectedUnit={c2Unit}
          onUnitChange={setC2Unit}
          unitOptions={[
            { value: "M", label: "M" },
            { value: "mM", label: "mM" },
            { value: "μM", label: "μM" },
            { value: "nM", label: "nM" },
            { value: "pM", label: "pM" },
            { value: "fM", label: "fM" },
          ]}
        />

        <InputField
          label="Final Volume (V₂)"
          id="v2"
          placeholder="Enter V₂"
          withUnit
          unitId="v2Unit"
          value={v2}
          onChange={(e) => setV2(e.target.value)}
          selectedUnit={v2Unit}
          onUnitChange={setV2Unit}
          unitOptions={[
            { value: "L", label: "L" },
            { value: "mL", label: "mL" },
            { value: "μL", label: "μL" },
            { value: "nL", label: "nL" },
          ]}
        />

        <InputField
          label="Solvent"
          id="solvent"
          placeholder="Enter solvent name"
          type="text"
          value={solvent}
          onChange={(e) => setSolvent(e.target.value)}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-3 pt-4">
        <button
          onClick={handleCalculate}
          className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-xl"
        >
          Calculate
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-2 border-gray-300 hover:bg-gray-100 rounded-xl"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-4 text-center text-lg font-medium text-gray-800">
          Required Final Volume:{" "}
          <span className="text-blue-700 font-semibold">{result}</span>
        </div>
      )}
    </div>
  );
}
