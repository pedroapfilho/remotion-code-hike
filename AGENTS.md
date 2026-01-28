# Code Examples Creation Guide

This document provides step-by-step instructions for creating code examples in this Remotion code visualization project.

## Project Structure

```
public/
├── {category-name}/           # Category folder (e.g., "vercel-react-best-practices")
│   ├── source.txt             # REQUIRED: URL reference for the source material
│   └── {example-name}/        # Example folder (kebab-case)
│       ├── code1.tsx          # First code block (typically the "wrong" way)
│       ├── code2.tsx          # Second code block (typically the "right" way)
│       ├── code3.tsx          # Optional: Additional code blocks
│       └── metadata.txt       # Description of the example
```

## How Auto-Discovery Works

The system automatically discovers examples by scanning `public/` for this structure:
- `{category}/{example}/code*.tsx` files
- Files must be named `code1.tsx`, `code2.tsx`, `code3.tsx`, etc.
- The numeric suffix determines the display order

---

## Step 1: Create the Category Folder with source.txt

Every category **must** have a `source.txt` file that documents where the examples came from. This is critical for attribution and reference.

1. Create a **category folder** in `public/` using kebab-case:
   ```
   public/my-category-name/
   ```

2. Create a `source.txt` file in the category folder:
   ```
   public/my-category-name/source.txt
   ```

3. Add the source URL (one line, no trailing content):
   ```
   https://example.com/original-source
   ```

### source.txt Examples

**From a Twitter/X post:**
```
https://x.com/mjackson/status/1932673739952726220
```

**From GitHub documentation:**
```
https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices/rules
```

**From a blog post:**
```
https://kentcdodds.com/blog/application-state-management-with-react
```

**From official docs:**
```
https://react.dev/learn/choosing-the-state-structure
```

---

## Step 2: Create Example Folders

Create **example folders** inside the category using kebab-case:
```
public/my-category-name/my-example-name/
```

---

## Step 3: Create Code Files

### File Naming Convention
- Use `code1.tsx`, `code2.tsx`, `code3.tsx`, etc.
- Files are displayed in numeric order (code1 → code2 → code3)

### Code File Format

**code1.tsx** (typically the "wrong" approach):
```tsx
// ❌ Wrong: Brief description of the anti-pattern

// Your code example here
function Example() {
  // Bad implementation
}
```

**code2.tsx** (typically the "right" approach):
```tsx
// ✅ Right: Brief description of the correct approach

// Your code example here
function Example() {
  // Good implementation
}
```

### Critical Constraints

1. **Maximum 20 lines per file** - Code beyond 20 lines gets cut off in the video
2. **Use comments to explain** - First line should be a comment with ❌/✅ indicator
3. **Keep it focused** - Show only the relevant code, not boilerplate
4. **Self-contained examples** - Each file should be understandable on its own

### Comment Indicators
- `// ❌ Wrong:` - For anti-patterns or problematic code
- `// ✅ Right:` - For correct implementations
- `// ✅ Correct:` - Alternative for correct code
- You can also use emoji indicators like `🚨` for warnings

---

## Step 4: Create metadata.txt

Create a `metadata.txt` file in the example folder with this format:

```
Title of the Example

A 2-3 sentence description explaining what the example demonstrates. Focus on WHY this pattern matters, not just WHAT it shows. Include the key takeaway or lesson.
```

### Metadata Guidelines

1. **Line 1**: Short, descriptive title (2-5 words)
2. **Line 2**: Empty line
3. **Line 3+**: Description paragraph (2-3 sentences)

### Good Metadata Examples

```
Compound Components

Structure complex components as compound components with shared context. Each subcomponent accesses shared state via context, not props. Consumers compose exactly the pieces they need with natural JSX syntax.
```

```
Authenticate Server Actions

Treat Server Actions like public API endpoints - always verify authentication and authorization inside the action. Anyone can call a Server Action directly, so never assume the caller is authenticated just because they reached your code.
```

### Metadata Anti-Patterns

❌ Don't just describe WHAT the code does:
```
Using useState

This example shows how to use useState in React.
```

✅ Do explain WHY it matters:
```
Abusing Refs

Don't use refs to store values that should trigger re-renders. Refs are for values that don't affect the UI - like DOM references or timers. Use useState for values that should update the component when changed.
```

---

## Complete Example

### Folder Structure
```
public/
└── react-patterns/
    ├── source.txt                 # Required: source URL
    └── avoid-prop-drilling/
        ├── code1.tsx
        ├── code2.tsx
        └── metadata.txt
```

### source.txt
```
https://react.dev/learn/passing-data-deeply-with-context
```

### code1.tsx (10 lines)
```tsx
// ❌ Wrong: Prop drilling through multiple levels

function App({ user }) {
  return <Layout user={user} />;
}

function Layout({ user }) {
  return <Header user={user} />;
}

function Header({ user }) {
  return <Avatar name={user.name} />;
}
```

### code2.tsx (14 lines)
```tsx
// ✅ Right: Use context to avoid prop drilling

const UserContext = createContext(null);

function App({ user }) {
  return (
    <UserContext.Provider value={user}>
      <Layout />
    </UserContext.Provider>
  );
}

function Header() {
  const user = useContext(UserContext);
  return <Avatar name={user.name} />;
}
```

### metadata.txt
```
Avoid Prop Drilling

Don't pass props through multiple component levels just to reach a deeply nested child. Use React Context to provide values directly to components that need them, keeping intermediate components clean and focused.
```

---

## Checklist Before Submitting

- [ ] Category folder has `source.txt` with the original URL
- [ ] Example folder uses kebab-case naming
- [ ] All code files are named `code1.tsx`, `code2.tsx`, etc.
- [ ] Each code file is **20 lines or fewer**
- [ ] Code files have clear ❌/✅ comment indicators
- [ ] `metadata.txt` exists with title and description
- [ ] Description explains WHY, not just WHAT
- [ ] Code is focused and self-contained

---

## File Count Options

- **2 files**: Most common - wrong vs right comparison
- **3+ files**: For progressive examples or multiple valid approaches
- **1 file**: Rare - only for standalone demonstrations

The system supports any number of code files per example, as long as they follow the `code{N}.tsx` naming pattern.
