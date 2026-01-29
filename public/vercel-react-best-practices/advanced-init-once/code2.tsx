// Initialize App Once, Not Per Mount
// ✅ Right: Module flag prevents duplicate initialization on Strict Mode double-mount

let didInit = false;

function Comp() {
  useEffect(() => {
    if (didInit) return;
    didInit = true;
    loadFromStorage();
    checkAuthToken();
  }, []);

  // ...
}
