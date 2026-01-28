// ✅ Dynamic: Asymmetric grid creates visual hierarchy
function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-4">
      <img src={images[0]} className="row-span-2" />
      <img src={images[1]} />
      <img src={images[2]} />
      <img src={images[3]} className="col-span-2" />
    </div>
  );
}
