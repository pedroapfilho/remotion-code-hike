// ✅ Right: Use env() for safe area insets on notched devices
function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 pb-[env(safe-area-inset-bottom)] ...">
      <NavItems />
    </nav>
  );
}
