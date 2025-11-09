// components/InfoSections/InfoSection.tsx
interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function InfoSection({
  title,
  children,
  className = "",
}: InfoSectionProps) {
  return (
    <section className="mb-16">
      <div
        className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-8 ${className}`}
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );
}

// components/InfoSections/FeatureCard.tsx
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "blue" | "green" | "purple" | "orange" | "red";
}

export function FeatureCard({
  icon,
  title,
  description,
  color,
}: FeatureCardProps) {
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
  };

  return (
    <div className="flex gap-4">
      <div className="shrink-0">
        <div
          className={`flex items-center justify-center h-12 w-12 rounded-md ${colorClasses[color]} text-white`}
        >
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
}

// components/InfoSections/UnitConversionCard.tsx
interface UnitConversionCardProps {
  title: string;
  items: { label: string; value: string }[];
}

export function UnitConversionCard({ title, items }: UnitConversionCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-2 text-sm text-gray-700">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.label}</span>
            <span className="font-mono">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// components/InfoSections/StepByStepGuide.tsx
interface StepByStepGuideProps {
  title: string;
  description: string;
  steps: string[];
  color?: "blue" | "green";
}

export function StepByStepGuide({
  title,
  description,
  steps,
  color = "blue",
}: StepByStepGuideProps) {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-500",
    green: "bg-green-50 border-green-500",
  };

  return (
    <div className={`rounded-lg p-6 border-l-4 ${colorClasses[color]}`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700">
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
