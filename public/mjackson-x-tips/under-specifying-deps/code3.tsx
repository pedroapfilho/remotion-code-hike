// ✅ Alternative: Using functional updates to avoid frequent re-runs
const [counter, setCounter] = useState(0);

useEffect(() => {
  const id = setInterval(() => {
    setCounter((counter) => {
      console.log(counter); // ✅ Always logs current value!
      return counter; // No actual update needed
    });
  }, 1000);

  return () => clearInterval(id);
}, []); // Empty deps - effect runs only once

// Counter updates but interval doesn't need to re-run
<button onClick={() => setCounter(counter + 1)}>Increment</button>;
