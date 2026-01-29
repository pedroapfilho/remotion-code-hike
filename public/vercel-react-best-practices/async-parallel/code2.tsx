// Promise.all() for Independent Operations
// ✅ Right: Parallel execution, 1 round trip

const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments(),
]);
