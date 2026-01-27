// ❌ Under-specifying deps problem
const [counter, setCounter] = useState(0);

useEffect(() => {
  const id = setInterval(() => {
    console.log(counter); // 🚨 Always logs 0!
  }, 1000);

  return () => clearInterval(id);
}, []); // Missing counter in deps array

// Counter updates but interval uses stale value
<button onClick={() => setCounter(counter + 1)}>Increment</button>;
