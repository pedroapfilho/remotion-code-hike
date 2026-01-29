// ❌ Wrong: Render props create awkward callback-based APIs

function Composer({ renderHeader, renderFooter }: Props) {
  return (
    <form>
      {renderHeader?.()}
      <Input />
      {renderFooter ? renderFooter() : <DefaultFooter />}
    </form>
  );
}

// Usage requires understanding callback signatures
<Composer
  renderHeader={() => <CustomHeader />}
  renderFooter={() => (
    <>
      <Formatting />
      <Emojis />
    </>
  )}
/>;

// Can't easily reorder or add elements
