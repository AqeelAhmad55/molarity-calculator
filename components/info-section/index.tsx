// components/InfoSections/index.tsx
import {
  InfoSection,
  UnitConversionCard,
  StepByStepGuide,
  FeatureCard,
} from "./components";

export function InfoSections() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* What is Molarity Section */}
      <InfoSection title="What is Molarity">
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p className="mb-4">
            Molarity is the concentration of a solution defined as moles of
            solute per liter of solution.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-lg font-medium text-blue-900">
              Molarity (M) = Mass of Solute (g) / Molar mass (g/mol) × Volume
              (L)
            </p>
          </div>
          <p className="mb-4">
            Equivalently, M = number of moles / volume of solution.
          </p>
        </div>
      </InfoSection>

      {/* Units of Molarity Section */}
      <InfoSection title="Units of Molarity">
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p className="mb-4">
            Molarity is commonly expressed as mol/L (also written as mol·L⁻¹ or
            simply M).
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <span className="font-medium text-blue-600">mol/L</span>
            </li>
            <li>
              <span className="font-medium text-blue-600">mol·L⁻¹</span>
            </li>
            <li>
              <span className="font-medium text-blue-600">M (molar)</span>
            </li>
          </ul>
        </div>
      </InfoSection>

      {/* Unit Conversions Section */}
      <InfoSection title="Units to Consider Before Calculating Molarity">
        <p className="text-gray-700 mb-6">
          If you want to calculate molarity accurately, it&apos;s very important
          to pay attention to the units of the values provided. Examine a few
          you values of different units, which will help you understand the
          required unit table during the calculation.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <UnitConversionCard
            title="1. Convert Mass to Grams (g)"
            items={[
              { label: "Milligram (mg)", value: "= 1,000 mg" },
              { label: "Microgram (μg)", value: "= 1,000,000 μg" },
              { label: "Kilogram (kg)", value: "= 0.001 kg" },
              { label: "Nanogram (ng)", value: "= 1,000,000,000 ng" },
            ]}
          />

          <UnitConversionCard
            title="2. Convert Molar Mass to g/mol"
            items={[
              { label: "Milligram/mol (mg/mol)", value: "= 1,000 mg/mol" },
              { label: "Microgram/mol (μg/mol)", value: "= 1,000,000 μg/mol" },
              { label: "Kilogram/mol (kg/mol)", value: "= 0.001 kg/mol" },
              {
                label: "Nanogram/mol (ng/mol)",
                value: "= 1,000,000,000 ng/mol",
              },
            ]}
          />

          <UnitConversionCard
            title="3. Convert Volume to Liters (L) or dm³"
            items={[
              { label: "Milliliter (mL)", value: "= 1,000 mL" },
              { label: "Centimeter³ (cm³)", value: "= 1,000 cm³" },
              { label: "Meter³ (m³)", value: "= 0.001 m³" },
              { label: "Microliter (μL)", value: "= 1,000,000 μL" },
            ]}
          />

          <UnitConversionCard
            title="4. Convert Molar Concentration to mol/L or mol/dm³"
            items={[
              { label: "Millimolar (mmol/L)", value: "= 1,000 mmol/L" },
              { label: "Micromolar (μmol/L)", value: "= 1,000,000 μmol/L" },
              { label: "Nanomolar (nmol/L)", value: "= 1,000,000,000 nmol/L" },
              {
                label: "Picomolar (pmol/L)",
                value: "= 1,000,000,000,000 pmol/L",
              },
            ]}
          />
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <h4 className="font-semibold text-green-900 mb-2">Good News!</h4>
          <p className="text-green-800 text-sm">
            Our molarity calculator automatically converts great units into the
            required units before applying the formula—so you don&apos;t have to
            worry about unit conversions yourself!
          </p>
        </div>
      </InfoSection>

      {/* How To Calculate Section */}
      <InfoSection title="How To Calculate Molarity of Solution Using Our Molarity Calculator">
        <p className="text-gray-700 mb-8">
          You can calculate molarity using our Free Molarity Calculator by
          following a few simple steps.
        </p>

        <div className="space-y-8">
          <StepByStepGuide
            title="Calculate Molarity (if Moles and Volume are Given)"
            description="You can calculate molarity if moles and volume are given by following the simple steps:"
            steps={[
              "Open our free molarity calculator. Enter the value of moles in the appropriate field.",
              "Enter the volume of the solution in the relevant field.",
              "Select the unit for all values (moles and volume).",
              'Click the "Calculate Molarity" button.',
              "Our calculator will automatically convert the units if needed, and show you the accurate molarity of the solution.",
            ]}
            color="blue"
          />

          <StepByStepGuide
            title="Calculate Molarity (if Mass, Molar Mass, and Volume are Given)"
            description="You can calculate molarity, if values of mass, molar mass, and volume are given:"
            steps={[
              "Open our free molarity calculator. Enter the value of mass in the appropriate field.",
              "Enter the molar mass of the solute in the relevant field.",
              "Enter the volume of the solution.",
              "Select the unit for each value (mass, molar mass, and volume).",
              'Click the "Calculate Molarity" button.',
              "Our calculator will automatically convert the units if needed, and show you the accurate molarity of the solution.",
            ]}
            color="green"
          />
        </div>
      </InfoSection>

      {/* Additional Calculator Functions Section */}
      <InfoSection title="Additional Calculator Functions">
        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Calculate Molarity (if Moles and Volume are given)
            </h3>
            <p className="text-gray-700 mb-3">
              You can calculate the molarity of a substance if moles and volume
              are given by following the simple steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>
                Open our free molarity calculator. Enter the value of moles in
                the appropriate field.
              </li>
              <li>Enter the molarity (molar concentration) of the solution.</li>
              <li>Enter the volume of the solution.</li>
              <li>
                Select the unit for all values (moles, molarity, and volume).
              </li>
              <li>Click the &quot;Calculate Molarity&quot; button.</li>
              <li>
                Our calculator will automatically convert the units if needed,
                and show you the accurate moles of the solute.
              </li>
            </ol>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Calculate Moles (if Molarity and Volume are given)
            </h3>
            <p className="text-gray-700 mb-3">
              You can calculate the moles of a substance if molarity and volume
              are given by following the simple steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>
                Open our free molarity calculator. Enter the value of molarity
                in the appropriate field.
              </li>
              <li>Enter the volume of the solution.</li>
              <li>Select the unit for all values (molarity and volume).</li>
              <li>Click the &quot;Calculate Moles&quot; button.</li>
              <li>
                Our calculator will facilitate the necessary conversions and
                provide you with the accurate moles of the solute.
              </li>
            </ol>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Calculate Volume (if Moles, Molarity, and Molar Mass are given)
            </h3>
            <p className="text-gray-700 mb-3">
              You can calculate the volume of a substance if moles, molarity,
              and molar mass are given by following the simple steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>
                Open our free molarity calculator. Enter the value of moles in
                the appropriate field.
              </li>
              <li>Enter the molarity (molar concentration) of the solution.</li>
              <li>Enter the molar mass of the substance.</li>
              <li>
                Select the unit for all values (moles, molarity, and molar
                mass).
              </li>
              <li>Click the &quot;Calculate Volume&quot; button.</li>
              <li>
                Our calculator will perform the necessary calculations and
                conversions, and display the accurate volume of the solution
                required.
              </li>
            </ol>
          </div>

          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Calculate Molar Mass (if Molarity and Volume are given)
            </h3>
            <p className="text-gray-700 mb-3">
              You can calculate the molar mass of a substance if molarity and
              volume are given by following the simple steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>
                Open our free molarity calculator. Enter the value of molarity
                in the appropriate field.
              </li>
              <li>Enter the volume of the solution.</li>
              <li>Enter the mass of the substance.</li>
              <li>
                Select the unit for all values (mass, molarity, and volume).
              </li>
              <li>Click the &quot;Calculate Molar Mass&quot; button.</li>
              <li>
                Our calculator will facilitate the necessary conversions and
                provide you with the accurate molar mass of the solute.
              </li>
            </ol>
          </div>
        </div>
      </InfoSection>

      {/* Why Choose Our Calculator Section */}
      <InfoSection title="Why to Choose Our Molarity Solver">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <FeatureCard
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              title="Automate Unit Conversions"
              description="Our calculator automatically converts all units into the required units before applying the formula. For example, if you enter mass in kilograms that, it's converted to grams."
              color="blue"
            />

            <FeatureCard
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              title="Step by Step Calculation"
              description="Our step-by-step calculator doesn't just give you the final answer—it shows you each step of the calculation used to reach that result. This helps you understand the process and verify your work."
              color="green"
            />

            <FeatureCard
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              title="Accurate Results"
              description="Precision is essential to ensure you always get accurate and reliable results. Filtering values in the entire grid can help you spot incorrect answers—but our calculator automatically converts all units to the same consistent form before performing any calculations."
              color="purple"
            />
          </div>

          <div className="space-y-6">
            <FeatureCard
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              }
              title="Copy Results"
              description="Whether you need to copy the molarity value into an assignment, submit it to your teacher, or use it in a report or project, you can do it instantly—our copy button makes it easy to copy the final results with just one click."
              color="orange"
            />

            <FeatureCard
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              title="Free To Use"
              description="Our molarity calculator, like our Dilution Calculator, is completely free—no sign-up, no hidden charges, and no limitations. Whether you're a student, teacher, or professional, you can use all of our tools anytime, anywhere, for free."
              color="red"
            />
          </div>
        </div>
      </InfoSection>

      {/* Conclusion Section */}
      <InfoSection
        title="Conclusion"
        className="bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-100"
      >
        <div className="text-gray-700 space-y-4">
          <p>
            Our free molarity calculator is a powerful and reliable tool
            designed to simplify complex molarity calculations. Whether
            you&apos;re solving for molarity, mass, volume, or molar mass, our
            calculator provides accurate results instantly.
          </p>
          <p>
            Ideal for students, teachers, and professionals, this calculator not
            only saves time but also eliminates the risk of calculation errors.
            With its user-friendly interface and comprehensive unit conversion
            support, you can confidently tackle any molarity problem.
          </p>
        </div>
      </InfoSection>
    </main>
  );
}
