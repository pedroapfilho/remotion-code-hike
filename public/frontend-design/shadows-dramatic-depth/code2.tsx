// ✅ Dimensional: Layered shadows create realistic depth
function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white rounded-2xl shadow-2xl">{children}</div>;
}
