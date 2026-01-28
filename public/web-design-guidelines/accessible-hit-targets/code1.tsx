// ❌ Wrong: Small hit targets are hard to tap on mobile
function IconButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "4px",
        width: "16px",
        height: "16px",
      }}
    >
      <CloseIcon size={16} />
    </button>
  );
}
