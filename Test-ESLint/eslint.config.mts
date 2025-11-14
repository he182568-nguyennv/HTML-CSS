import js from "@eslint/js";
import globals from "globals";
import tseslint, { parser } from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: "@typescript-eslint",
    extends: [
      "eslint/recommended",
      "plugin:@typescript-eslint/plugin",
      "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
]);
