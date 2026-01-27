// Cache Property Access in Loops
// ❌ Wrong: This approach has performance issues

for (let i = 0; i < arr.length; i++) {
  process(obj.config.settings.value)
}