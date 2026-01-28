// ❌ Boring: Basic hover lacks personality
function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {children}
    </button>
  );
}
