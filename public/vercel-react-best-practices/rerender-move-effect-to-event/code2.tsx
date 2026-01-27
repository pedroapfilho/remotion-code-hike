// Put Interaction Logic in Event Handlers
// ✅ Right: No useEffect needed, logic runs only when user clicks

function Form() {
  const theme = useContext(ThemeContext)

  function handleSubmit() {
    post('/api/register')
    showToast('Registered', theme)
  }

  return <button onClick={handleSubmit}>Submit</button>
}