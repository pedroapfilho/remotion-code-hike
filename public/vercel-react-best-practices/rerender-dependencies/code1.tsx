// Narrow Effect Dependencies
// ❌ Wrong: This approach has performance issues

useEffect(() => {
  console.log(user.id)
}, [user])