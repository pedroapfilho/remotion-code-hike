// ❌ Plain: Basic borders add no character
function Quote({ text, author }: { text: string; author: string }) {
  return (
    <blockquote
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px 0",
      }}
    >
      <p>{text}</p>
      <cite>— {author}</cite>
    </blockquote>
  );
}
