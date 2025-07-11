import { loadFont } from "@remotion/google-fonts/IBMPlexMono";

export const { fontFamily, waitUntilDone } = loadFont("normal", {
  subsets: ["latin"],
  weights: ["400", "700"],
});

export const fontSize = 28;

export const tabSize = 2;

export const horizontalPadding = 60;

export const verticalPadding = 84;
