// utils/calculatorFunctions.ts
import { convertToStandard, formatNumber } from "./calculations";
import { UNIT_CONVERSIONS } from "./calculations";
import { showResult, showSteps, showCopyToast } from "./dom-utils";

// Molarity Calculator Functions
export function calculateMolarity() {
  try {
    const mass = Number.parseFloat(
      (document.getElementById("mass-input") as HTMLInputElement).value
    );
    const massUnit = (document.getElementById("mass-unit") as HTMLInputElement)
      .value;
    const molarMass = Number.parseFloat(
      (document.getElementById("molar-mass-input") as HTMLInputElement).value
    );
    const molarMassUnit = (
      document.getElementById("molar-mass-unit") as HTMLInputElement
    ).value;
    const volume = Number.parseFloat(
      (document.getElementById("volume-input") as HTMLInputElement).value
    );
    const volumeUnit = (
      document.getElementById("volume-unit") as HTMLInputElement
    ).value;

    if (isNaN(mass) || isNaN(molarMass) || isNaN(volume)) {
      showResult(
        "molarity-result",
        "Please enter valid numbers for all fields.",
        true
      );
      // Keep copy button hidden on error
      document.getElementById("molarity-copy-btn")!.classList.add("hidden");
      return;
    }
    if (mass <= 0 || molarMass <= 0 || volume <= 0) {
      showResult(
        "molarity-result",
        "All values must be positive numbers.",
        true
      );
      // Keep copy button hidden on error
      document.getElementById("molarity-copy-btn")!.classList.add("hidden");
      return;
    }

    const massInGrams = convertToStandard(mass, massUnit, "mass");
    const molarMassInGramsPerMol = convertToStandard(
      molarMass,
      molarMassUnit,
      "molarMass"
    );
    const volumeInLiters = convertToStandard(volume, volumeUnit, "volume");

    const molarity = massInGrams / (molarMassInGramsPerMol * volumeInLiters);
    const result = `Molarity = ${formatNumber(molarity)} mol/L`;
    showResult("molarity-result", result);

    const steps = [
      `Step 1: Convert mass from ${mass} ${massUnit} to grams`,
      `Mass in grams = ${mass} × ${
        UNIT_CONVERSIONS.mass[massUnit as keyof typeof UNIT_CONVERSIONS.mass]
      } = ${formatNumber(massInGrams)} g`,
      `Step 2: Convert molar mass from ${molarMass} ${molarMassUnit} to g/mol`,
      `Molar mass in g/mol = ${molarMass} × ${
        UNIT_CONVERSIONS.molarMass[
          molarMassUnit as keyof typeof UNIT_CONVERSIONS.molarMass
        ]
      } = ${formatNumber(molarMassInGramsPerMol)} g/mol`,
      `Step 3: Convert volume from ${volume} ${volumeUnit} to liters`,
      `Volume in liters = ${volume} × ${
        UNIT_CONVERSIONS.volume[
          volumeUnit as keyof typeof UNIT_CONVERSIONS.volume
        ]
      } = ${formatNumber(volumeInLiters)} L`,
      `Step 4: Calculate molarity using formula M = m/(Mo × V)`,
      `Molarity = ${formatNumber(massInGrams)} g / (${formatNumber(
        molarMassInGramsPerMol
      )} g/mol × ${formatNumber(volumeInLiters)} L)`,
      `Molarity = ${formatNumber(massInGrams)} / ${formatNumber(
        molarMassInGramsPerMol * volumeInLiters
      )} = ${formatNumber(molarity)} mol/L`,
    ];
    showSteps("molarity-steps", steps);

    // Show copy button when calculation is successful
    document.getElementById("molarity-copy-btn")!.classList.remove("hidden");

    //eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    showResult("molarity-result", `Error: ${error.message}`, true);
    // Keep copy button hidden on error
    document.getElementById("molarity-copy-btn")!.classList.add("hidden");
  }
}

