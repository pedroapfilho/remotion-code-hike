// Narrow Effect Dependencies
// ✅ Right: Re-runs only when id changes

useEffect(() => {
  console.log(user.id);
}, [user.id]);
