// ❌ This is NOT a real hook - it doesn't use any hooks
const useRandomNumber = () => {
  return Math.random();
};

// Using the fake hook
const MyComponent = () => {
  const randomNum = useRandomNumber();

  return <div>{randomNum}</div>;
};
