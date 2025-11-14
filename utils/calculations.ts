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

// Format with 3 significant digits, no scientific notation.
export function formatNumber(num: number): string {
  if (num === 0) return "0";

  const absNum = Math.abs(num);

  // For numbers with absolute value >= 1, use 3 decimal places.
  if (absNum >= 1) {
    return num.toFixed(3);
  }

  // Determine exponent for significant-figure rounding.
  const exponent = Math.floor(Math.log10(absNum));
  const significantDigits = 3;
  const scale = Math.pow(10, significantDigits - 1 - exponent);

  const rounded = Math.round(num * scale) / scale;
  const str = rounded.toString();

  // If JavaScript is not using exponential notation, we are done.
  if (!/[eE]/.test(str)) {
    return str;
  }

  // Expand numbers written in exponential form (e.g. 6.25e-10) to full decimal.
  const [mantissaRaw, exponentRaw] = str.split(/[eE]/);
  const exp = parseInt(exponentRaw, 10);

  let sign = "";
  let mantissa = mantissaRaw;

  if (mantissa.startsWith("-")) {
    sign = "-";
    mantissa = mantissa.slice(1);
  } else if (mantissa.startsWith("+")) {
    mantissa = mantissa.slice(1);
  }

  const dotIndex = mantissa.indexOf(".");
  const digits = mantissa.replace(".", "");
  const originalDecimalPos = dotIndex === -1 ? digits.length : dotIndex;

  const newDecimalPos = originalDecimalPos + exp;

  let result: string;

  if (newDecimalPos <= 0) {
    const zeros = "0".repeat(Math.abs(newDecimalPos));
    result = `0.${zeros}${digits}`;
  } else if (newDecimalPos >= digits.length) {
    const zeros = "0".repeat(newDecimalPos - digits.length);
    result = `${digits}${zeros}`;
  } else {
    result = `${digits.slice(0, newDecimalPos)}.${digits.slice(newDecimalPos)}`;
  }

  if (result.includes(".")) {
    result = result.replace(/\.?0+$/, "");
  }

  return sign + result;
}
