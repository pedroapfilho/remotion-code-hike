// ❌ NEVER: Silent failures hide bugs
try {
  await saveUser(data);
} catch {
  // ignore
}

const result = await fetch(url).catch(() => null);
