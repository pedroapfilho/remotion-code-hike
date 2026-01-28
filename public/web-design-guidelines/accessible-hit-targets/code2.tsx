// ✅ Right: Minimum 44px hit target for mobile, 24px for desktop
function IconButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "14px",
        minWidth: "44px",
        minHeight: "44px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <CloseIcon size={16} />
    </button>
  );
}
