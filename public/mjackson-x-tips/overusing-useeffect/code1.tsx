// ❌ Overusing useEffect - unnecessary effect
const [value, setValue] = useState(props.value);

useEffect(() => {
  setValue(props.value);
}, [props.value]);

// 🚨 Problem: This useEffect is completely useless!
// React already re-renders when props change
