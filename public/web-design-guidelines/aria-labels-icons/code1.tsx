// ❌ Wrong: Icon-only buttons without labels are inaccessible
function Toolbar() {
  return (
    <div className="...">
      <button onClick={handleSave}>
        <SaveIcon />
      </button>
      <button onClick={handleDelete}>
        <TrashIcon />
      </button>
    </div>
  );
}
