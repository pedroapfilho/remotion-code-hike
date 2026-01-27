// Suppress Expected Hydration Mismatches
// ❌ Wrong: This approach has performance issues

function Timestamp() {
  return <span>{new Date().toLocaleString()}</span>
}