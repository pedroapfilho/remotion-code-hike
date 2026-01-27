// Calculate Derived State During Rendering
// ✅ Right: No extra state or useEffect needed for values derived from props/state

function Form() {
  const [firstName, setFirstName] = useState('First')
  const [lastName, setLastName] = useState('Last')
  const fullName = firstName + ' ' + lastName

  return <p>{fullName}</p>
}