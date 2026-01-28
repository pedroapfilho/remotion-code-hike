// ✅ Right: Use :focus-visible for keyboard-only focus rings
const buttonStyles = `
  .btn:focus {
    outline: none;
  }
  .btn:focus-visible {
    outline: 2px solid #0070f3;
    outline-offset: 2px;
  }
`;

function Button({ children }: { children: React.ReactNode }) {
  return <button className="btn">{children}</button>;
}
