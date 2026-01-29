// Dynamic Imports for Heavy Components
// ✅ Right: Monaco loads on demand

import dynamic from "next/dynamic";

const MonacoEditor = dynamic(
  () => import("./monaco-editor").then((m) => m.MonacoEditor),
  { ssr: false },
);

function CodePanel({ code }: { code: string }) {
  return <MonacoEditor value={code} />;
}
