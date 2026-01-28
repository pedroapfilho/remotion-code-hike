// ✅ Right: Explicit variants - impossible states are impossible

function ThreadComposer({ channelId }: { channelId: string }) {
  return (
    <Composer.Frame>
      <Composer.Input />
      <AlsoSendToChannelField id={channelId} />
      <Composer.Submit />
    </Composer.Frame>
  );
}

function EditComposer() {
  return (
    <Composer.Frame>
      <Composer.Input />
      <Composer.CancelEdit />
    </Composer.Frame>
  );
}