export function clearMolarityCalc() {
  (document.getElementById("mass-input") as HTMLInputElement).value = "";
  (document.getElementById("molar-mass-input") as HTMLInputElement).value = "";
  (document.getElementById("volume-input") as HTMLInputElement).value = "";

  // Reset the hidden input values for units
  (document.getElementById("mass-unit") as HTMLInputElement).value = "g";
  (document.getElementById("molar-mass-unit") as HTMLInputElement).value =
    "g/mol";
  (document.getElementById("volume-unit") as HTMLInputElement).value = "L";

  // RESTORE THE PROPER STYLING FOR DEFAULT MESSAGE
  const resultElement = document.getElementById("molarity-result")!;
  resultElement.innerHTML = "Enter values and click calculate";
  resultElement.className =
    "rounded-xl border border-green-200 bg-green-50 p-4 text-center text-gray-800 font-medium";

  document.getElementById("molarity-steps")!.innerHTML = "";
  document.getElementById("molarity-steps")!.classList.add("hidden");

  // Hide copy button on clear
  document.getElementById("molarity-copy-btn")!.classList.add("hidden");
}

export function copyMolarityResult() {
  const resultDisplay = document.getElementById("molarity-result")!;
  const stepsDisplay = document.getElementById("molarity-steps")!;
  const resultText = resultDisplay.textContent!.trim();
  const stepsText = stepsDisplay.textContent!.trim();
  const fullText = `Molarity Calculation Result:\n${resultText}\n\nCalculation Steps:\n${stepsText}`;
  navigator.clipboard
    .writeText(fullText)
    .then(() => {
      showCopyToast("✅ Molarity result copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      showCopyToast(
        "❌ Failed to copy. Please select and copy manually.",
        "error"
      );
    });
}

// Moles Calculator Functions
// utils/calculator-functions.ts
export function calculateMoles() {
  try {
    const moles = Number.parseFloat(
      (document.getElementById("moles-input") as HTMLInputElement).value
    );
    const volume = Number.parseFloat(
      (document.getElementById("moles-volume-input") as HTMLInputElement).value
    );
    const volumeUnit = (
      document.getElementById("moles-volume-unit") as HTMLInputElement
    ).value;

    if (isNaN(moles) || isNaN(volume)) {
      showResult(
        "moles-result",
        "Please enter valid numbers for all fields.",
        true
      );
      // Keep copy button hidden on error
      document.getElementById("moles-copy-btn")!.classList.add("hidden");
      return;
    }
    if (moles <= 0 || volume <= 0) {
      showResult("moles-result", "All values must be positive numbers.", true);
      // Keep copy button hidden on error
      document.getElementById("moles-copy-btn")!.classList.add("hidden");
      return;
    }

    const volumeInLiters = convertToStandard(volume, volumeUnit, "volume");
    const Molarity = moles / volumeInLiters;
    const result = `Molarity = ${formatNumber(Molarity)} mol/L`;
    showResult("moles-result", result);

    const steps = [
      `Step 1: Convert volume from ${volume} ${volumeUnit} to liters`,
      `Volume in liters = ${volume} × ${
        UNIT_CONVERSIONS.volume[
          volumeUnit as keyof typeof UNIT_CONVERSIONS.volume
        ]
      } = ${formatNumber(volumeInLiters)} L`,
      `Step 2: Calculate Molarity using formula M = n/V`,
      `Molarity = ${moles} mol / ${formatNumber(
        volumeInLiters
      )} L = ${formatNumber(Molarity)} mol/L`,
    ];
    showSteps("moles-steps", steps);

    // Show copy button when calculation is successful
    document.getElementById("moles-copy-btn")!.classList.remove("hidden");

    //eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    showResult("moles-result", `Error: ${error.message}`, true);
    // Keep copy button hidden on error
    document.getElementById("moles-copy-btn")!.classList.add("hidden");
  }
}

export function clearMolesCalc() {
  (document.getElementById("moles-input") as HTMLInputElement).value = "";
  (document.getElementById("moles-volume-input") as HTMLInputElement).value =
    "";

  // Reset the hidden input value for volume unit
  (document.getElementById("moles-volume-unit") as HTMLInputElement).value =
    "L";

  // RESTORE THE PROPER STYLING FOR DEFAULT MESSAGE
  const resultElement = document.getElementById("moles-result")!;
  resultElement.innerHTML = "Enter values and click calculate";
  resultElement.className =
    "rounded-xl border border-green-200 bg-green-50 p-4 text-center text-gray-800 font-medium";

  document.getElementById("moles-steps")!.innerHTML = "";
  document.getElementById("moles-steps")!.classList.add("hidden");

  // Hide copy button on clear
  document.getElementById("moles-copy-btn")!.classList.add("hidden");
}

