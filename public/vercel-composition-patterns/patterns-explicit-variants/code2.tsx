// ✅ Right: Explicit variants are self-documenting

<ThreadComposer channelId="abc" />
// or
<EditMessageComposer messageId="xyz" />
// or
<ForwardMessageComposer />

// Each variant explicitly declares what it renders:
function ThreadComposer({ channelId }: { channelId: string }) {
  return (
    <ThreadProvider channelId={channelId}>
      <Composer.Input />
      <AlsoSendToChannelField channelId={channelId} />
      <Composer.Submit />
    </ThreadProvider>
  );
}

// No boolean combinations - impossible states are impossible
