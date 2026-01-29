// ✅ MUST: Extract conditions into named variables
const isAdult = user.age >= 18;
const isVerified = user.verified && !user.banned;
const canWrite = user.role === "admin" || user.permissions.includes("write");

if (isAdult && isVerified && canWrite) {
  allowAccess();
}
