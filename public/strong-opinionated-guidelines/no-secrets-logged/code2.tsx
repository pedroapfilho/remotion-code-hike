// ✅ MUST: Never log or expose secrets
const authenticate = async (apiKey: string) => {
  logger.info("Auth request", { keyPrefix: apiKey.slice(0, 4) });
  return fetch(url, { headers: { Authorization: apiKey } });
};
