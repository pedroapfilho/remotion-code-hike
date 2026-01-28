// ❌ Wrong: Alert-based validation is disruptive and unhelpful
function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;

    if (!email.includes("@")) {
      alert("Invalid email address!"); // Blocks interaction
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
