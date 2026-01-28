// ✅ Right: Add aria-label for screen readers
function Toolbar() {
  return (
    <div role="toolbar" aria-label="Document actions">
      <button onClick={handleSave} aria-label="Save document">
        <SaveIcon aria-hidden="true" />
      </button>
      <button onClick={handleDelete} aria-label="Delete document">
        <TrashIcon aria-hidden="true" />
      </button>
    </div>
  );
}
