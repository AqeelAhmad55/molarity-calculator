import { formatNumber } from "./calculations";

// Unit conversion constants and functions - EXACT formulas preserved
export const UNIT_CONVERSIONS = {
  mass: {
    g: 1,
    mg: 0.001,
    μg: 0.000001,
    kg: 1000,
    ng: 0.000000001,
    pg: 0.000000000001,
  },
  molarMass: {
    "g/mol": 1,
    "mg/mol": 0.001,
    "μg/mol": 0.000001,
    "kg/mol": 1000,
    "ng/mol": 0.000000001,
    "pg/mol": 0.000000000001,
  },
};

// Utility function to convert units to standard units - NO CHANGES TO FORMULA
export function convertToStandard(
  value: number,
  unit: string,
  conversionType: "mass" | "molarMass"
): number {
  const conversion =
    UNIT_CONVERSIONS[conversionType][
      unit as keyof (typeof UNIT_CONVERSIONS)[typeof conversionType]
    ];
  if (conversion === undefined) {
    throw new Error(`Unknown unit: ${unit} for type: ${conversionType}`);
  }
  return value * conversion;
}

// Main calculation function - n = m/M (FORMULA PRESERVED EXACTLY)
export function calculateGramsToMoles(
  massValue: number,
  molarMassValue: number,
  massUnit: string,
  molarMassUnit: string
) {
  // Convert to standard units
  const massInGrams = convertToStandard(massValue, massUnit, "mass");
  const molarMassInGPerMol = convertToStandard(
    molarMassValue,
    molarMassUnit,
    "molarMass"
  );

  // Calculate moles using formula: n = m/M
  const moles = massInGrams / molarMassInGPerMol;

  // Generate calculation steps
  const calculationSteps = [
    `Step 1: Convert mass to grams`,
    `Mass = ${massValue} ${massUnit} = ${formatNumber(massInGrams)} g`,
    `Step 2: Convert molar mass to g/mol`,
    `Molar Mass = ${molarMassValue} ${molarMassUnit} = ${formatNumber(
      molarMassInGPerMol
    )} g/mol`,
    `Step 3: Apply the formula n = m/M`,
    `n = ${formatNumber(massInGrams)} g ÷ ${formatNumber(
      molarMassInGPerMol
    )} g/mol`,
    `n = ${formatNumber(moles)} mol`,
  ];

  return {
    moles,
    calculationSteps,
    massInGrams,
    molarMassInGPerMol,
  };
}
