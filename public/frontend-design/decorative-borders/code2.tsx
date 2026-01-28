// ✅ Expressive: Decorative borders create visual interest
function Quote({ text, author }: { text: string; author: string }) {
  return (
    <blockquote
      style={{
        borderLeft: "4px solid var(--accent)",
        borderImage: "linear-gradient(180deg, var(--accent), transparent) 1",
        padding: "32px 40px",
        margin: "48px 0",
        background: "linear-gradient(90deg, var(--accent-fade), transparent)",
        position: "relative",
      }}
    >
      <span style={{ fontSize: "4rem", opacity: 0.2 }}>"</span>
      <p style={{ fontSize: "1.25rem", fontStyle: "italic" }}>{text}</p>
      <cite style={{ color: "var(--text-muted)" }}>— {author}</cite>
    </blockquote>
  );
}
