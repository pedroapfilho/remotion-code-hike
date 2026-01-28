// ❌ Generic: System fonts lack personality
const styles = {
  heading: {
    fontFamily: "Arial, sans-serif",
    fontSize: "32px",
    fontWeight: "bold",
  },
  body: {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
  },
};

function Hero() {
  return (
    <section>
      <h1 style={styles.heading}>Welcome to Our Platform</h1>
      <p style={styles.body}>Start building today.</p>
    </section>
  );
}
