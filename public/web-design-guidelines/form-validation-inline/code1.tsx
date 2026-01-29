// ❌ Wrong: Alert-based validation is disruptive and unhelpful
function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;

    if (!email.includes("@")) {
      alert("Invalid email address!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="...">
      <input name="email" type="text" className="..." />
      <button type="submit" className="...">
        Submit
      </button>
    </form>
  );
}
