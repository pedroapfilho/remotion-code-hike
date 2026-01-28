// ❌ Wrong: Render props and boolean flags create rigid APIs

function Composer({ renderHeader, renderFooter, showAttachments }: Props) {
  return (
    <form>
      {renderHeader?.()}
      <Input />
      {showAttachments && <Attachments />}
      {renderFooter ? renderFooter() : <DefaultFooter />}
    </form>
  );
}

// Usage is awkward - callback signatures and boolean combos
<Composer
  renderHeader={() => <CustomHeader />}
  renderFooter={() => <><Formatting /><Emojis /></>}
  showAttachments={true}
/>
