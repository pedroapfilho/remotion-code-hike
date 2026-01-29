// ✅ MUST: Use arrow functions everywhere
const handleClick = () => {
  console.log("clicked");
};

const fetchUser = (id: string) => {
  return fetch(`/api/users/${id}`);
};
