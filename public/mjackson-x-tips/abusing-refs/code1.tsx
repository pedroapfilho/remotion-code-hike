// ❌ Abusing refs for state-like behavior
const countRef = useRef(0);

function handleClick() {
  // 🚨 Problem: This won't trigger a re-render!
  countRef.current++;
}

return (
  <div>
    <p>Count: {countRef.current}</p>
    <button onClick={handleClick}>Increment</button>
  </div>
);
