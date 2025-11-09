"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface InputFieldProps {
  label: string;
  id: string;
  placeholder: string;
  type?: "number" | "text";
  withUnit?: boolean;
  unitId?: string;
  unitOptions?: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedUnit?: string;
  onUnitChange?: (value: string) => void;
  readOnly?: boolean;
}

export function InputField({
  label,
  id,
  placeholder,
  type = "number",
  withUnit = false,
  unitId,
  unitOptions = [],
  value,
  onChange,
  selectedUnit,
  onUnitChange,
  readOnly = false,
}: InputFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentUnit = selectedUnit || unitOptions[0]?.value || "";

  const handleSelect = (value: string) => {
    onUnitChange?.(value);
    setIsOpen(false);
  };

  const selectedLabel =
    unitOptions.find((opt) => opt.value === currentUnit)?.label ||
    unitOptions[0]?.label;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm lg:text-base font-semibold text-gray-700"
      >
        {label}
      </label>

      {withUnit && unitId ? (
        <div className="flex w-full items-center gap-2">
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readOnly}
            className="flex-1 lg:px-4 lg:py-2 px-2.5 py-1.5 lg:text-base text-sm rounded-l-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 transition-all duration-200"
          />

          {/* Custom Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <input type="hidden" id={unitId} value={currentUnit} />
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center justify-between sm:w-28 w-24 lg:px-4 lg:py-2 px-2.5 py-1.5 lg:text-base text-sm border border-l-0 border-gray-200 bg-white text-gray-700 rounded-r-xl transition-all duration-200 cursor-pointer"
            >
              <span className="truncate">{selectedLabel}</span>
              <ChevronDown
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute right-0 z-10 sm:w-28 w-24 bg-white border border-gray-200 rounded-lg shadow-lg mt-1">
                {unitOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className="block w-full text-left px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          className="w-full lg:px-4 lg:py-2 px-2.5 py-1.5 lg:text-base text-sm rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 transition-all duration-200"
        />
      )}

      {id === "solvent-volume" && (
        <p className="text-xs text-gray-600 pl-2 ">V₂ - V₁</p>
      )}
    </div>
  );
}

interface ResultPanelProps {
  title: string;
  resultId: string;
  stepsId: string;
  copyBtnId: string;
  onCopy: () => void;
  defaultMessage?: string;
  showCopyButton?: boolean; // Add this prop
  children?: React.ReactNode;
}

export function ResultPanel({
  title,
  resultId,
  stepsId,
  copyBtnId,
  onCopy,
  defaultMessage = "Enter values and click calculate",
  showCopyButton = false, // Default to false
  children,
}: ResultPanelProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white/60 backdrop-blur-md p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">{title}</h4>
      <div
        id={resultId}
        className="rounded-xl border border-green-200 bg-green-50 p-4 text-center text-gray-800 font-medium "
      >
        {defaultMessage}
      </div>
      <div id={stepsId} className="mt-3 text-sm text-gray-600 hidden"></div>

      {/* Conditionally show the copy button */}
      {showCopyButton && (
        <button
          id={copyBtnId}
          onClick={onCopy}
          className="mt-5 w-full rounded-lg bg-linear-to-r from-blue-600 to-indigo-500 py-2.5 font-semibold text-white shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-600 transition-all duration-200"
        >
          📋 Copy Result
        </button>
      )}

      {children}
    </div>
  );
}

interface FormulaBoxProps {
  formula: string;
  description: string;
  color?: "blue" | "green" | "purple" | "orange" | "red";
}

export function FormulaBox({
  formula,
  description,
  color = "blue",
}: FormulaBoxProps) {
  const colorClasses = {
    blue: "from-blue-50/60 to-blue-100/60 border-blue-200 text-blue-800",
    green: "from-green-50/60 to-green-100/60 border-green-200 text-green-800",
    purple:
      "from-purple-50/60 to-purple-100/60 border-purple-200 text-purple-800",
    orange:
      "from-orange-50/60 to-orange-100/60 border-orange-200 text-orange-800",
    red: "from-red-50/60 to-red-100/60 border-red-200 text-red-800",
  };

  return (
    <div
      className={`mt-10 bg-linear-to-br ${colorClasses[color]} border rounded-2xl p-5 shadow-sm backdrop-blur-md`}
    >
      <h2 className="text-lg font-semibold mb-3">Formula</h2>
      <div className="text-center">
        <p className="text-2xl font-mono font-bold">{formula}</p>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}

interface ActionButtonsProps {
  calculateLabel: string;
  onCalculate: () => void;
  onClear: () => void;
  calculateId?: string;
  disabled?: boolean;
}

export function ActionButtons({
  onCalculate,
  onClear,
  calculateLabel,
  disabled,
}: ActionButtonsProps) {
  return (
    <div className="flex sm:gap-4 gap-2 justify-center mt-6">
      <button
        onClick={onCalculate}
        disabled={disabled}
        className={`flex-1 rounded-full bg-linear-to-r from-blue-600 to-indigo-500 md:py-2.5 py-0   text-sm sm:text-base font-semibold text-white shadow-md hover:from-blue-700 hover:to-indigo-600 hover:shadow-lg transition-all duration-200 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {calculateLabel}
      </button>
      <button
        onClick={onClear}
        className="flex-1 rounded-full bg-gray-100 py-2.5  text-sm sm:text-base font-semibold text-gray-800 shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-200"
      >
        Clear
      </button>
    </div>
  );
}
