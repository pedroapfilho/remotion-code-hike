// Subscribe to Derived State
// ✅ Right: Re-renders only when boolean changes

function Sidebar() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return <nav className={isMobile ? "mobile" : "desktop"} />;
}
