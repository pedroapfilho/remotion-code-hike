// Suppress Expected Hydration Mismatches
// ✅ Right: Suppress expected mismatch only

function Timestamp() {
  return <span suppressHydrationWarning>{new Date().toLocaleString()}</span>;
}
