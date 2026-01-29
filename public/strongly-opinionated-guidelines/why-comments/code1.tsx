// ❌ NEVER: Comments that duplicate the code
// Loop through users and filter active ones
const activeUsers = users.filter((u) => u.isActive);

// Set loading to true
setLoading(true);

// Call the API
const data = await fetchData();
