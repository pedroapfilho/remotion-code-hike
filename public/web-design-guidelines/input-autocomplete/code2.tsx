// ✅ Right: Use autocomplete with correct types
function CheckoutForm() {
  return (
    <form>
      <input type="text" name="name" autoComplete="name" />
      <input type="email" name="email" autoComplete="email" />
      <input type="text" name="card" autoComplete="cc-number" inputMode="numeric" />
    </form>
  );
}
