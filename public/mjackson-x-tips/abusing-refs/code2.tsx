// ✅ Correct: Using useState for state that affects rendering
const [count, setCount] = useState(0);

const handleClick = () => {
  // ✅ This will trigger a re-render!
  setCount((count) => count + 1);
};

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={handleClick}>Increment</button>
  </div>
);
