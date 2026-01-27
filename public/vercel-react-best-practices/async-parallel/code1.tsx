// Promise.all() for Independent Operations
// ❌ Wrong: This approach has performance issues

const user = await fetchUser()
const posts = await fetchPosts()
const comments = await fetchComments()