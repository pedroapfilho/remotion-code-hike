import { Composition } from "remotion";
import { Main } from "./main";

import { calculateMetadata } from "./calculate-metadata/calculate-metadata";
import { schema } from "./calculate-metadata/schema";

export const RemotionRoot = () => {
  return (
    <Composition
      id="Main"
      component={Main}
      defaultProps={{
        steps: null,
        themeColors: null,
        theme: "dracula" as const,
        codeWidth: null,
        width: {
          type: "auto",
        },
      }}
      fps={60}
      height={1080}
      calculateMetadata={calculateMetadata}
      schema={schema}
    />
  );
};
