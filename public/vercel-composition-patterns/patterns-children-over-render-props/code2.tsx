// ✅ Right: Children compose naturally with standard JSX

function ComposerFrame({ children }: { children: React.ReactNode }) {
  return <form>{children}</form>;
}

// Usage is natural JSX - add, remove, reorder freely
<Composer.Frame>
  <CustomHeader />
  <Composer.Input />
  <Composer.Footer>
    <Composer.Formatting />
    <SubmitButton />
  </Composer.Footer>
</Composer.Frame>;

// Static structure -> children
// Dynamic data injection -> render props
