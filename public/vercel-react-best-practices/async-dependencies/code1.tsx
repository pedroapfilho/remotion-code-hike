// Dependency-Based Parallelization
// ❌ Wrong: This approach has performance issues

const [user, config] = await Promise.all([fetchUser(), fetchConfig()]);
const profile = await fetchProfile(user.id);
