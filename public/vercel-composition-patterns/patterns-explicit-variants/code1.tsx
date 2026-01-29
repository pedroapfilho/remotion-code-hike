// ❌ Wrong: Boolean props - what does this actually render?

<Composer
  isThread
  isEditing={false}
  channelId="abc"
  showAttachments
  showFormatting={false}
/>;

// To understand the output, you must:
// 1. Read the component implementation
// 2. Trace all conditional branches
// 3. Mentally evaluate the boolean combinations
// 4. Hope there are no impossible state bugs
