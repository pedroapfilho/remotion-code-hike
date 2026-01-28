// ❌ Cramped: Dense layouts feel overwhelming
function PricingCard() {
  return (
    <div style={{ padding: "16px", border: "1px solid #ddd" }}>
      <h3 style={{ margin: "0 0 8px" }}>Pro Plan</h3>
      <p style={{ margin: "0 0 8px" }}>$29/month</p>
      <ul style={{ margin: "0 0 8px", paddingLeft: "16px" }}>
        <li>Unlimited projects</li>
        <li>Priority support</li>
        <li>Advanced analytics</li>
      </ul>
      <button>Get Started</button>
    </div>
  );
}
