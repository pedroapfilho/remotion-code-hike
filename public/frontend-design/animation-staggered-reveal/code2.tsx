// ✅ Orchestrated: Staggered delays create visual rhythm
function FeatureGrid({ features }: { features: string[] }) {
  return (
    <div className="grid">
      {features.map((feature, i) => (
        <div
          key={feature}
          style={{
            animation: "slideUp 0.6s ease-out both",
            animationDelay: `${i * 100}ms`,
          }}
        >
          {feature}
        </div>
      ))}
    </div>
  );
}

// @keyframes slideUp {
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// }
