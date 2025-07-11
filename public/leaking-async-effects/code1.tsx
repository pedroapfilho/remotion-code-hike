// ❌ Async effect leak problem
useEffect(() => {
  async function fetchData() {
    const response = await fetch("/api/data");
    const data = await response.json();

    // 🚨 Problem: This runs even if component unmounted!
    setData(data);
  }

  fetchData();
}, []);
