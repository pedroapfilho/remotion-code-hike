// ❌ Wrong: Boolean props multiply possible states exponentially

function Composer({ isThread, isDMThread, isEditing, isForwarding }: Props) {
  return (
    <form>
      <Input />
      {isDMThread ? (
        <AlsoSendToDMField />
      ) : isThread ? (
        <AlsoSendToChannelField />
      ) : null}
      {isEditing ? (
        <EditActions />
      ) : isForwarding ? (
        <ForwardActions />
      ) : (
        <DefaultActions />
      )}
    </form>
  );
}
