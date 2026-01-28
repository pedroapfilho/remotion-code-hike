// ✅ Right: Provider is the only place that knows implementation

function ChannelProvider({ channelId, children }: Props) {
  const { state, update, submit } = useGlobalChannel(channelId);
  return (
    <Composer.Provider state={state} actions={{ update, submit }}>
      {children}
    </Composer.Provider>
  );
}

// UI only knows the context interface - not the implementation
function ChannelComposer() {
  return (
    <Composer.Frame>
      <Composer.Input />
      <Composer.Submit />
    </Composer.Frame>
  );
}
