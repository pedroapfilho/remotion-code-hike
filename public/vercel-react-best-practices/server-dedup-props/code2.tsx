// Avoid Duplicate Serialization in RSC Props
// ✅ Right: Send data once, derive sorted version on client to reduce payload size

// RSC: send once
<ClientList usernames={usernames} />

// Client: transform there
'use client'
const sorted = useMemo(() => [...usernames].sort(), [usernames])