export function copyMolesResult() {
  const resultDisplay = document.getElementById("moles-result")!;
  const stepsDisplay = document.getElementById("moles-steps")!;
  const resultText = resultDisplay.textContent!.trim();
  const stepsText = stepsDisplay.textContent!.trim();
  const fullText = `Molarity from Moles Calculation Result:\n${resultText}\n\nCalculation Steps:\n${stepsText}`;
  navigator.clipboard
    .writeText(fullText)
    .then(() => {
      showCopyToast("✅ Molarity from moles result copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      showCopyToast(
        "❌ Failed to copy. Please select and copy manually.",
        "error"
      );
    });
}

// Volume Calculator Functions
export function calculateVolume() {
  try {
    const mass = Number.parseFloat(
      (document.getElementById("volume-mass-input") as HTMLInputElement).value
    );
    const molarMass = Number.parseFloat(
      (document.getElementById("volume-molar-mass-input") as HTMLInputElement)
        .value
    );
    const molarity = Number.parseFloat(
      (document.getElementById("volume-molarity-input") as HTMLInputElement)
        .value
    );
    const massUnit = (
      document.getElementById("volume-mass-unit") as HTMLInputElement
    ).value;
    const molarMassUnit = (
      document.getElementById("volume-molar-mass-unit") as HTMLInputElement
    ).value;
    const molarityUnit = (
      document.getElementById("volume-molarity-unit") as HTMLInputElement
    ).value;

    if (isNaN(mass) || isNaN(molarMass) || isNaN(molarity)) {
      showResult(
        "volume-result",
        "Please enter valid numbers for all fields.",
        true
      );
      // Keep copy button hidden on error
      document.getElementById("volume-copy-btn")!.classList.add("hidden");
      return;
    }

    if (mass <= 0 || molarMass <= 0 || molarity <= 0) {
      showResult("volume-result", "All values must be positive numbers.", true);
      // Keep copy button hidden on error
      document.getElementById("volume-copy-btn")!.classList.add("hidden");
      return;
    }

    const standardMass = convertToStandard(mass, massUnit, "mass");
    const standardMolarMass = convertToStandard(
      molarMass,
      molarMassUnit,
      "molarMass"
    );
    const standardMolarity = convertToStandard(
      molarity,
      molarityUnit,
      "molarity"
    );
    const volume = standardMass / standardMolarMass / standardMolarity;
    const result = `Volume = ${formatNumber(volume)} L`;
    showResult("volume-result", result);

    const steps = [
      `Step 1: Convert mass from ${mass} ${massUnit} to grams`,
      `Mass in grams = ${mass} × ${
        UNIT_CONVERSIONS.mass[massUnit as keyof typeof UNIT_CONVERSIONS.mass]
      } = ${formatNumber(standardMass)} g`,
      `Step 2: Convert molar mass from ${molarMass} ${molarMassUnit} to g/mol`,
      `Molar mass in g/mol = ${molarMass} × ${
        UNIT_CONVERSIONS.molarMass[
          molarMassUnit as keyof typeof UNIT_CONVERSIONS.molarMass
        ]
      } = ${formatNumber(standardMolarMass)} g/mol`,
      `Step 3: Convert molarity from ${molarity} ${molarityUnit} to mol/L`,
      `Molarity in mol/L = ${molarity} × ${
        UNIT_CONVERSIONS.molarity[
          molarityUnit as keyof typeof UNIT_CONVERSIONS.molarity
        ]
      } = ${formatNumber(standardMolarity)} mol/L`,
      `Step 4: Calculate volume using formula V = m/Mo × 1/M`,
      `V = ${formatNumber(standardMass)} g ÷ ${formatNumber(
        standardMolarMass
      )} g/mol × 1/${formatNumber(standardMolarity)} mol/L`,
      `V = ${formatNumber(
        standardMass / standardMolarMass
      )} mol × ${formatNumber(1 / standardMolarity)} L/mol`,
      `V = ${formatNumber(volume)} L`,
    ];
    showSteps("volume-steps", steps);

    // Show copy button when calculation is successful
    document.getElementById("volume-copy-btn")!.classList.remove("hidden");

    //eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    showResult("volume-result", `Error: ${error.message}`, true);
    document.getElementById("volume-copy-btn")!.classList.add("hidden");
  }
}

