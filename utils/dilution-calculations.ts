import { formatNumber } from "./calculations";

export const UNIT_CONVERSIONS = {
  concentration: {
    M: 1,
    mM: 0.001,
    μM: 0.000001,
    nM: 0.000000001,
    pM: 0.000000000001,
    fM: 0.000000000001,
  },
  volume: {
    L: 1,
    mL: 0.001,
    "cm³": 0.001,
    "m³": 1000,
    "mm³": 0.000001,
    "km³": 1000000000000,
    μL: 0.000001,
    nL: 0.000000001,
    pL: 0.000000000001,
    kL: 1000,
  },
};

export function convertToStandard(
  value: number,
  unit: string,
  conversionType: "concentration" | "volume"
): number {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const conversion = (UNIT_CONVERSIONS as any)[conversionType][unit];
  if (conversion === undefined) {
    throw new Error(`Unknown unit: ${unit} for type: ${conversionType}`);
  }
  return value * conversion;
}

export interface DilutionCalculation {
  resultText: string;
  calculationSteps: string[];
}

export interface DilutionCalculation {
  resultText: string;
  calculationSteps: string[];
  missingLabel?: string;
  missingValue?: number;
  missingUnit?: string;
  solventVolume?: number;
}

export function calculateDilution(
  c1Val: number,
  v1Val: number,
  c2Val: number,
  v2Val: number,
  c1Unit: string,
  v1Unit: string,
  c2Unit: string,
  v2Unit: string
): DilutionCalculation {
  console.log("calculateDilution called");

  try {
    console.log("Input values:", { c1Val, v1Val, c2Val, v2Val });
    console.log("Input units:", { c1Unit, v1Unit, c2Unit, v2Unit });

    // Count how many values are provided
    const providedValues = [c1Val, v1Val, c2Val, v2Val].filter(
      (val) => !isNaN(val) && val >= 0
    );

    console.log("Provided values count:", providedValues.length);
    console.log("Provided values:", providedValues);

    if (providedValues.length < 3) {
      console.log("Not enough values provided, showing error");
      return {
        resultText:
          "Please enter at least 3 values to calculate the missing one.",
        calculationSteps: [],
        missingLabel: "",
        missingValue: undefined,
        missingUnit: "",
        solventVolume: 0,
      };
    }

    // Convert all values to standard units
    let c1InM: number, v1InL: number, c2InM: number, v2InL: number;

    if (!isNaN(c1Val) && c1Val >= 0) {
      c1InM = convertToStandard(c1Val, c1Unit, "concentration");
    }
    if (!isNaN(v1Val) && v1Val >= 0) {
      v1InL = convertToStandard(v1Val, v1Unit, "volume");
    }
    if (!isNaN(c2Val) && c2Val >= 0) {
      c2InM = convertToStandard(c2Val, c2Unit, "concentration");
    }
    if (!isNaN(v2Val) && v2Val >= 0) {
      v2InL = convertToStandard(v2Val, v2Unit, "volume");
    }

    let missingValue: number,
      missingUnit: string,
      missingLabel: string,
      calculationSteps: string[];
    let resultText = "";

    // Determine which value is missing and calculate it
    if (isNaN(c1Val) || c1Val < 0) {
      // Calculate C1: C1 = C2V2/V1
      missingValue = (c2InM! * v2InL!) / v1InL!;
      missingUnit = c1Unit;
      missingLabel = "Initial Concentration (C₁)";
      resultText = `C₁ = ${formatNumber(missingValue)} ${c1Unit}`;

      calculationSteps = [
        `Step 1: Convert all values to standard units`,
        `C₂ = ${c2Val} ${c2Unit} = ${formatNumber(c2InM!)} M`,
        `V₂ = ${v2Val} ${v2Unit} = ${formatNumber(v2InL!)} L`,
        `V₁ = ${v1Val} ${v1Unit} = ${formatNumber(v1InL!)} L`,
        `Step 2: Use the formula C₁ = C₂V₂/V₁`,
        `C₁ = (${formatNumber(c2InM!)} M × ${formatNumber(
          v2InL!
        )} L) / ${formatNumber(v1InL!)} L`,
        `C₁ = ${formatNumber(c2InM! * v2InL!)} / ${formatNumber(
          v1InL!
        )} = ${formatNumber(missingValue)} M`,
        `Step 3: Convert back to ${c1Unit}`,
        `C₁ = ${formatNumber(missingValue)} M = ${formatNumber(
          missingValue
        )} ${c1Unit}`,
      ];
    } else if (isNaN(v1Val) || v1Val < 0) {
      // Calculate V1: V1 = C2V2/C1
      missingValue = (c2InM! * v2InL!) / c1InM!;
      missingUnit = v1Unit;
      missingLabel = "Initial Volume (V₁)";
      resultText = `V₁ = ${formatNumber(missingValue)} ${v1Unit}`;

      calculationSteps = [
        `Step 1: Convert all values to standard units`,
        `C₂ = ${c2Val} ${c2Unit} = ${formatNumber(c2InM!)} M`,
        `V₂ = ${v2Val} ${v2Unit} = ${formatNumber(v2InL!)} L`,
        `C₁ = ${c1Val} ${c1Unit} = ${formatNumber(c1InM!)} M`,
        `Step 2: Use the formula V₁ = C₂V₂/C₁`,
        `V₁ = (${formatNumber(c2InM!)} M × ${formatNumber(
          v2InL!
        )} L) / ${formatNumber(c1InM!)} M`,
        `V₁ = ${formatNumber(c2InM! * v2InL!)} / ${formatNumber(
          c1InM!
        )} = ${formatNumber(missingValue)} L`,
        `Step 3: Convert back to ${v1Unit}`,
        `V₁ = ${formatNumber(missingValue)} L = ${formatNumber(
          missingValue
        )} ${v1Unit}`,
      ];
    } else if (isNaN(c2Val) || c2Val < 0) {
      // Calculate C2: C2 = C1V1/V2
      missingValue = (c1InM! * v1InL!) / v2InL!;
      missingUnit = c2Unit;
      missingLabel = "Final Concentration (C₂)";
      resultText = `C₂ = ${formatNumber(missingValue)} ${c2Unit}`;

      calculationSteps = [
        `Step 1: Convert all values to standard units`,
        `C₁ = ${c1Val} ${c1Unit} = ${formatNumber(c1InM!)} M`,
        `V₁ = ${v1Val} ${v1Unit} = ${formatNumber(v1InL!)} L`,
        `V₂ = ${v2Val} ${v2Unit} = ${formatNumber(v2InL!)} L`,
        `Step 2: Use the formula C₂ = C₁V₁/V₂`,
        `C₂ = (${formatNumber(c1InM!)} M × ${formatNumber(
          v1InL!
        )} L) / ${formatNumber(v2InL!)} L`,
        `C₂ = ${formatNumber(c1InM! * v1InL!)} / ${formatNumber(
          v2InL!
        )} = ${formatNumber(missingValue)} M`,
        `Step 3: Convert back to ${c2Unit}`,
        `C₂ = ${formatNumber(missingValue)} M = ${formatNumber(
          missingValue
        )} ${c2Unit}`,
      ];
    } else if (isNaN(v2Val) || v2Val < 0) {
      // Calculate V2: V2 = C1V1/C2
      missingValue = (c1InM! * v1InL!) / c2InM!;
      missingUnit = v2Unit;
      missingLabel = "Final Volume (V₂)";
      resultText = `V₂ = ${formatNumber(missingValue)} ${v2Unit}`;

      calculationSteps = [
        `Step 1: Convert all values to standard units`,
        `C₁ = ${c1Val} ${c1Unit} = ${formatNumber(c1InM!)} M`,
        `V₁ = ${v1Val} ${v1Unit} = ${formatNumber(v1InL!)} L`,
        `C₂ = ${c2Val} ${c2Unit} = ${formatNumber(c2InM!)} M`,
        `Step 2: Use the formula V₂ = C₁V₁/C₂`,
        `V₂ = (${formatNumber(c1InM!)} M × ${formatNumber(
          v1InL!
        )} L) / ${formatNumber(c2InM!)} M`,
        `V₂ = ${formatNumber(c1InM! * v1InL!)} / ${formatNumber(
          c2InM!
        )} = ${formatNumber(missingValue)} L`,
        `Step 3: Convert back to ${v2Unit}`,
        `V₂ = ${formatNumber(missingValue)} L = ${formatNumber(
          missingValue
        )} ${v2Unit}`,
      ];
    } else {
      // All values provided
      return {
        resultText:
          "Please enter exactly three values to calculate the fourth.",
        calculationSteps: [],
        missingLabel: "",
        missingValue: undefined,
        missingUnit: "",
        solventVolume: 0,
      };
    }

    // Calculate solvent volume
    let solventVolume = 0;
    if (!isNaN(v1Val) && v1Val >= 0 && !isNaN(v2Val) && v2Val >= 0) {
      const v1InLiters = convertToStandard(v1Val, v1Unit, "volume");
      const v2InLiters = convertToStandard(v2Val, v2Unit, "volume");
      solventVolume = v2InLiters - v1InLiters;
    }

    // Return complete results
    return {
      resultText,
      calculationSteps,
      missingLabel: missingLabel!,
      missingValue: missingValue!,
      missingUnit: missingUnit!,
      solventVolume,
    };
  } catch (error) {
    console.error("Error in calculateDilution:", error);
    return {
      resultText: `Error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      calculationSteps: [],
      missingLabel: "",
      missingValue: undefined,
      missingUnit: "",
      solventVolume: 0,
    };
  }
}
