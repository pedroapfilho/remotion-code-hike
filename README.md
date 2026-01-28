# Remotion Code Hike

Animated code transition videos powered by [Remotion](https://www.remotion.dev/) and [CodeHike](https://codehike.org/).

Transform code examples into smooth, animated videos that transition between different code states - perfect for demonstrating best practices, anti-patterns, and code evolution.

## Features

- **Auto-discovery**: Drop code files in `public/` and compositions are automatically generated
- **Smooth transitions**: Animated code morphing between states using CodeHike
- **Syntax highlighting**: Beautiful syntax highlighting with customizable themes
- **Batch rendering**: Render all compositions at once with a single command

## Quick Start

```bash
# Install dependencies
pnpm install

# Start the Remotion Studio
pnpm dev

# Render all videos
pnpm render
```

## Project Structure

```
├── public/
│   └── {category}/              # e.g., "react-best-practices"
│       ├── source.txt           # URL reference for the source material
│       └── {example}/           # e.g., "avoid-prop-drilling"
│           ├── code1.tsx        # First code state (typically "wrong")
│           ├── code2.tsx        # Second code state (typically "right")
│           ├── code3.tsx        # Optional: additional states
│           └── metadata.txt     # Title and description
├── src/
│   ├── main.tsx                 # Main composition component
│   ├── code-transition.tsx      # Code animation logic
│   └── calculate-metadata/      # Auto-discovery and metadata processing
├── scripts/
│   └── render-all.ts            # Batch render script
└── output/                      # Rendered videos (generated)
```

## Adding Examples

1. Create a category folder in `public/` with a `source.txt` containing the source URL
2. Create example folders with `code1.tsx`, `code2.tsx`, etc.
3. Add a `metadata.txt` with title and description
4. Run `pnpm dev` to preview in Remotion Studio

See [AGENTS.md](./AGENTS.md) for detailed instructions on creating examples.

### Example Structure

```
public/
└── react-patterns/
    ├── source.txt                 # https://react.dev/learn/...
    └── avoid-prop-drilling/
        ├── code1.tsx              # ❌ Wrong approach
        ├── code2.tsx              # ✅ Right approach
        └── metadata.txt           # Title + description
```

### Code File Format

```tsx
// ❌ Wrong: Brief description of the problem
function Example() {
  // problematic code
}
```

```tsx
// ✅ Right: Brief description of the solution
function Example() {
  // correct code
}
```

### Constraints

- **Maximum 20 lines** per code file
- Use `// ❌ Wrong:` or `// ✅ Right:` comment indicators
- Keep examples focused and self-contained

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Remotion Studio for preview |
| `pnpm build` | Bundle the project |
| `pnpm render` | Render all compositions to `output/` |
| `pnpm lint` | Run TypeScript and ESLint checks |

## License

UNLICENSED - Private project
