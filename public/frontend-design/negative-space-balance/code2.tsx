// ✅ Spacious: Generous whitespace creates elegance
function PricingCard() {
  return (
    <div className="py-12 px-10">
      <h3 className="mb-4 text-2xl">Pro Plan</h3>
      <p className="mb-8 text-4xl">
        $29<span className="text-base">/month</span>
      </p>
      <ul className="mb-10 space-y-3">
        <li>Unlimited projects</li>
        <li>Priority support</li>
      </ul>
      <button className="w-full py-4">Get Started</button>
    </div>
  );
}
