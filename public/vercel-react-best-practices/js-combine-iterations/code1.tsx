// Combine Multiple Array Iterations
// ❌ Wrong: This approach has performance issues

const admins = users.filter(u => u.isAdmin)
const testers = users.filter(u => u.isTester)
const inactive = users.filter(u => !u.isActive)