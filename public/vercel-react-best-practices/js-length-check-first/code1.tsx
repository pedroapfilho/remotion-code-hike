// Early Length Check for Array Comparisons
// ❌ Wrong: This approach has performance issues

function hasChanges(current: string[], original: string[]) {
  // Always sorts and joins, even when lengths differ
  return current.sort().join() !== original.sort().join();
}
