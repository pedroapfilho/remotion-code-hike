import { Composition, Folder } from "remotion";
import { Main } from "./main";

import { calculateMetadata } from "./calculate-metadata/calculate-metadata";
import { schema } from "./calculate-metadata/schema";
import { getFolders } from "./calculate-metadata/get-data";

export const RemotionRoot = () => {
  const origins = getFolders();

  return (
    <>
      {origins.map((origin) => (
        <Folder key={origin.name} name={origin.name}>
          {origin.snippets.map((snippet) => (
            <Folder key={snippet.id} name={snippet.name}>
              <Composition
                id={snippet.id}
                component={Main}
                defaultProps={{
                  steps: null,
                  themeColors: null,
                  theme: "dracula" as const,
                  codeWidth: null,
                  width: {
                    type: "auto",
                  },
                  folder: snippet.folderPath,
                }}
                fps={60}
                height={1080}
                calculateMetadata={calculateMetadata}
                schema={schema}
              />
            </Folder>
          ))}
        </Folder>
      ))}
    </>
  );
};
