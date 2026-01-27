// Use SWR for Automatic Deduplication
// ❌ Wrong: This approach has performance issues

function UserList() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(setUsers)
  }, [])
}