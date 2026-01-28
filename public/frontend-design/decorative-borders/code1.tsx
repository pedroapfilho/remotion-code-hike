// ❌ Plain: Basic borders add no character
function Quote({ text, author }: { text: string; author: string }) {
  return (
    <blockquote className="border border-neutral-300">
      <p>{text}</p>
      <cite>— {author}</cite>
    </blockquote>
  );
}
