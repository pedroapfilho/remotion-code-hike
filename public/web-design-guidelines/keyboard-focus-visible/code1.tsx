// ❌ Wrong: Removing focus outline breaks keyboard navigation
function Button({ children }: { children: React.ReactNode }) {
  return <button className="outline-none">{children}</button>;
}
