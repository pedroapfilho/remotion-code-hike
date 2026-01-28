// ❌ Boring: Basic hover lacks personality
function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        background: "#0070f3",
        color: "white",
        padding: "12px 24px",
        border: "none",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {children}
    </button>
  );
}
