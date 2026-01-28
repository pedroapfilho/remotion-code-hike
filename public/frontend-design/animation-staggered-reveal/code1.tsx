// ❌ Chaotic: All elements animate simultaneously
const cardStyle = {
  animation: "fadeIn 0.3s ease-out",
};

function FeatureGrid({ features }: { features: string[] }) {
  return (
    <div className="grid">
      {features.map((feature) => (
        <div key={feature} style={cardStyle}>
          {feature}
        </div>
      ))}
    </div>
  );
}
