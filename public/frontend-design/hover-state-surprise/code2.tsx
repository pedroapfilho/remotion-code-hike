// ✅ Delightful: Hover states that surprise and engage
function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95">
      {children}
    </button>
  );
}
