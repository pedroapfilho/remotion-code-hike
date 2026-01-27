// Use SWR for Automatic Deduplication
// ✅ Right: Multiple instances share one request

import useSWR from 'swr'

function UserList() {
  const { data: users } = useSWR('/api/users', fetcher)
}