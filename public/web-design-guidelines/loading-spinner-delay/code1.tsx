// ❌ Wrong: Immediate spinner causes flicker on fast responses
function LoadingButton({ isLoading, children, onClick }: Props) {
  return (
    <button onClick={onClick} disabled={isLoading}>
      {isLoading ? <Spinner /> : children}
    </button>
  );
}
