// ❌ Hardcoded: Colors scattered throughout components
function Navbar() {
  return (
    <nav style={{ background: "#1a1a2e", borderBottom: "1px solid #2a2a4e" }}>
      <a style={{ color: "#e94560" }}>Home</a>
      <a style={{ color: "#ffffff" }}>About</a>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#1a1a2e", color: "#888" }}>
      <p>© 2024</p>
      <a style={{ color: "#e94560" }}>Contact</a>
    </footer>
  );
}
