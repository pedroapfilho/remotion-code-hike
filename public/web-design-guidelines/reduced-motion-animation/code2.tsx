// ✅ Right: Respect prefers-reduced-motion for accessibility
function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-slide-in motion-reduce:animate-fade-in">
      {children}
    </div>
  );
}
