// ❌ NEVER: Type assertions lie to the compiler
const user = data as User;
const items = response.body as Item[];
const config = JSON.parse(text) as Config;
