// Use Functional setState Updates
// ❌ Wrong: This approach has performance issues

function TodoList() {
  const [items, setItems] = useState(initialItems);

  // Callback must depend on items, recreated on every items change
  const addItems = useCallback(
    (newItems: Item[]) => {
      setItems([...items, ...newItems]);
    },
    [items],
  ); // ❌ items dependency causes recreations

  // Risk of stale closure if dependency is forgotten
  const removeItem = useCallback((id: string) => {
    setItems(items.filter((item) => item.id !== id));
  }, []); // ❌ Missing items dependency - will use stale items!

  return <ItemsEditor items={items} onAdd={addItems} onRemove={removeItem} />;
}
