// Use toSorted() Instead of sort() for Immutability
// ✅ Right: toSorted() preserves original array, avoids mutation bugs

function UserList({ users }: { users: User[] }) {
  // Creates new sorted array, original unchanged
  const sorted = useMemo(
    () => users.toSorted((a, b) => a.name.localeCompare(b.name)),
    [users]
  )
  return <div>{sorted.map(renderUser)}</div>
}