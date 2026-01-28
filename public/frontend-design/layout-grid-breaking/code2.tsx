// ✅ Bold: Elements break out of the grid for impact
function Hero() {
  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Welcome</h1>
      <p>Your journey starts here.</p>
      <img
        src="/hero.jpg"
        style={{
          width: "calc(100% + 200px)",
          marginLeft: "-100px",
          marginTop: "-60px",
          position: "relative",
          zIndex: -1,
        }}
      />
    </section>
  );
}
