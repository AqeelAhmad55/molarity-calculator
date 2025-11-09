const InfoSections = () => {
  const features = [
    {
      title: "Automatic Unit Conversion",
      description:
        "One of the best features of our Moles to Grams Calculator is its built-in unit conversion capability. Users can input the molar mass in any unit they choose (g/mol, mg/mol, μg/mol, etc.), and the calculator automatically handles the unit conversions to ensure the right output in grams.",
    },
    {
      title: "Step-by-Step Solution Breakdown",
      description:
        "Our calculator makes to grams conversion just give you the final result—it also breaks down each step of the mole-to-gram conversion for better understanding. After entering your values, you'll see how the calculator multiplies the number of moles by the molar mass to match the final value, making it especially beneficial for students, teachers, and professionals.",
    },
    {
      title: "One-Click Result Copying",
      description:
        "Once your calculation is complete, you'll see the result and all calculation steps neatly displayed on the screen. With one click, you can copy the entire result and all calculation steps neatly displayed on the screen. This time-saving feature helps eliminate copy-paste errors and ensures your data is clear, complete, and ready to share without any hassle.",
    },
    {
      title: "Completely Free and Unlimited Access",
      description:
        "Our Moles to Grams Converter, like our grams to moles, is 100% free to use, with no sign-up required and no usage limits. You can perform as many calculations as you need. Whenever you're preparing for an exam, completing lab work, or doing chemistry research, the tool is always available—without hidden fees or interruptions. It's designed to support students, teachers, and science professionals alike.",
    },
    {
      title: "Fast, Accurate, and User-Friendly Design",
      description:
        "Behind the scenes, the mol to g converter uses precise chemical math to ensure accuracy you can trust. Whether you're in a classroom, lab, or at home, our mol to g calculator helps you compute your work faster, more accurately, and with full confidence.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className=" space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="bg-white rounded-lg md:p-8 p-5 border border-gray-100">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              What is Moles To Grams Conversion
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                Moles to grams conversion is a fundamental concept in chemistry
                used to determine the mass of a substance in grams from its
                amount in moles. This process is one of the most important
                calculations in chemistry that allows chemists to convert
                between the number of moles of a substance and its mass in grams
                per mole.
              </p>

              <p>
                To convert moles to grams, you multiply the given number of
                moles by the substance&apos;s molar mass. The formula for
                converting moles to grams is given below:
              </p>

              <div className="bg-gray-100 p-4 rounded-lg text-center font-mono text-sm border border-gray-200">
                <p className="font-semibold text-gray-900">m = n × M</p>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-gray-900">Where:</p>
                <ul className="space-y-1 ml-4">
                  <li>
                    <strong>m</strong> = Mass in grams
                  </li>
                  <li>
                    <strong>n</strong> = Number of moles
                  </li>
                  <li>
                    <strong>M</strong> = Molar mass of the compound (g/mol)
                  </li>
                </ul>
              </div>

              <p>
                This calculation also helps in various equations, stoichiometry,
                and experiments where the values must be expressed in the number
                of moles instead of grams. That&apos;s why people convert grams
                into moles—to ensure accurate calculations and proper chemical
                proportions.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg md:p-8 p-5 border border-gray-100">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              How To Convert Moles to Grams Using Our Moles to Grams Converter
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                If you want to convert mol to g, our moles to grams calculator
                is designed to make it easy for you. Just follow these simple
                steps:
              </p>

              <ol className="space-y-3 ml-4 list-decimal">
                <li>
                  <span className="font-semibold">
                    Open our Moles to Grams Converter
                  </span>{" "}
                  to convert moles to grams.
                </li>
                <li>
                  <span className="font-semibold">
                    Enter the number of moles and the molar mass of the compound
                  </span>{" "}
                  in the input fields.
                </li>
                <li>
                  <span className="font-semibold">
                    Click on the &quot;Convert to Grams&quot; button
                  </span>
                  .
                </li>
                <li>
                  <span className="font-semibold">
                    Within seconds, the calculator for moles to grams will
                    display the result
                  </span>{" "}
                  — the equivalent mass in grams.
                </li>
                <li>
                  <span className="font-semibold">
                    You can copy the result to use in your lab reports,
                    homework, or research projects
                  </span>
                  .
                </li>
              </ol>

              <p className="text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
                The calculator automatically handles unit conversions and
                provides step-by-step calculations to help you understand the
                conversion process.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg md:p-8 p-5 border border-gray-100">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Features Offered By Our Moles to Grams Calculator
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-gray-900">
                    {index + 1}. {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg md:p-8 p-5 border border-gray-100">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Conclusion</h2>

            <div className="space-y-4 text-gray-700">
              <p>
                Converting moles to grams is an essential skill for anyone
                studying or working in chemistry, and our Moles to Grams
                Calculator makes the process easy, fast, and error-free. With
                its intuitive interface, built-in unit conversions, and
                step-by-step breakdowns, the moles to g calculator is perfect
                for students, teachers, researchers, and professionals alike.
              </p>

              <p>
                Whether you&apos;re doing quick calculations for lab work,
                homework, or scientific research, you can rely on our free,
                accurate, and user-friendly calculator to save time and deliver
                results—anytime, anywhere.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfoSections;
