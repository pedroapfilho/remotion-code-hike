// ✅ Bold: Dominant base with sharp accent creates focus
const Card = () => (
  <div
    style={{
      background: "var(--surface)",
      borderLeft: "4px solid var(--accent)",
      padding: "2rem",
    }}
  >
    <h3 style={{ color: "var(--text-primary)" }}>Feature Title</h3>
    <p style={{ color: "var(--text-muted)" }}>Description text here.</p>
    <button
      style={{
        background: "var(--accent)",
        color: "var(--accent-contrast)",
        border: "none",
        padding: "0.75rem 1.5rem",
      }}
    >
      Learn More
    </button>
  </div>
);
