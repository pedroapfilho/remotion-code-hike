import { useState } from "react";
// ✅ This IS a real hook - it uses useState
function useRandomNumber() {
  const [randomNum, setRandomNum] = useState(() => Math.random());
  function regenerate() {
    setRandomNum(Math.random());
  }
  return { randomNum, regenerate };
}

// Using the real hook
export function MyComponent() {
  const { randomNum, regenerate } = useRandomNumber();
  return (
    <div>
      <p>{randomNum}</p>
      <button onClick={regenerate}>New Random</button>
    </div>
  );
}
