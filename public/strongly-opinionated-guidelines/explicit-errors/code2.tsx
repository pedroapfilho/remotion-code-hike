// ✅ MUST: Handle errors explicitly
try {
  await saveUser(data);
} catch (error) {
  logger.error("Failed to save user", { error, data });
  toast.error("Could not save. Please try again.");
}

const result = await fetch(url).catch((error) => {
  logger.warn("Fetch failed", { url, error });
  return null;
});
