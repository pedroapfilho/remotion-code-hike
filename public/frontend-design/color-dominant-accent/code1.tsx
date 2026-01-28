// ❌ Timid: Evenly distributed colors lack hierarchy
const Card = () => (
  <div
    style={{
      background: "#f0f0f0",
      border: "1px solid #cccccc",
      padding: "20px",
    }}
  >
    <h3 style={{ color: "#666666" }}>Feature Title</h3>
    <p style={{ color: "#888888" }}>Description text here.</p>
    <button style={{ background: "#999999", color: "white" }}>
      Learn More
    </button>
  </div>
);
