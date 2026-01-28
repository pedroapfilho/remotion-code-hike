// ❌ Wrong: State trapped inside component

function ForwardMessageComposer() {
  const [state, setState] = useState(initialState);
  return (
    <Composer.Frame>
      <Composer.Input />
    </Composer.Frame>
  );
}

function ForwardMessageDialog() {
  return (
    <Dialog>
      <ForwardMessageComposer />
      <MessagePreview /> {/* How does this access composer state? */}
      <ForwardButton /> {/* How does this call submit? */}
    </Dialog>
  );
}
