// ✅ Right: Delay spinner and show minimum time to avoid flicker
function LoadingButton({ isLoading, children, onClick }: Props) {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setShowSpinner(true), 200);
      return () => clearTimeout(timer);
    }
    // Keep spinner visible for minimum 300ms
    const timer = setTimeout(() => setShowSpinner(false), 300);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <button onClick={onClick} disabled={isLoading}>
      {showSpinner ? <Spinner /> : children}
    </button>
  );
}
