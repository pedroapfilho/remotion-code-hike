// ✅ Right: Reserve space with explicit dimensions
function Avatar({ src, name }: { src: string; name: string }) {
  return (
    <img
      src={src}
      alt={name}
      width={48}
      height={48}
      style={{
        aspectRatio: "1 / 1",
        objectFit: "cover",
      }}
    />
  );
}
