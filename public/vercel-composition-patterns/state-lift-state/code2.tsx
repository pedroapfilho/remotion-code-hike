// ✅ Right: Lift state to provider - siblings can access it

function ForwardMessageProvider({ children }: Props) {
  const [state, setState] = useState(initialState);
  return (
    <Composer.Provider state={state} actions={{ update: setState }}>
      {children}
    </Composer.Provider>
  );
}

function ForwardMessageDialog() {
  return (
    <ForwardMessageProvider>
      <ForwardMessageComposer />
      <MessagePreview /> {/* Reads state from context */}
      <ForwardButton /> {/* Calls submit from context */}
    </ForwardMessageProvider>
  );
}
