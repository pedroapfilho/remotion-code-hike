// ✅ Systematic: CSS variables create cohesive theming
const theme = `
  :root {
    --bg-primary: #1a1a2e;
    --bg-surface: #2a2a4e;
    --text-primary: #ffffff;
    --text-muted: #888888;
    --accent: #e94560;
  }
`;

function Navbar() {
  return (
    <nav style={{ background: "var(--bg-primary)" }}>
      <a style={{ color: "var(--accent)" }}>Home</a>
      <a style={{ color: "var(--text-primary)" }}>About</a>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--bg-primary)" }}>
      <a style={{ color: "var(--accent)" }}>Contact</a>
    </footer>
  );
}
