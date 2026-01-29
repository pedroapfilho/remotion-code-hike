// ✅ MUST: Use type guards or runtime validation
const user = userSchema.parse(data);
const items = itemsSchema.parse(response.body);
const config = configSchema.parse(JSON.parse(text));
