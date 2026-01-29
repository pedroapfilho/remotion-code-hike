// ✅ Orchestrated: Staggered delays create visual rhythm
const delays = ["delay-0", "delay-100", "delay-200", "delay-300"] as const;

function FeatureGrid({ features }: { features: string[] }) {
  return (
    <div className="grid">
      {features.map((feature, i) => (
        <div
          key={feature}
          className={`animate-slide-up ${delays[i % delays.length]}`}
        >
          {feature}
        </div>
      ))}
    </div>
  );
}
