// ❌ Wrong: Tightly coupled to specific hook

function ComposerInput() {
  // Directly imports a specific hook - tight coupling
  const { input, setInput } = useChannelComposerState();

  return <TextInput value={input} onChangeText={setInput} />;
}

// Problems:
// - Can't reuse ComposerInput with different state sources
// - Can't test without mocking the specific hook
// - Changing state management requires modifying this component
