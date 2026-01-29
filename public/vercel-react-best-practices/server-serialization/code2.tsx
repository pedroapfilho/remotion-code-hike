// Minimize Serialization at RSC Boundaries
// ✅ Right: Serializes only 1 field

async function Page() {
  const user = await fetchUser();
  return <Profile name={user.name} />;
}

("use client");
function Profile({ name }: { name: string }) {
  return <div>{name}</div>;
}
