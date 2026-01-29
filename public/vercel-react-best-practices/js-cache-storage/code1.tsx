// Cache Storage API Calls
// ❌ Wrong: This approach has performance issues

function getTheme() {
  return localStorage.getItem("theme") ?? "light";
}
// Called 10 times = 10 storage reads
