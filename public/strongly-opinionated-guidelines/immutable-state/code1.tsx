// ❌ NEVER: Mutating state breaks React's change detection
const handleAdd = (item: Item) => {
  items.push(item);
  setItems(items);
};

const handleUpdate = (id: string, name: string) => {
  const user = users.find((u) => u.id === id);
  user.name = name;
  setUsers(users);
};
