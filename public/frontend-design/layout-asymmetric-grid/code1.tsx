// ❌ Predictable: Uniform grid lacks visual interest
function Gallery({ images }: { images: string[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
      }}
    >
      {images.map((src) => (
        <img key={src} src={src} style={{ width: "100%" }} />
      ))}
    </div>
  );
}
