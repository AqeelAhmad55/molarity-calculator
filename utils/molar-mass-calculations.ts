// ATOMIC MASSES DATABASE - DO NOT MODIFY CALCULATIONS
const ATOMIC_MASSES: Record<string, number> = {
  H: 1.008,
  He: 4.003,
  Li: 6.941,
  Be: 9.012,
  B: 10.811,
  C: 12.011,
  N: 14.007,
  O: 15.999,
  F: 18.998,
  Ne: 20.18,
  Na: 22.99,
  Mg: 24.305,
  Al: 26.982,
  Si: 28.086,
  P: 30.974,
  S: 32.065,
  Cl: 35.453,
  Ar: 39.948,
  K: 39.098,
  Ca: 40.078,
  Sc: 44.956,
  Ti: 47.867,
  V: 50.942,
  Cr: 51.996,
  Mn: 54.938,
  Fe: 55.845,
  Co: 58.933,
  Ni: 58.693,
  Cu: 63.546,
  Zn: 65.38,
  Ga: 69.723,
  Ge: 72.64,
  As: 74.922,
  Se: 78.96,
  Br: 79.904,
  Kr: 83.798,
  Rb: 85.468,
  Sr: 87.62,
  Y: 88.906,
  Zr: 91.224,
  Nb: 92.906,
  Mo: 95.96,
  Tc: 98,
  Ru: 101.07,
  Rh: 102.906,
  Pd: 106.42,
  Ag: 107.868,
  Cd: 112.411,
  In: 114.818,
  Sn: 118.71,
  Sb: 121.76,
  Te: 127.6,
  I: 126.904,
  Xe: 131.293,
  Cs: 132.905,
  Ba: 137.327,
  La: 138.905,
  Ce: 140.116,
  Pr: 140.908,
  Nd: 144.242,
  Pm: 145,
  Sm: 150.36,
  Eu: 151.964,
  Gd: 157.25,
  Tb: 158.925,
  Dy: 162.5,
  Ho: 164.93,
  Er: 167.259,
  Tm: 168.934,
  Yb: 173.054,
  Lu: 174.967,
  Hf: 178.49,
  Ta: 180.948,
  W: 183.84,
  Re: 186.207,
  Os: 190.23,
  Ir: 192.217,
  Pt: 195.084,
  Au: 196.967,
  Hg: 200.59,
  Tl: 204.383,
  Pb: 207.2,
  Bi: 208.98,
  Po: 209,
  At: 210,
  Rn: 222,
  Fr: 223,
  Ra: 226,
  Ac: 227,
  Th: 232.038,
  Pa: 231.036,
  U: 238.029,
  Np: 237,
  Pu: 244,
  Am: 243,
  Cm: 247,
  Bk: 247,
  Cf: 251,
  Es: 252,
  Fm: 257,
  Md: 258,
  No: 259,
  Lr: 262,
  Rf: 261,
  Db: 262,
  Sg: 266,
  Bh: 264,
  Hs: 277,
  Mt: 268,
  Ds: 281,
  Rg: 272,
  Cn: 285,
  Nh: 286,
  Fl: 289,
  Mc: 289,
  Lv: 293,
  Ts: 294,
  Og: 294,
};

export interface ParseResult {
  elements: Record<string, number>;
}

export interface CalculationStep {
  element: string;
  atomicMass: number;
  count: number;
  mass: number;
}

export interface MolarMassResult {
  totalMass: number;
  steps: CalculationStep[];
}

// Parse chemical formula and extract elements with counts
export function parseFormula(formula: string): Record<string, number> {
  formula = formula.replace(/\s+/g, "").replace(/·/g, ".");

  if (formula.includes(".")) {
    return parseHydrateFormula(formula);
  }

  let globalMultiplier = 1;
  const leadingMatch = formula.match(/^(\d+)/);
  if (leadingMatch) {
    globalMultiplier = Number.parseInt(leadingMatch[1]);
    formula = formula.substring(leadingMatch[1].length);
  }

  const elements = parseComplexFormula(formula, globalMultiplier);
  return elements;
}

// Handle hydrate formulas (with dots)
function parseHydrateFormula(formula: string): Record<string, number> {
  const parts = formula.split(".");
  const elements: Record<string, number> = {};

  for (const part of parts) {
    if (part.trim()) {
      const partElements = parseFormula(part.trim());
      for (const [element, count] of Object.entries(partElements)) {
        elements[element] = (elements[element] || 0) + count;
      }
    }
  }

  return elements;
}

