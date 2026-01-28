// ✅ Right: Show inline errors next to the field
function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      form.email.focus(); // Focus the first error field
      return;
    }
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" aria-invalid={!!error} />
      {error && <span role="alert">{error}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
