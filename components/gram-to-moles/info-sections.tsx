export function GramToMolesInfoSection() {
  const features = [
    {
      number: 1,
      title: "Automatic Unit Conversion",
      description:
        "One of the most useful features of our Grams to Moles Calculator is its built-in unit conversion capability. Users can input the mass in any common unit and it will automatically convert it to the appropriate unit for accurate mole calculation. This eliminates the need for manual conversions and prevents errors caused by miscalculated units. The result is a smooth, error-free conversion that guarantees precision in every calculation.",
    },
    {
      number: 2,
      title: "Step-by-Step Solution Breakdown",
      description:
        "Our g to mol calculator doesn't just give you the final answer—it also provides a step-by-step breakdown of how the grams to moles calculation is done. After you enter the values and click the calculate button, you can see exactly how the mole conversion was performed along with each step clearly displayed. This approach helps you understand the logic behind the result, making it a perfect tool for both learning and verification.",
    },
    {
      number: 3,
      title: "One-Click Result Copying",
      description:
        "After your calculation is complete, our g to mol conversion calculator presents both the final result and the step-by-step method in a clean, readable format. This allows you to easily copy and paste results. The g to mol conversion calculator supports fast and organized work with reliable, ready-to-use data.",
    },
    {
      number: 4,
      title: "Completely Free and Unlimited Access",
      description:
        "Our Grams to Moles Calculator, like most of our chemistry calculator's designed, is available completely free of cost, with no subscriptions, sign-ups, or usage restrictions. Whether you're performing one quick conversion or running multiple calculations for a chemistry project, the tool is always accessible without hidden charges or limitations on how many times you can use it. The Grams to Moles Converter ensures consistent access to a reliable calculation tool without worrying about loss of access barriers.",
    },
    {
      number: 5,
      title: "Fast, Accurate, and User-Friendly Design",
      description:
        "Simplicity is at the heart of our grams to moles converter's design. From entering your data to receiving the result, the entire process is designed to help you work faster and more confidently. Despite its simplicity, the g to moles converter uses precise chemical formulas to ensure accurate and trustworthy results. Whether you're in a classroom, lab, or just revising for an exam, the calculator is designed to help you work faster and more comfortably.",
    },
  ];

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="md:mb-16 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-6">
              What is Grams to Moles Conversion
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Grams to moles conversion is a fundamental concept in chemistry
                used to determine the number of moles of a substance from its
                mass in grams. This process relies on the molar mass, which is
                the mass of one mole of a substance expressed in grams per mole
                (g/mol). To convert grams to moles, you divide the given mass by
                the substance&apos;s molar mass.
              </p>
              <p>The formula for converting grams to moles is given below:</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                <p className="font-medium text-blue-900">n = m/M</p>
              </div>
              <div>
                <p className="font-medium mb-2">Where:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>n</strong> = number of moles
                  </li>
                  <li>
                    <strong>m</strong> = Mass in Grams
                  </li>
                  <li>
                    <strong>M</strong> = Molar mass of the compound
                  </li>
                </ul>
              </div>
              <p>
                This calculation also helps in various equations, stoichiometry,
                and experiments where the values must be expressed in the number
                of moles instead of mass.
              </p>
            </div>
          </div>
        </section>

        <section className="md:mb-16 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-6">
              How To Convert Grams to Moles Using Our Grams to Moles Calculator
            </h2>
            <div className="text-gray-700">
              <p className="mb-4">
                If you want to convert g to moles, our g to moles converter is
                designed to make it easy for you. Just follow these simple
                steps:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Open our Grams to Moles Converter</li>
                <li>Enter the given mass and the molar mass of the compound</li>
                <li>Click on the &quot;Convert to Moles&quot; button</li>
                <li>
                  Within seconds, the tool will display the result — the
                  equivalent number of moles
                </li>
                <li>You can copy the result to use in your assignments</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="md:mb-16 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-8">
              Features Offered By Our g to Mol Calculator
            </h2>

            <div className="space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="border-l-4 border-blue-400 pl-6 py-2"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <span className="text-blue-600 font-bold">
                      {feature.number}.
                    </span>{" "}
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Important Section */}
        <section className="md:mb-16 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-6">
              Why Grams to Moles Conversion is Important
            </h2>
            <div className="text-gray-700 space-y-3">
              <div className="flex gap-3">
                <span className="text-blue-600 font-bold min-w-fit">•</span>
                <p>
                  In chemistry, a grams to moles conversion is vital because
                  mole is the standard unit for quantifying substances at the
                  atomic and molecular level.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-600 font-bold min-w-fit">•</span>
                <p>
                  Converting grams to moles is essential for stoichiometric
                  calculations, which help in understanding and predicting
                  chemical reactions.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-600 font-bold min-w-fit">•</span>
                <p>
                  Beyond stoichiometry, moles are also required in many other
                  calculations, such as in molarity calculation, where the
                  number of moles is divided by volume to determine solution
                  concentration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
            <h2 className="md:text-2xl text-xl font-semibold text-gray-900 mb-6">
              Conclusion
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                In summary, our Grams to Moles Calculator is a reliable, fast,
                and user-friendly solution for converting grams to moles with
                complete accuracy. Its built-in conversion ability and
                step-by-step solutions make it ideal for students, educators,
                and professionals alike.
              </p>
              <p>
                With unlimited free access and a clean, intuitive interface, you
                can perform quick calculations anytime without hassle. Whether
                for assignments, lab work, or research, this tool ensures
                consistent, accurate access to a reliable calculation tool
                without worrying about loss of access barriers.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
