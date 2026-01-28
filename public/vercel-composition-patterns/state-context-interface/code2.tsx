// ✅ Right: Generic interface - any provider can implement it

interface ComposerContextValue {
  state: { input: string; isSubmitting: boolean };
  actions: { update: (text: string) => void; submit: () => void };
}

const ComposerContext = createContext<ComposerContextValue | null>(null);

// UI consumes the interface - works with ANY provider
function ComposerInput() {
  const { state, actions } = use(ComposerContext);
  return <TextInput value={state.input} onChangeText={actions.update} />;
}

// Different providers implement the same interface:
// - ForwardMessageProvider: local useState
// - ChannelProvider: global Zustand
// ComposerInput works with ALL without modification
