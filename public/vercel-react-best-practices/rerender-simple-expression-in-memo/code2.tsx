// Do not wrap a simple expression with a primitive result type in useMemo
// ✅ Right: Simple boolean check is faster than useMemo overhead

function Header({ user, notifications }: Props) {
  const isLoading = user.isLoading || notifications.isLoading;

  if (isLoading) return <Skeleton />;
  // return some markup
}
