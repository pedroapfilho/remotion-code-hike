// ❌ Wrong: Small hit targets are hard to tap on mobile
function IconButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="w-4 h-4">
      <CloseIcon size={16} />
    </button>
  );
}