export function clearVolumeCalc() {
  (document.getElementById("volume-mass-input") as HTMLInputElement).value = "";
  (
    document.getElementById("volume-molar-mass-input") as HTMLInputElement
  ).value = "";
  (document.getElementById("volume-molarity-input") as HTMLInputElement).value =
    "";

  // Reset the hidden input values for units
  (document.getElementById("volume-mass-unit") as HTMLInputElement).value = "g";
  (
    document.getElementById("volume-molar-mass-unit") as HTMLInputElement
  ).value = "g/mol";
  (document.getElementById("volume-molarity-unit") as HTMLInputElement).value =
    "mol/L";

  // RESTORE THE PROPER STYLING FOR DEFAULT MESSAGE
  const resultElement = document.getElementById("volume-result")!;
  resultElement.innerHTML = "Enter values and click calculate";
  resultElement.className =
    "rounded-xl border border-green-200 bg-green-50 p-4 text-center text-gray-800 font-medium";

  document.getElementById("volume-steps")!.innerHTML = "";
  document.getElementById("volume-steps")!.classList.add("hidden");

  // Hide copy button on clear
  document.getElementById("volume-copy-btn")!.classList.add("hidden");
}

export function copyVolumeResult() {
  const resultDisplay = document.getElementById("volume-result")!;
  const stepsDisplay = document.getElementById("volume-steps")!;
  const resultText = resultDisplay.textContent!.trim();
  const stepsText = stepsDisplay.textContent!.trim();
  const fullText = `Volume Calculation Result:\n${resultText}\n\nCalculation Steps:\n${stepsText}`;
  navigator.clipboard
    .writeText(fullText)
    .then(() => {
      showCopyToast("✅ Volume result copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      showCopyToast(
        "❌ Failed to copy. Please select and copy manually.",
        "error"
      );
    });
}

// Mass Calculator Functions
// utils/calculator-functions.ts

export function calculateMass() {
  try {
    const molarity = Number.parseFloat(
      (document.getElementById("mass-molarity-input") as HTMLInputElement).value
    );
    const molarMass = Number.parseFloat(
      (document.getElementById("mass-molar-mass-input") as HTMLInputElement)
        .value
    );
    const volume = Number.parseFloat(
      (document.getElementById("mass-volume-input") as HTMLInputElement).value
    );
    const molarityUnit = (
      document.getElementById("mass-molarity-unit") as HTMLInputElement
    ).value;
    const molarMassUnit = (
      document.getElementById("mass-molar-mass-unit") as HTMLInputElement
    ).value;
    const volumeUnit = (
      document.getElementById("mass-volume-unit") as HTMLInputElement
    ).value;

    if (isNaN(molarity) || isNaN(molarMass) || isNaN(volume)) {
      showResult(
        "mass-result",
        "Please enter valid numbers for all fields.",
        true
      );
      // Keep copy button hidden on error
      document.getElementById("mass-copy-btn")!.classList.add("hidden");
      return;
    }

    if (molarity <= 0 || molarMass <= 0 || volume <= 0) {
      showResult("mass-result", "All values must be positive numbers.", true);
      // Keep copy button hidden on error
      document.getElementById("mass-copy-btn")!.classList.add("hidden");
      return;
    }

    const standardMolarity = convertToStandard(
      molarity,
      molarityUnit,
      "molarity"
    );
    const standardMolarMass = convertToStandard(
      molarMass,
      molarMassUnit,
      "molarMass"
    );
    const standardVolume = convertToStandard(volume, volumeUnit, "volume");
    const mass = standardMolarity * standardMolarMass * standardVolume;
    const result = `Mass = ${formatNumber(mass)} g`;
    showResult("mass-result", result);

    const steps = [
      `Step 1: Convert molarity from ${molarity} ${molarityUnit} to mol/L`,
      `Molarity in mol/L = ${molarity} × ${
        UNIT_CONVERSIONS.molarity[
          molarityUnit as keyof typeof UNIT_CONVERSIONS.molarity
        ]
      } = ${formatNumber(standardMolarity)} mol/L`,
      `Step 2: Convert molar mass from ${molarMass} ${molarMassUnit} to g/mol`,
      `Molar mass in g/mol = ${molarMass} × ${
        UNIT_CONVERSIONS.molarMass[
          molarMassUnit as keyof typeof UNIT_CONVERSIONS.molarMass
        ]
      } = ${formatNumber(standardMolarMass)} g/mol`,
      `Step 3: Convert volume from ${volume} ${volumeUnit} to liters`,
      `Volume in liters = ${volume} × ${
        UNIT_CONVERSIONS.volume[
          volumeUnit as keyof typeof UNIT_CONVERSIONS.volume
        ]
      } = ${formatNumber(standardVolume)} L`,
      `Step 4: Calculate mass using formula m = M × Mo × V`,
      `m = ${formatNumber(standardMolarity)} mol/L × ${formatNumber(
        standardMolarMass
      )} g/mol × ${formatNumber(standardVolume)} L`,
      `m = ${formatNumber(mass)} g`,
    ];
    showSteps("mass-steps", steps);

    // Show copy button when calculation is successful
    document.getElementById("mass-copy-btn")!.classList.remove("hidden");

    //eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    showResult("mass-result", `Error: ${error.message}`, true);
    // Keep copy button hidden on error
    document.getElementById("mass-copy-btn")!.classList.add("hidden");
  }
}

