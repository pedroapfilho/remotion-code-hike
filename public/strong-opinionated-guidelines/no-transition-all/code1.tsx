// ❌ NEVER: transition-all animates unintended properties
function Card() {
  return (
    <div className="transition-all hover:scale-105 hover:shadow-lg">
      <p>Content here</p>
    </div>
  );
}
