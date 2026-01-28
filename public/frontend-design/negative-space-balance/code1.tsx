// ❌ Cramped: Dense layouts feel overwhelming
function PricingCard() {
  return (
    <div className="p-4">
      <h3 className="mb-2">Pro Plan</h3>
      <p className="mb-2">$29/month</p>
      <ul className="mb-2">
        <li>Unlimited projects</li>
        <li>Priority support</li>
      </ul>
      <button>Get Started</button>
    </div>
  );
}
