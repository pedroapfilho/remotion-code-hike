// ❌ Wrong: Missing autocomplete frustrates users
function CheckoutForm() {
  return (
    <form>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="email" placeholder="Email" />
      <input type="text" name="card" placeholder="Card number" />
    </form>
  );
}