export function clearMassCalc() {
  (document.getElementById("mass-molarity-input") as HTMLInputElement).value =
    "";
  (document.getElementById("mass-molar-mass-input") as HTMLInputElement).value =
    "";
  (document.getElementById("mass-volume-input") as HTMLInputElement).value = "";

  // Reset the hidden input values for units
  (document.getElementById("mass-molarity-unit") as HTMLInputElement).value =
    "mol/L";
  (document.getElementById("mass-molar-mass-unit") as HTMLInputElement).value =
    "g/mol";
  (document.getElementById("mass-volume-unit") as HTMLInputElement).value = "L";

  // RESTORE THE PROPER STYLING FOR DEFAULT MESSAGE
  const resultElement = document.getElementById("mass-result")!;
  resultElement.innerHTML = "Enter values and click calculate";
  resultElement.className =
    "rounded-xl border border-green-200 bg-green-50 p-4 text-center text-gray-800 font-medium";

  document.getElementById("mass-steps")!.innerHTML = "";
  document.getElementById("mass-steps")!.classList.add("hidden");

  // Hide copy button on clear
  document.getElementById("mass-copy-btn")!.classList.add("hidden");
}

export function copyMassResult() {
  const resultDisplay = document.getElementById("mass-result")!;
  const stepsDisplay = document.getElementById("mass-steps")!;
  const resultText = resultDisplay.textContent!.trim();
  const stepsText = stepsDisplay.textContent!.trim();
  const fullText = `Mass Calculation Result:\n${resultText}\n\nCalculation Steps:\n${stepsText}`;
  navigator.clipboard
    .writeText(fullText)
    .then(() => {
      showCopyToast("✅ Mass result copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      showCopyToast(
        "❌ Failed to copy. Please select and copy manually.",
        "error"
      );
    });
}

// Molar Mass Calculator Functions
// utils/calculator-functions.ts

