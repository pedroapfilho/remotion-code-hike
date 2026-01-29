// ✅ MUST: Promise.allSettled handles partial failures
const results = await Promise.allSettled([
  fetchUsers(),
  fetchPosts(),
  fetchComments(),
]);

const users = results[0].status === "fulfilled" ? results[0].value : [];
