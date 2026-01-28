// ✅ Delightful: Hover states that surprise and engage
const buttonStyles = `
  .btn {
    background: var(--accent);
    color: white;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -10px var(--accent);
  }
  .btn:active {
    transform: translateY(0) scale(0.98);
  }
`;

function Button({ children }: { children: React.ReactNode }) {
  return <button className="btn">{children}</button>;
}
