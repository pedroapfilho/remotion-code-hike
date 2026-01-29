// ✅ Dynamic: CSS scroll-driven animations reveal on entry
const styles = `
  section {
    animation: reveal linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 30%;
  }
  @keyframes reveal {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

function Section({ title, content }: SectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}
