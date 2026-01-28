// ❌ Wrong: Removing focus outline breaks keyboard navigation
function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        outline: "none", // Removes all focus indicators
      }}
    >
      {children}
    </button>
  );
}
