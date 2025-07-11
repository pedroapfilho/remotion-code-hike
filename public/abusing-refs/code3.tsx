// ✅ When refs ARE appropriate: DOM manipulation
const inputRef = useRef<HTMLInputElement>(null);

const handleFocus = () => {
  // ✅ Refs are perfect for DOM operations!
  inputRef.current?.focus();
};

return (
  <div>
    <input ref={inputRef} type="text" />
    <button onClick={handleFocus}>Focus Input</button>
  </div>
);
