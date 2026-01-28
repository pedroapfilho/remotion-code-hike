// ❌ Hardcoded: Colors scattered throughout components
function Navbar() {
  return (
    <nav className="bg-neutral-900">
      <a className="text-neutral-100">Home</a>
      <a className="text-white">About</a>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-800">
      <a className="text-neutral-200">Contact</a>
    </footer>
  );
}
