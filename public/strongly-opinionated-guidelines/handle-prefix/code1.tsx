// ❌ NEVER: Inconsistent event handler naming
const click = () => setOpen(true);
const submitForm = () => save(data);
const onDelete = () => remove(id);

return <button onClick={click}>Open</button>;
