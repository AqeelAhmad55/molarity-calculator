// utils/domUtils.ts
export function showResult(elementId: string, result: string, isError = false) {
  const element = document.getElementById(elementId)!;
  // if (isError) element.className = "result-error";
  // else element.className = "result-success";
  element.innerHTML = result;
  element.classList.remove("hidden");
  if (!isError) {
    const copyBtnId = elementId.replace("-result", "-copy-btn");
    const copyBtn = document.getElementById(copyBtnId);
    if (copyBtn) copyBtn.classList.remove("hidden");
  }
}

export function showSteps(elementId: string, steps: string[] | string) {
  const element = document.getElementById(elementId)!;
  if (Array.isArray(steps)) {
    element.innerHTML = steps
      .map(
        (step) =>
          `<div class="calculation-step mb-2 p-2 bg-white rounded border-l-4 border-blue-400">${step}</div>`
      )
      .join("");
  } else {
    element.innerHTML = steps;
  }
  element.classList.remove("hidden");
}

export function showCopyToast(
  message: string,
  type: "success" | "error" = "success"
) {
  const existingToast = document.querySelector(
    ".copy-toast"
  ) as HTMLElement | null;
  if (existingToast) existingToast.remove();
  const toast = document.createElement("div");
  toast.className = `copy-toast fixed top-20 left-1/2 transform -translate-x-1/2 z-[9999] px-6 py-3 rounded-lg shadow-lg text-white font-medium transition-all duration-300 ${
    type === "success" ? "bg-green-500" : "bg-red-500"
  }`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translate(-50%, 0) scale(1)";
  }, 10);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translate(-50%, -20px) scale(0.95)";
    setTimeout(() => {
      toast.parentNode?.removeChild(toast);
    }, 300);
  }, 3000);
}
