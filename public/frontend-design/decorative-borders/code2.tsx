// ✅ Expressive: Decorative borders create visual interest
function Quote({ text, author }: { text: string; author: string }) {
  return (
    <blockquote className="border-l-4 border-neutral-900 bg-gradient-to-r from-neutral-100 to-transparent relative">
      <span className="text-6xl opacity-20 absolute top-2 left-4">"</span>
      <p className="text-xl italic">{text}</p>
      <cite className="text-neutral-500">— {author}</cite>
    </blockquote>
  );
}
