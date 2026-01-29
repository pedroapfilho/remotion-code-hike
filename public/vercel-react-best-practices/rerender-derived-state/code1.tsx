// Subscribe to Derived State
// ❌ Wrong: This approach has performance issues

function Sidebar() {
  const width = useWindowWidth(); // updates continuously
  const isMobile = width < 768;
  return <nav className={isMobile ? "mobile" : "desktop"} />;
}
