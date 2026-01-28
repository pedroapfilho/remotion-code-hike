// ❌ Wrong: Divs with onClick lack accessibility features
function ClickableCard({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick}>
      <h3>Click me</h3>
      <p>This card is clickable</p>
    </div>
  );
}
