// ✅ Right: Use env() for safe area insets on notched devices
function BottomNav() {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "16px",
        paddingBottom: "calc(16px + env(safe-area-inset-bottom))",
        paddingLeft: "calc(16px + env(safe-area-inset-left))",
        paddingRight: "calc(16px + env(safe-area-inset-right))",
      }}
    >
      <NavItems />
    </nav>
  );
}
