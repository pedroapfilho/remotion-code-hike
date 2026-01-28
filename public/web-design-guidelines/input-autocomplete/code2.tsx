// ✅ Right: Use autocomplete with correct types
function CheckoutForm() {
  return (
    <form className="...">
      <input
        type="text"
        name="name"
        autoComplete="name"
        placeholder="Name"
        className="..."
      />
      <input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Email"
        className="..."
      />
      <input
        type="text"
        name="card"
        autoComplete="cc-number"
        inputMode="numeric"
        placeholder="Card number"
        className="..."
      />
    </form>
  );
}
