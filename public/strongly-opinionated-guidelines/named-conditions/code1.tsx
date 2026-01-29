// ❌ NEVER: Complex conditionals overload working memory
if (
  user.age >= 18 &&
  user.verified &&
  !user.banned &&
  (user.role === "admin" || user.permissions.includes("write"))
) {
  allowAccess();
}
