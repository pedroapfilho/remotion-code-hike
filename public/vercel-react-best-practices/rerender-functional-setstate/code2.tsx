// Use Functional setState Updates
// ✅ Right: Stable callbacks, no stale closures

function TodoList() {
  const [items, setItems] = useState(initialItems);

  // Stable callback, never recreated
  const addItems = useCallback((newItems: Item[]) => {
    setItems((curr) => [...curr, ...newItems]);
  }, []); // ✅ No dependencies needed

  // Always uses latest state, no stale closure risk
  const removeItem = useCallback((id: string) => {
    setItems((curr) => curr.filter((item) => item.id !== id));
  }, []); // ✅ Safe and stable

  return <ItemsEditor items={items} onAdd={addItems} onRemove={removeItem} />;
}
