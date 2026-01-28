// ❌ Wrong: Fixed positioning ignores device safe areas
function BottomNav() {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "16px",
      }}
    >
      <NavItems />
    </nav>
  );
}
