// ✅ MUST: Prefix event handlers with "handle"
const handleClick = () => setOpen(true);
const handleSubmit = () => save(data);
const handleDelete = () => remove(id);

return <button onClick={handleClick}>Open</button>;
