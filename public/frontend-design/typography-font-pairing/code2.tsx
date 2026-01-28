// ✅ Distinctive: Pair a bold display font with refined body text
const styles = {
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(2.5rem, 8vw, 5rem)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
  },
  body: {
    fontFamily: "'Source Serif Pro', Georgia, serif",
    fontSize: "1.125rem",
    lineHeight: 1.7,
    color: "var(--text-muted)",
  },
};

function Hero() {
  return (
    <section>
      <h1 style={styles.heading}>Craft Your Vision</h1>
      <p style={styles.body}>Where bold ideas meet refined execution.</p>
    </section>
  );
}
