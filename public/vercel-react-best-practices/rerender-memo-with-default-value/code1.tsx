// Extract Default Non-primitive Parameter Value from Memoized Component to Constant
// ❌ Wrong: This approach has performance issues

const UserAvatar = memo(function UserAvatar({ onClick = () => {} }: { onClick?: () => void }) {
  // ...
})

// Used without optional onClick
<UserAvatar />