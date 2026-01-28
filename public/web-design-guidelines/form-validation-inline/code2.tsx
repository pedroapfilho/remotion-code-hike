// ✅ Right: Show inline errors next to the field
function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="...">
      <input
        name="email"
        type="email"
        aria-invalid={!!error}
        className="aria-[invalid=true]:border-red-500 ..."
      />
      {error && <span role="alert" className="text-red-500">{error}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
