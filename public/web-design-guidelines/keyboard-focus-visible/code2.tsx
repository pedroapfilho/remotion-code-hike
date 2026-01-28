// ✅ Right: Use :focus-visible for keyboard-only focus rings
function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="... focus:outline-none focus-visible:outline-2 focus-visible:outline-neutral-900">
      {children}
    </button>
  );
}
