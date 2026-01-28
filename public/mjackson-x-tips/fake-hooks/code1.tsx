// ❌ This is NOT a real hook - it doesn't use any hooks
function useRandomNumber() {
  return Math.random();
}

// Using the fake hook
function MyComponent() {
  const randomNum = useRandomNumber();

  return <div>{randomNum}</div>;
}
