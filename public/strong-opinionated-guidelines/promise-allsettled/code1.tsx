// ❌ NEVER: Promise.all fails fast on any rejection
const [users, posts, comments] = await Promise.all([
  fetchUsers(),
  fetchPosts(),
  fetchComments(),
]);
