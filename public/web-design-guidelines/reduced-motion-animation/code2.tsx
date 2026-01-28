// ✅ Right: Respect prefers-reduced-motion for accessibility
const styles = `
  .fade-in {
    animation: fadeSlideIn 0.5s ease-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .fade-in {
      animation: fadeOnly 0.2s ease-out;
    }
  }
`;

function FadeIn({ children }: { children: React.ReactNode }) {
  return <div className="fade-in">{children}</div>;
}
