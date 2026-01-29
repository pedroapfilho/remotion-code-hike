// Dynamic Imports for Heavy Components
// ❌ Wrong: This approach has performance issues

import { MonacoEditor } from "./monaco-editor";

function CodePanel({ code }: { code: string }) {
  return <MonacoEditor value={code} />;
}
