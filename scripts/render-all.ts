import { bundle } from "@remotion/bundler";
import { getCompositions, renderMedia } from "@remotion/renderer";
import { createRequire } from "node:module";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);

const OUTPUT_DIR = "./output";

const main = async () => {
  // Ensure output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log("Bundling project...");
  const bundled = await bundle({
    entryPoint: require.resolve("../src/index.ts"),
    webpackOverride: (config) => config,
  });

  console.log("Getting compositions...");
  const compositions = await getCompositions(bundled);

  console.log(`Found ${compositions.length} compositions to render\n`);

  for (const composition of compositions) {
    // Create subfolder structure based on composition ID
    // e.g., "mjackson-x-tips--fake-hooks" -> "output/mjackson-x-tips/fake-hooks.mp4"
    const parts = composition.id.split("--");
    const outputDir =
      parts.length > 1
        ? path.join(OUTPUT_DIR, parts[0])
        : OUTPUT_DIR;
    const fileName =
      parts.length > 1
        ? `${parts[1]}.mp4`
        : `${composition.id}.mp4`;

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    const outputLocation = path.join(outputDir, fileName);

    console.log(`Rendering ${composition.id}...`);
    const startTime = Date.now();

    await renderMedia({
      codec: "h264",
      composition,
      serveUrl: bundled,
      outputLocation,
    });

    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`  -> ${outputLocation} (${duration}s)\n`);
  }

  console.log("All renders complete!");
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
