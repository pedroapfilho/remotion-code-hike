// Use Set/Map for O(1) Lookups
// ✅ Right: O(1) Set.has() instead of O(n) array.includes()

const allowedIds = new Set(['a', 'b', 'c', ...])
items.filter(item => allowedIds.has(item.id))