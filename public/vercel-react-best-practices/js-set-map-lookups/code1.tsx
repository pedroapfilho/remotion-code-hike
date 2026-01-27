// Use Set/Map for O(1) Lookups
// ❌ Wrong: This approach has performance issues

const allowedIds = ['a', 'b', 'c', ...]
items.filter(item => allowedIds.includes(item.id))