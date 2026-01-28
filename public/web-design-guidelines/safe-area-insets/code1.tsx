// ❌ Wrong: Fixed positioning ignores device safe areas
function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 ...">
      <NavItems />
    </nav>
  );
}
