// ❌ Wrong: Render props and boolean flags create rigid APIs

function Composer({ renderHeader, renderFooter }: Props) {
  return (
    <form>
      {renderHeader?.()}
      <Input />
      {renderFooter ? renderFooter() : <DefaultFooter />}
    </form>
  );
}

// Usage is awkward - callback signatures and boolean combos
<Composer
  renderHeader={() => <CustomHeader />}
  renderFooter={() => (
    <>
      <Emojis />
    </>
  )}
/>;
