// Extract Default Non-primitive Parameter Value from Memoized Component to Constant
// ✅ Right: Stable default value

const NOOP = () => {};

const UserAvatar = memo(function UserAvatar({ onClick = NOOP }: { onClick?: () => void }) {
  // ...
})

// Used without optional onClick
<UserAvatar />