import { defineConfig, globalIgnores } from "eslint/config";
import { config } from "@remotion/eslint-config-flat";

export default defineConfig([config, globalIgnores(["public/*"])]);
