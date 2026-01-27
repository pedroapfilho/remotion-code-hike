// Initialize App Once, Not Per Mount
// ❌ Wrong: This approach has performance issues

function Comp() {
  useEffect(() => {
    loadFromStorage()
    checkAuthToken()
  }, [])

  // ...
}