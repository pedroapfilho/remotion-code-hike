// ✅ MUST: Always return new objects/arrays
const handleAdd = (item: Item) => {
  setItems([...items, item]);
};

const handleUpdate = (id: string, name: string) => {
  setUsers(users.map((u) => (u.id === id ? { ...u, name } : u)));
};
