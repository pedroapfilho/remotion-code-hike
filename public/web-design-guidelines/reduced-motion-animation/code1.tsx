// ❌ Wrong: Ignoring motion preferences can cause discomfort
function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        animation: "fadeSlideIn 0.5s ease-out",
      }}
    >
      {children}
    </div>
  );
}
