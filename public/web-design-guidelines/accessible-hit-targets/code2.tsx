// ✅ Right: Minimum 44px hit target for mobile, 24px for desktop
function IconButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="min-w-[44px] min-h-[44px] ...">
      <CloseIcon size={16} />
    </button>
  );
}
