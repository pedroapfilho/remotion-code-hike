// ❌ Wrong: Missing autocomplete frustrates users
function CheckoutForm() {
  return (
    <form>
      <input type="text" name="name" />
      <input type="text" name="email" />
      <input type="text" name="card" />
    </form>
  );
}
