// ✅ Rich: Layered textures create atmosphere and depth
function Hero() {
  return (
    <section
      style={{
        background: `
          radial-gradient(circle at 20% 50%, #2a1a4a 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, #1a3a4a 0%, transparent 40%),
          linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)
        `,
        padding: "80px 40px",
        position: "relative",
      }}
    >
      <div style={{ /* noise overlay via pseudo-element */ }} />
      <h1 style={{ color: "white", position: "relative" }}>
        Build Something Great
      </h1>
    </section>
  );
}
