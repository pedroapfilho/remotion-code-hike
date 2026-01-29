import { z } from "zod";
import { CalculateMetadataFunction } from "remotion";
import { getThemeColors } from "@code-hike/lighter";
import { CodeStep, Props } from "../main";
import { schema } from "./schema";
import { processSnippet } from "./process-snippet";
import { getFiles } from "./get-data";
import { measureText } from "@remotion/layout-utils";
import {
  fontFamily,
  fontSize,
  horizontalPadding,
  tabSize,
  waitUntilDone,
} from "../font";
import { HighlightedCode } from "codehike/code";

export const calculateMetadata: CalculateMetadataFunction<
  Props & z.infer<typeof schema>
> = async ({ props }) => {
  const contents = await getFiles(props.folder);

  await waitUntilDone();
  const widthPerCharacter = measureText({
    text: "A",
    fontFamily,
    fontSize,
    validateFontIsLoaded: true,
  }).width;

  const maxCharacters = Math.max(
    ...contents
      .map(({ value }) => value.split("\n"))
      .flat()
      .map((value) => value.replaceAll("\t", " ".repeat(tabSize)).length)
      .flat(),
  );
  const codeWidth = widthPerCharacter * maxCharacters;

  const defaultStepDuration = 60 * 3;

  const themeColors = await getThemeColors(props.theme);

  // Process code snippets for syntax highlighting
  const highlightedCode: HighlightedCode[] = [];
  for (const snippet of contents) {
    highlightedCode.push(await processSnippet(snippet, props.theme));
  }

  // Build steps
  const steps: CodeStep[] = highlightedCode.map((code, i) => ({
    code,
    prevCode: i > 0 ? highlightedCode[i - 1] : null,
  }));

  const naturalWidth = codeWidth + horizontalPadding * 2;
  const divisibleByTwo = Math.ceil(naturalWidth / 2) * 2; // MP4 requires an even width

  const minimumWidth = props.width.type === "fixed" ? 0 : 1080;
  const minimumWidthApplied = Math.max(minimumWidth, divisibleByTwo);

  return {
    durationInFrames: steps.length * defaultStepDuration,
    width:
      props.width.type === "fixed"
        ? Math.max(minimumWidthApplied, props.width.value)
        : minimumWidthApplied,
    props: {
      theme: props.theme,
      width: props.width,
      steps,
      themeColors,
      codeWidth,
    },
  };
};
