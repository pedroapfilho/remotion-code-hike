// ✅ MUST: Explicitly list transition properties
function Card() {
  return (
    <div className="transition-transform transition-shadow hover:scale-105 hover:shadow-lg">
      <p>Content here</p>
    </div>
  );
}
