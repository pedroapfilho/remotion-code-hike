// ❌ Flat: Single shadow lacks depth and dimension
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      {children}
    </div>
  );
}
