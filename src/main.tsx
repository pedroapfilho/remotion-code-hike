import { AbsoluteFill, Series, useVideoConfig } from "remotion";
import { ProgressBar } from "./progress-bar";
import { CodeTransition } from "./code-transition";
import { ThemeColors, ThemeProvider } from "./calculate-metadata/theme";
import { CSSProperties, useMemo } from "react";
import { RefreshOnCodeChange } from "./reload-on-code-change";
import { verticalPadding } from "./font";
import { HighlightedCode } from "codehike/code";

export type CodeStep = {
  code: HighlightedCode;
  prevCode: HighlightedCode | null;
};

export type Props = {
  steps: CodeStep[] | null;
  themeColors: ThemeColors | null;
  codeWidth: number | null;
};

export const Main = ({ steps, themeColors, codeWidth }: Props) => {
  if (!steps) {
    throw new Error("Steps are not defined");
  }

  const { durationInFrames } = useVideoConfig();
  const stepDuration = durationInFrames / steps.length;
  const transitionDuration = 30;

  if (!themeColors) {
    throw new Error("Theme colors are not defined");
  }

  const outerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: themeColors.background,
    };
  }, [themeColors]);

  const style: CSSProperties = useMemo(() => {
    return {
      padding: `${verticalPadding}px 0px`,
    };
  }, []);

  return (
    <ThemeProvider themeColors={themeColors}>
      <AbsoluteFill style={outerStyle}>
        <AbsoluteFill
          style={{
            width: codeWidth || "100%",
            margin: "auto",
          }}
        >
          <ProgressBar steps={steps} />
          <AbsoluteFill style={style}>
            <Series>
              {steps.map((step, index) => (
                <Series.Sequence
                  key={index}
                  layout="none"
                  durationInFrames={stepDuration}
                  name={step.code.meta}
                >
                  <CodeTransition
                    oldCode={step.prevCode}
                    newCode={step.code}
                    durationInFrames={transitionDuration}
                  />
                </Series.Sequence>
              ))}
            </Series>
          </AbsoluteFill>
        </AbsoluteFill>
      </AbsoluteFill>
      <RefreshOnCodeChange />
    </ThemeProvider>
  );
};
