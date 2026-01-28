// ✅ Correct: Just use props directly
function MyComponent({ value }) {
  // No useState or useEffect needed!
  return <div>{value}</div>;
}

// React automatically re-renders when props change
// No need for manual state synchronization
