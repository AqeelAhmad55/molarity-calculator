export default function DilutionInfoSection() {
  return (
    <main className="min-h-screen bg-gray-50 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        {/* What is Dilution Section */}
        <section className="mb-16 bg-white p-8 rounded-2xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            What is Dilution
          </h1>

          <p className="text-slate-700 mb-4 leading-relaxed">
            Dilution is the process of reducing the concentration of a solute in
            a solution by adding more solvent – commonly water – without
            changing the amount of solute. The relationship between
            concentration and volume is expressed by the dilution equation. The
            solute remains the same, but its ratio to the total volume
            decreases.
          </p>

          <p className="text-slate-700 mb-6 leading-relaxed">
            For example, if you have 10 grams of salt dissolved in 1 liter of
            water and add another liter of water, you will have 10 grams of salt
            – but in 2 liters now – so the dilution is less concentrated.
          </p>

          {/* Formula Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 px-4 py-2 mb-6">
            <div className="text-xl font-semibold text-slate-900 flex">
              <div className="flex items-end">
                C<span className=" text-lg align-super">₁</span>
              </div>
              <div className="flex items-end">
                V<span className=" text-lg align-super">₁</span>
              </div>
              <span className="px-2">=</span>
              <div className="flex items-end">
                C<span className=" text-lg align-super">₂</span>
              </div>
              <div className="flex items-end">
                V<span className=" text-lg align-super">₂</span>
              </div>
            </div>
          </div>

          {/* Where section */}
          <div className="mb-6">
            <h4 className="text-slate-900 font-semibold mb-3">Where:</h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start ">
                <span className="mr-3">•</span>
                <div className="flex items-end font-semibold">
                  C<span className="text-xs">1</span>
                </div>
                <span className="text-gray-600 ml-2">
                  – initial concentration
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <div className="flex items-end font-semibold">
                  V<span className="text-xs">1</span>
                </div>
                <span className="text-gray-600 ml-2"> – initial volume</span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3">•</span>
                <div className="flex items-end font-semibold">
                  C<span className="text-xs">2</span>
                </div>
                <span className="text-gray-600 ml-2">
                  – final concentration
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3">•</span>
                <div className="flex items-end font-semibold">
                  V<span className="text-xs">2</span>
                </div>
                <span className="text-gray-600 ml-2">– final volume</span>
              </li>
            </ul>
          </div>

          <p className="text-slate-600 text-sm italic">
            This formula is used to calculate how much solvent to add or what
            concentration results after dilution.
          </p>
        </section>

        {/* Why C1V1 C2V2 Calculator is Important Section */}
        <section className=" bg-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why C1V1 C2V2 Calculator is important
          </h2>

          <p className="text-slate-700 mb-4 leading-relaxed">
            When you&apos;re in the lab preparing a diluted solution from a
            stock concentrated solution, you often know three out of four values
            involved in the dilution equation.
          </p>

          <div className="mb-6">
            <p className="text-slate-600 font-semibold mb-3">
              You need to know:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Initial concentration (C)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Initial volume (V.)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Final concentration (C)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Final volume (V.)</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-slate-600 font-semibold mb-3">
              Depending on the situation, you might:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Know C₁, V₁, and C₂, but not V₂</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Know C₁, V₁, and V₂, but not C₂</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Know C₂, and V₂, but not V₁</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Or know C₁, and V₂, but not C₂</span>
              </li>
            </ul>
          </div>

          <p className="text-slate-700 mb-4 leading-relaxed">
            In any of these cases, a{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-700">
              dilution equation calculator
            </a>{" "}
            uses the standard Dilution equation (C₁V₁ = C₂V₂) to quickly
            calculate the missing value for you. A
            <a href="#" className="text-blue-600 underline hover:text-blue-700">
              {" "}
              M<span className="text-sm">1</span>V
              <span className="text-sm">1</span> calculator
            </a>{" "}
            saves time and reduces the risk of calculation errors in lab
            settings where precision matters.
          </p>
        </section>

        <section className="mb-16 mt-16 bg-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How To Solve Dilution Equation Related Problems Using Our Free
            Dilution Equation Calculator
          </h2>

          <ol className="space-y-3 text-slate-700 list-decimal list-inside">
            <li>Open our Dilution Calculator.</li>
            <li>Enter the known values into the appropriate input fields.</li>
            <li>Select the units for each value.</li>
            <li>Click the &quot;Calculate Dilution&quot; button</li>
            <li>
              The dilution equation calculator will instantly calculate and
              display the missing value using the dilution formula.
            </li>
          </ol>

          <p className="text-slate-700 mt-6 leading-relaxed">
            Additionally, our C1V1 C2V2 calculator will show you how much
            solvent (e.g., water) is required to make a dilution solution by
            subtracting the initial volume from the final volume.
          </p>
        </section>

        {/* Top Best Features Section */}
        <section className="mb-16 bg-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Top Best Features of Our Dilution Calculator
          </h2>

          {/* Feature 1: Automate Unit Conversion */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Automate Unit Conversion
            </h3>
            <p className="text-slate-700 leading-relaxed">
              One of the best features of our dilution calculator is its ability
              to automatically handle unit conversions. When solving the
              dilution equation, users may enter values in different units. Our
              tool works with all common units and will automatically convert
              all values to the correct unit conversions units before performing
              any calculations. This ensures that the calculations remain
              accurate, regardless of the units you choose.
            </p>
          </div>

          {/* Feature 2: Step by Step Calculation */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Step by Step Calculation
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Our dilution calculator tool not only provides quick and accurate
              solutions but also provides a clear step by step breakdown of the
              entire calculation process. Instead of just showing the final
              result, it walks you through how the dilution equation was solved
              using your input values.
            </p>
            <p className="text-slate-700 leading-relaxed mt-3">
              This feature helps you understand the logic behind the
              calculations and be able at hand for students, educators, and lab
              professionals who work both accurately and learning in one tool.
            </p>
          </div>

          {/* Feature 3: Copy The Results */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Copy The Results
            </h3>
            <p className="text-slate-700 leading-relaxed">
              After performing a dilution calculation, our solution dilution
              calculator displays both the steps involved and the final results
              in a clear and organized layout.
            </p>
            <p className="text-slate-700 leading-relaxed mt-3">
              Whether you need to submit your work, paste it into a lab report,
              or share it with a colleague or instructor, this feature ensures
              you have everything you need and ready to use—making your workflow
              faster, more efficient, and error free.
            </p>
          </div>

          {/* Feature 4: Free To Use */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Free To Use
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Our Dilution Calculator, like our majority calculator, is
              completely free to use, with no limitations or hidden charges. You
              can perform unlimited calculations with no restrictions or at any
              point, or with our free.
            </p>
            <p className="text-slate-700 leading-relaxed mt-3">
              Whether you&apos;re a lab, classroom, or working on a project, our
              dilution formula calculator ensures every dilution is calculated
              correctly and efficiently. It&apos;s an essential companion for
              students, educators, and professionals who work with solutions,
              ensuring results are accurate, efficient, and can be used with all
              calculations.
            </p>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="bg-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion</h2>
          <p className="text-slate-700 leading-relaxed">
            Our Dilution Calculator offers a simple, accurate, and time-saving
            solution for anyone working with dilution problems in chemistry. By
            automating unit conversions and concentrations, showing step by step
            calculations, and avoiding guesswork and reduces errors.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Whether you&apos;re a lab, classroom, or working on a project, our
            dilution formula calculator ensures every dilution is calculated
            correctly and efficiently. It&apos;s an essential companion for
            students, educators, and professionals who work with solutions,
            ensuring results are accurate, efficient, and can be used with all
            calculations.
          </p>
        </section>
      </div>
    </main>
  );
}
