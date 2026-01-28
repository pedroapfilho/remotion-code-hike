// ❌ Predictable: Uniform grid lacks visual interest
function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((src) => (
        <img key={src} src={src} />
      ))}
    </div>
  );
}
