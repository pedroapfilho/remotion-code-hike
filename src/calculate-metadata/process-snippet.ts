import { highlight } from "codehike/code";
import { PublicFolderFile } from "./get-data";
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
