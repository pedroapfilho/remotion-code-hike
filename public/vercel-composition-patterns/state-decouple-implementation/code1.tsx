// ❌ Wrong: UI component knows about state implementation

function ChannelComposer({ channelId }: { channelId: string }) {
  // UI component directly imports specific hooks - tight coupling
  const state = useGlobalChannelState(channelId);
  const { submit, updateInput } = useChannelSync(channelId);

  return (
    <Composer.Frame>
      <Composer.Input value={state.input} onChange={updateInput} />
      <Composer.Submit onPress={submit} />
    </Composer.Frame>
  );
}

// Problem: To change state management (useState -> Zustand)
// you must modify EVERY UI component that uses it
