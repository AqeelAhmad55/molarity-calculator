// utils/calculations.ts
export const UNIT_CONVERSIONS = {
  mass: {
    g: 1,
    mg: 0.001,
    kg: 1000,
    μg: 0.000001,
    ng: 0.000000001,
    pg: 0.000000000001,
  },
  molarMass: {
    "g/mol": 1,
    "mg/mol": 0.001,
    "kg/mol": 1000,
    "μg/mol": 0.000001,
    "ng/mol": 0.000000001,
    "pg/mol": 0.000000000001,
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
  molarity: {
    "mol/L": 1,
    "mmol/L": 0.001,
    "μmol/L": 0.000001,
    "nmol/L": 0.000000001,
    "pmol/L": 0.000000000001,
    "fmol/L": 0.000000000000001,
  },
};

export type ConversionType = keyof typeof UNIT_CONVERSIONS;

export function convertToStandard(
  value: number,
  unit: string,
  conversionType: ConversionType
) {
  const conversion =
    UNIT_CONVERSIONS[conversionType][
      unit as keyof (typeof UNIT_CONVERSIONS)[ConversionType]
    ];
  if (conversion === undefined) {
    throw new Error(`Unknown unit: ${unit} for type: ${conversionType}`);
  }
  return value * conversion;
}

export function formatNumber(num: number): string {
  if (num === 0) return "0";

  const absNum = Math.abs(num);

  // For extremely small numbers (less than 1e-10)
  if (absNum < 1e-10 && absNum > 0) {
    const sci = num.toExponential(4);
    const [coeff, exp] = sci.split("e");
    const exponent = parseInt(exp);

    if (exponent < -6) {
      const leadingZeros = "0".repeat(Math.abs(exponent) - 1);
      const digits = Math.abs(parseFloat(coeff)).toFixed(2).replace("0.", "");
      return `0.${leadingZeros}${digits}`;
    }
  }

  // For small but not extremely small numbers
  if (absNum < 0.001) {
    return num.toFixed(8).replace(/(\.\d*?[1-9])0+$/, "$1");
  }

  // Regular numbers with decimals
  if (absNum < 1000000 && !Number.isInteger(num)) {
    return parseFloat(num.toFixed(3)).toString();
  }

  return num.toString();
}