// Parse complex formulas with nested parentheses and brackets
function parseComplexFormula(
  formula: string,
  globalMultiplier = 1
): Record<string, number> {
  const elements: Record<string, number> = {};
  let i = 0;

  while (i < formula.length) {
    const result = parseToken(formula, i, globalMultiplier);
    i = result.nextIndex;

    for (const [element, count] of Object.entries(result.elements)) {
      elements[element] = (elements[element] || 0) + count;
    }
  }

  return elements;
}

// Parse a single token (element, group, etc.)
function parseToken(
  formula: string,
  startIndex: number,
  multiplier = 1
): { elements: Record<string, number>; nextIndex: number } {
  const i = startIndex;
  const elements: Record<string, number> = {};

  if (i >= formula.length) {
    return { elements, nextIndex: i };
  }

  const char = formula[i];

  if (char === "(" || char === "[") {
    const closingChar = char === "(" ? ")" : "]";
    const groupResult = parseGroup(formula, i + 1, closingChar, multiplier);
    return groupResult;
  }

  if (char.match(/[A-Z]/)) {
    const elementResult = parseElement(formula, i, multiplier);
    return elementResult;
  }

  return { elements, nextIndex: i + 1 };
}

// Parse a group (content within parentheses or brackets)
function parseGroup(
  formula: string,
  startIndex: number,
  closingChar: string,
  multiplier = 1
): { elements: Record<string, number>; nextIndex: number } {
  const elements: Record<string, number> = {};
  let i = startIndex;
  let depth = 1;
  const groupContent = [];

  while (i < formula.length && depth > 0) {
    const char = formula[i];
    if (char === "(" || char === "[") {
      depth++;
    } else if (char === closingChar) {
      depth--;
      if (depth === 0) {
        break;
      }
    }

    if (depth > 0) {
      groupContent.push(char);
    }
    i++;
  }

  const groupFormula = groupContent.join("");
  const groupElements = parseComplexFormula(groupFormula, 1);

  i++;
  let countStr = "";
  while (i < formula.length && formula[i].match(/\d/)) {
    countStr += formula[i];
    i++;
  }

  const groupMultiplier = countStr ? Number.parseInt(countStr) : 1;
  const finalMultiplier = multiplier * groupMultiplier;

  for (const [element, count] of Object.entries(groupElements)) {
    elements[element] = (elements[element] || 0) + count * finalMultiplier;
  }

  return { elements, nextIndex: i };
}

// Parse a single element with its count
function parseElement(
  formula: string,
  startIndex: number,
  multiplier = 1
): { elements: Record<string, number>; nextIndex: number } {
  const elements: Record<string, number> = {};
  let i = startIndex;

  let elementSymbol = formula[i];
  i++;

  if (i < formula.length && formula[i].match(/[a-z]/)) {
    elementSymbol += formula[i];
    i++;
  }

  let countStr = "";
  while (i < formula.length && formula[i].match(/\d/)) {
    countStr += formula[i];
    i++;
  }

  const count = countStr ? Number.parseInt(countStr) : 1;
  const finalCount = count * multiplier;

  elements[elementSymbol] = (elements[elementSymbol] || 0) + finalCount;

  return { elements, nextIndex: i };
}

// Format element counts for display
export function formatElementCounts(elements: Record<string, number>): string {
  const formatted = [];
  for (const [element, count] of Object.entries(elements)) {
    formatted.push(`${element}:${count}`);
  }
  return formatted.join(", ");
}

// Calculate molar mass from parsed elements - FORMULA PRESERVED
export function calculateMolarMassFromElements(
  elements: Record<string, number>
): MolarMassResult {
  let totalMass = 0;
  const steps: CalculationStep[] = [];

  for (const [element, count] of Object.entries(elements)) {
    if (ATOMIC_MASSES[element]) {
      const atomicMass = ATOMIC_MASSES[element];
      const elementMass = atomicMass * count;
      totalMass += elementMass;

      steps.push({
        element: element,
        atomicMass: atomicMass,
        count: count,
        mass: elementMass,
      });
    } else {
      throw new Error(`Unknown element: ${element}`);
    }
  }

  return { totalMass, steps };
}

// Main molar mass calculation function
export function calculateMolarMass(formula: string): {
  formula: string;
  elements: Record<string, number>;
  totalMass: number;
  steps: CalculationStep[];
} {
  if (!formula.trim()) {
    throw new Error("Please enter a chemical formula.");
  }

  try {
    const elements = parseFormula(formula);

    if (Object.keys(elements).length === 0) {
      throw new Error("Invalid chemical formula. Please check your input.");
    }

    const { totalMass, steps } = calculateMolarMassFromElements(elements);

    return { formula, elements, totalMass, steps };
  } catch (error) {
    throw error;
  }
}
