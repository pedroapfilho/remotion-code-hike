// ✅ Right: Use button for actions, add keyboard and role support
function ClickableCard({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} type="button" className="...">
      <h3>Click me</h3>
      <p>This card is clickable</p>
    </button>
  );
}
