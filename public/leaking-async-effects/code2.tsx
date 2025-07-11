// ✅ Solution: Using AbortController
useEffect(() => {
  const abortController = new AbortController();

  async function fetchData() {
    const response = await fetch("/api/data", {
      signal: abortController.signal,
    });
    const data = await response.json();

    // ✅ Only update if not aborted
    if (!abortController.signal.aborted) {
      setData(data);
    }
  }

  fetchData();

  // 🧹 Cleanup: abort on unmount
  return () => {
    abortController.abort();
  };
}, []);
