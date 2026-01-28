// ✅ Better: Just a regular utility function
function getRandomNumber() {
  return Math.random();
}

// Using the utility function
function MyComponent() {
  const randomNum = getRandomNumber();

  return <div>{randomNum}</div>;
}
