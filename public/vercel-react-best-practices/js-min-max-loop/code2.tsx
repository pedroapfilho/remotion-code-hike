// Use Loop for Min/Max Instead of Sort
// ✅ Right: O(n) single pass instead of O(n log n) sort for min/max

function getOldestAndNewest(projects: Project[]) {
  const sorted = [...projects].sort((a, b) => a.updatedAt - b.updatedAt);
  return { oldest: sorted[0], newest: sorted[sorted.length - 1] };
}
