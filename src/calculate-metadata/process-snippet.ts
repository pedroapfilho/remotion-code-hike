// idk what to do with this yet, twoslash-cdn is not cooperating with me
//
// import { highlight } from "codehike/code";
// import { createTwoslashFromCDN } from "twoslash-cdn";
// import { PublicFolderFile } from "./get-files";
// import { Theme } from "./theme";
// import { CompilerOptions, JsxEmit, ModuleKind, ScriptTarget } from "typescript";

// const compilerOptions: CompilerOptions = {
//   lib: ["DOM", "ESNext"],
//   jsx: JsxEmit.ReactJSX,
//   target: ScriptTarget.ESNext,
//   module: ModuleKind.ESNext,
// };

// const twoslash = createTwoslashFromCDN({
//   compilerOptions,
// });

// export const processSnippet = async (step: PublicFolderFile, theme: Theme) => {
//   const splitted = step.filename.split(".");
//   const extension = splitted[splitted.length - 1];

//   const twoslashResult =
//     extension === "ts" || extension === "tsx"
//       ? await twoslash.run(step.value, extension, {
//           compilerOptions,
//         })
//       : null;

//   const highlighted = await highlight(
//     {
//       lang: extension,
//       meta: "",
//       value: twoslashResult ? twoslashResult.code : step.value,
//     },
//     theme,
//   );

//   if (!twoslashResult) {
//     return highlighted;
//   }

//   // If it is TypeScript code, let's also generate callouts (^?) and errors
//   for (const { text, line, character, length } of twoslashResult.queries) {
//     const codeblock = await highlight(
//       { value: text, lang: "ts", meta: "callout" },
//       theme,
//     );
//     highlighted.annotations.push({
//       name: "callout",
//       query: text,
//       lineNumber: line + 1,
//       data: {
//         character,
//         codeblock,
//       },
//       fromColumn: character,
//       toColumn: character + length,
//     });
//   }

//   for (const { text, line, character, length } of twoslashResult.errors) {
//     highlighted.annotations.push({
//       name: "error",
//       query: text,
//       lineNumber: line + 1,
//       data: { character },
//       fromColumn: character,
//       toColumn: character + length,
//     });
//   }

//   return highlighted;
// };

import { highlight } from "codehike/code";
import { PublicFolderFile } from "./get-files";
import { Theme } from "./theme";

export const processSnippet = async (step: PublicFolderFile, theme: Theme) => {
  const highlighted = await highlight(
    {
      lang: "tsx",
      meta: "",
      value: step.value,
    },
    theme,
  );

  return highlighted;
};
