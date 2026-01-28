// ❌ Static: Content appears without regard to scroll position
function Section({ title, content }: SectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}
