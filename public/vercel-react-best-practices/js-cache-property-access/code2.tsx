// Cache Property Access in Loops
// ✅ Right: Cache deep property access outside loop, avoid repeated lookups

const value = obj.config.settings.value
const len = arr.length
for (let i = 0; i < len; i++) {
  process(value)
}