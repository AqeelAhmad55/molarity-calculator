// components/Calculator/CalculatorSuite.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { MassCalculator } from "./mass-calculator";
import { MolarMassCalculator } from "./molar-mass-calculator";
import { MolarityCalculator } from "./molarity-calculator";
import { MolesCalculator } from "./moles-calculator";
import { VolumeCalculator } from "./volume-calculator";
import { ChevronDown } from "lucide-react";

const tabs = [
  { id: "molarity", label: "Calculate Molarity from Mass" },
  { id: "moles", label: "Calculate Molarity from Moles" },
  { id: "volume", label: "Calculate Volume" },
  { id: "mass", label: "Calculate Mass" },
  { id: "molar-mass", label: "Calculate Molar Mass" },
];

export function CalculatorSuite() {
  const [activeTab, setActiveTab] = useState("molarity");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLabel =
    tabs.find((tab) => tab.id === activeTab)?.label || "Select Calculator Type";

  return (
    <section className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-8 py-4">
        {/* Header */}
        <div className="text-center md:mb-8 mb-6">
          <h1 className="md:text-2xl text-2xl font-semibold text-blue-900 mb-4">
            Molarity Calculator - Free & Accurate Molarity Solver
          </h1>
          <p className="text-blue-700 md:text-base text-sm">
            Our free molarity calculator helps you calculate the molarity of any
            solution. Just enter the required data, and our easy-to-use molarity
            solver will do the calculation.
          </p>
        </div>

        {/* Tabs for desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`lg:px-6 lg:py-3 px-4 py-2 lg:text-base text-sm rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-blue-700 border border-blue-200 hover:bg-blue-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Custom dropdown for mobile */}
        <div className="md:hidden mb-6 flex justify-center">
          <div className="relative w-full max-w-sm" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center justify-between w-full px-4 py-2 border border-blue-200 bg-white text-blue-800 rounded-lg shadow-sm transition-all duration-200 focus:ring-2 focus:ring-blue-400"
            >
              <span className="truncate text-base">{activeLabel}</span>
              <ChevronDown
                className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute left-0 right-0 z-10 mt-1 bg-white border border-blue-200 rounded-xl shadow-lg overflow-hidden animate-fadeIn">
                <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-blue-50 transition-all ${
                        tab.id === activeTab ? "bg-blue-50" : "bg-white"
                      }`}
                    >
                      {tab.id === activeTab ? (
                        <div className="w-1 h-5 bg-blue-500 rounded-full" />
                      ) : (
                        <div className="w-1 h-5 bg-transparent" />
                      )}
                      <span className="text-sm text-blue-900">{tab.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Calculator content */}
        <div id="calculator-content">
          {activeTab === "molarity" && <MolarityCalculator />}
          {activeTab === "moles" && <MolesCalculator />}
          {activeTab === "volume" && <VolumeCalculator />}
          {activeTab === "mass" && <MassCalculator />}
          {activeTab === "molar-mass" && <MolarMassCalculator />}
        </div>
      </div>
    </section>
  );
}
