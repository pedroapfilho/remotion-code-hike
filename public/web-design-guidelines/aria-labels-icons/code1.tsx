// ❌ Wrong: Icon-only buttons without labels are inaccessible
function Toolbar() {
  return (
    <div>
      <button onClick={handleSave}>
        <SaveIcon />
      </button>
      <button onClick={handleDelete}>
        <TrashIcon />
      </button>
    </div>
  );
}
