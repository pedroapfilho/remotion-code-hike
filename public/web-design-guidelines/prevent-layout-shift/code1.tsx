// ❌ Wrong: Images without dimensions cause layout shift
function Avatar({ src, name }: { src: string; name: string }) {
  return (
    <img
      src={src}
      alt={name}
    />
  );
}
