// ✅ Dimensional: Layered shadows create realistic depth
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "32px",
        boxShadow: `
          0 1px 2px rgba(0,0,0,0.07),
          0 2px 4px rgba(0,0,0,0.07),
          0 4px 8px rgba(0,0,0,0.07),
          0 8px 16px rgba(0,0,0,0.07),
          0 16px 32px rgba(0,0,0,0.07)
        `,
      }}
    >
      {children}
    </div>
  );
}
