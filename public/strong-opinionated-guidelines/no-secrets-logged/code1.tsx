// ❌ NEVER: Logging secrets exposes them in monitoring
const authenticate = async (apiKey: string) => {
  console.log("Authenticating with key:", apiKey);
  logger.info("Auth request", { apiKey, token: session.token });
  return fetch(url, { headers: { Authorization: apiKey } });
};
