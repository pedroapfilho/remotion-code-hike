// ✅ Dynamic: Asymmetric grid creates visual hierarchy
function Gallery({ images }: { images: string[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "1rem",
      }}
    >
      <img src={images[0]} style={{ gridRow: "span 2" }} />
      <img src={images[1]} />
      <img src={images[2]} />
      <img src={images[3]} style={{ gridColumn: "span 2" }} />
    </div>
  );
}
