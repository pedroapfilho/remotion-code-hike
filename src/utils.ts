import { TokenTransition } from "codehike/utils/token-transitions";
import { interpolate, interpolateColors } from "remotion";

/**
 * Checks if a color string is valid for Remotion's interpolateColors.
 * Valid formats: hex (#RGB, #RRGGBB, #RGBA, #RRGGBBAA), rgb(), rgba(), hsl(), hsla(), named colors.
 */
const isValidColor = (color: string): boolean => {
  if (!color || typeof color !== "string") return false;
  // Basic check for common color formats
  return (
    color.startsWith("#") ||
    color.startsWith("rgb") ||
    color.startsWith("hsl") ||
    /^[a-zA-Z]+$/.test(color) // Named colors like "red", "blue"
  );
};

export const applyStyle = ({
  element,
  keyframes,
  progress,
  linearProgress,
}: {
  element: HTMLElement;
  keyframes: TokenTransition["keyframes"];
  progress: number;
  linearProgress: number;
}) => {
  const { translateX, translateY, color, opacity } = keyframes;

  if (opacity) {
    element.style.opacity = linearProgress.toString();
  }
  if (color && isValidColor(color[0]) && isValidColor(color[1])) {
    element.style.color = interpolateColors(progress, [0, 1], color);
  }
  const x = translateX ? interpolate(progress, [0, 1], translateX) : 0;
  const y = translateY ? interpolate(progress, [0, 1], translateY) : 0;
  element.style.translate = `${x}px ${y}px`;
};
