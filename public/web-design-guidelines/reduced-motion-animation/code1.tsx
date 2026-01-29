// ❌ Wrong: Ignoring motion preferences can cause discomfort
function FadeIn({ children }: { children: React.ReactNode }) {
  return <div className="animate-slide-in">{children}</div>;
}
