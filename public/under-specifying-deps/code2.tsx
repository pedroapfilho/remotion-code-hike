// ✅ Solution: Adding missing dependency
const [counter, setCounter] = useState(0);

useEffect(() => {
  const id = setInterval(() => {
    console.log(counter); // ✅ Now logs current value!
  }, 1000);

  return () => clearInterval(id);
}, [counter]); // Added counter to deps array

// Counter updates and interval uses fresh value
<button onClick={() => setCounter(counter + 1)}>Increment</button>;
