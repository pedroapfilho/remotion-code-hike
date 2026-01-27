import { useState } from "react";

// ✅ This IS a real hook - it uses useState
const useRandomNumber = () => {
  const [randomNum, setRandomNum] = useState(() => Math.random());

  const regenerate = () => setRandomNum(Math.random());

  return { randomNum, regenerate };
};

// Using the real hook
export const MyComponent = () => {
  const { randomNum, regenerate } = useRandomNumber();

  return (
    <div>
      <p>{randomNum}</p>
      <button onClick={regenerate}>New Random</button>
    </div>
  );
};
