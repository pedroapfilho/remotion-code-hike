// ✅ Spacious: Generous whitespace creates elegance
function PricingCard() {
  return (
    <div style={{ padding: "48px 40px" }}>
      <h3 style={{ margin: "0 0 16px", fontSize: "1.5rem" }}>Pro Plan</h3>
      <p style={{ margin: "0 0 32px", fontSize: "2.5rem" }}>
        $29<span style={{ fontSize: "1rem" }}>/month</span>
      </p>
      <ul style={{ margin: "0 0 40px", listStyle: "none", padding: 0 }}>
        <li style={{ padding: "12px 0" }}>Unlimited projects</li>
        <li style={{ padding: "12px 0" }}>Priority support</li>
        <li style={{ padding: "12px 0" }}>Advanced analytics</li>
      </ul>
      <button style={{ width: "100%", padding: "16px" }}>Get Started</button>
    </div>
  );
}
