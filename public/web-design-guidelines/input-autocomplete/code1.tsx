// ❌ Wrong: Missing autocomplete frustrates users
function CheckoutForm() {
  return (
    <form className="...">
      <input type="text" name="name" placeholder="Name" className="..." />
      <input type="text" name="email" placeholder="Email" className="..." />
      <input type="text" name="card" placeholder="Card number" className="..." />
    </form>
  );
}
