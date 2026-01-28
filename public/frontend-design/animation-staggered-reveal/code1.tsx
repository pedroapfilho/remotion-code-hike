// ❌ Chaotic: All elements animate simultaneously
function FeatureGrid({ features }: { features: string[] }) {
  return (
    <div className="grid">
      {features.map((feature) => (
        <div key={feature} className="animate-fade-in">
          {feature}
        </div>
      ))}
    </div>
  );
}