export function calculateMolarMass() {
  try {
    const mass = Number.parseFloat(
      (document.getElementById("molar-mass-mass-input") as HTMLInputElement)
        .value
    );
    const molarity = Number.parseFloat(
      (document.getElementById("molar-mass-molarity-input") as HTMLInputElement)
        .value
    );
    const volume = Number.parseFloat(
      (document.getElementById("molar-mass-volume-input") as HTMLInputElement)
        .value
    );
    const massUnit = (
      document.getElementById("molar-mass-mass-unit") as HTMLInputElement
    ).value;
    const molarityUnit = (
      document.getElementById("molar-mass-molarity-unit") as HTMLInputElement
    ).value;
    const volumeUnit = (
      document.getElementById("molar-mass-volume-unit") as HTMLInputElement
    ).value;

    if (isNaN(mass) || isNaN(molarity) || isNaN(volume)) {
      showResult(
        "molar-mass-result",
        "Please enter valid numbers for all fields.",
        true
      );
      // Keep copy button hidden on error
      document.getElementById("molar-mass-copy-btn")!.classList.add("hidden");
      return;
    }

    if (mass <= 0 || molarity <= 0 || volume <= 0) {
      showResult(
        "molar-mass-result",
        "All values must be positive numbers.",
        true
      );
      // Keep copy button hidden on error
      document.getElementById("molar-mass-copy-btn")!.classList.add("hidden");
      return;
    }

    const standardMass = convertToStandard(mass, massUnit, "mass");
    const standardMolarity = convertToStandard(
      molarity,
      molarityUnit,
      "molarity"
    );
    const standardVolume = convertToStandard(volume, volumeUnit, "volume");
    const molarMass = standardMass / (standardMolarity * standardVolume);
    const result = `Molar Mass = ${formatNumber(molarMass)} g/mol`;
    showResult("molar-mass-result", result);

    const steps = [
      `Step 1: Convert mass from ${mass} ${massUnit} to grams`,
      `Mass in grams = ${mass} × ${
        UNIT_CONVERSIONS.mass[massUnit as keyof typeof UNIT_CONVERSIONS.mass]
      } = ${formatNumber(standardMass)} g`,
      `Step 2: Convert molarity from ${molarity} ${molarityUnit} to mol/L`,
      `Molarity in mol/L = ${molarity} × ${
        UNIT_CONVERSIONS.molarity[
          molarityUnit as keyof typeof UNIT_CONVERSIONS.molarity
        ]
      } = ${formatNumber(standardMolarity)} mol/L`,
      `Step 3: Convert volume from ${volume} ${volumeUnit} to liters`,
      `Volume in liters = ${volume} × ${
        UNIT_CONVERSIONS.volume[
          volumeUnit as keyof typeof UNIT_CONVERSIONS.volume
        ]
      } = ${formatNumber(standardVolume)} L`,
      `Step 4: Calculate molar mass using formula Mo = m / (M × V)`,
      `Mo = ${formatNumber(standardMass)} g ÷ (${formatNumber(
        standardMolarity
      )} mol/L × ${formatNumber(standardVolume)} L)`,
      `Mo = ${formatNumber(standardMass)} g ÷ ${formatNumber(
        standardMolarity * standardVolume
      )} mol`,
      `Mo = ${formatNumber(molarMass)} g/mol`,
    ];
    showSteps("molar-mass-steps", steps);

    // Show copy button when calculation is successful
    document.getElementById("molar-mass-copy-btn")!.classList.remove("hidden");

    //eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    showResult("molar-mass-result", `Error: ${error.message}`, true);
    // Keep copy button hidden on error
    document.getElementById("molar-mass-copy-btn")!.classList.add("hidden");
  }
}

export function clearMolarMassCalc() {
  (document.getElementById("molar-mass-mass-input") as HTMLInputElement).value =
    "";
  (
    document.getElementById("molar-mass-molarity-input") as HTMLInputElement
  ).value = "";
  (
    document.getElementById("molar-mass-volume-input") as HTMLInputElement
  ).value = "";

  // Reset the hidden input values for units
  (document.getElementById("molar-mass-mass-unit") as HTMLInputElement).value =
    "g";
  (
    document.getElementById("molar-mass-molarity-unit") as HTMLInputElement
  ).value = "mol/L";
  (
    document.getElementById("molar-mass-volume-unit") as HTMLInputElement
  ).value = "L";

  // RESTORE THE PROPER STYLING FOR DEFAULT MESSAGE
  const resultElement = document.getElementById("molar-mass-result")!;
  resultElement.innerHTML = "Enter values and click calculate";
  resultElement.className =
    "rounded-xl border border-green-200 bg-green-50 p-4 text-center text-gray-800 font-medium";

  document.getElementById("molar-mass-steps")!.innerHTML = "";
  document.getElementById("molar-mass-steps")!.classList.add("hidden");

  // Hide copy button on clear
  document.getElementById("molar-mass-copy-btn")!.classList.add("hidden");
}

export function copyMolarMassResult() {
  const resultDisplay = document.getElementById("molar-mass-result")!;
  const stepsDisplay = document.getElementById("molar-mass-steps")!;
  const resultText = resultDisplay.textContent!.trim();
  const stepsText = stepsDisplay.textContent!.trim();
  const fullText = `Molar Mass Calculation Result:\n${resultText}\n\nCalculation Steps:\n${stepsText}`;
  navigator.clipboard
    .writeText(fullText)
    .then(() => {
      showCopyToast("✅ Molar mass result copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      showCopyToast(
        "❌ Failed to copy. Please select and copy manually.",
        "error"
      );
    });
}
