// ✅ Right: Use autocomplete with correct types
function CheckoutForm() {
  return (
    <form>
      <input
        type="text"
        name="name"
        autoComplete="name"
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Email"
      />
      <input
        type="text"
        name="card"
        autoComplete="cc-number"
        inputMode="numeric"
        placeholder="Card number"
      />
    </form>
  );
}
