// ✅ MUST: Comments explain WHY, not WHAT
// Inactive users can't receive notifications per GDPR compliance
const activeUsers = users.filter((u) => u.isActive);

// Show loading before fetch to prevent double-clicks
setLoading(true);

const data = await fetchData();
