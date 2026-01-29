// ❌ NEVER: Function expressions are inconsistent
function handleClick() {
  console.log("clicked");
}

function fetchUser(id: string) {
  return fetch(`/api/users/${id}`);
}
