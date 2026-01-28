// ✅ Right: Compound components with shared context

const ComposerContext = createContext<ComposerContextValue | null>(null);

function ComposerInput() {
  const { state, actions } = use(ComposerContext);
  return <TextInput value={state.input} onChangeText={actions.update} />;
}

function ComposerSubmit() {
  const { actions } = use(ComposerContext);
  return <Button onPress={actions.submit}>Send</Button>;
}

// Usage: compose exactly what you need
<Composer.Provider state={state} actions={actions}>
  <Composer.Input />
  <Composer.Submit />
</Composer.Provider>