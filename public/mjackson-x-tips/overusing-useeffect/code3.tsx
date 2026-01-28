// ✅ When useEffect IS needed - for side effects
function MyComponent({ value }) {
  useEffect(() => {
    // Side effect: logging, analytics, etc.
    console.log("Value changed to:", value);
  }, [value]);

  useEffect(() => {
    // Side effect: API call, DOM manipulation, etc.
    document.title = `Current value: ${value}`;
  }, [value]);

  return <div>{value}</div>;
}

// useEffect is for side effects, not state synchronization
