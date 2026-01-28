// ❌ Flat: Single shadow lacks depth and dimension
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "8px",
        padding: "24px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
}
