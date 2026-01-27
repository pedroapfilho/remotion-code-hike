// ✅ Better: Just a regular utility function
const getRandomNumber = () => {
  return Math.random();
};

// Using the utility function
const MyComponent = () => {
  const randomNum = getRandomNumber();

  return <div>{randomNum}</div>;
};
