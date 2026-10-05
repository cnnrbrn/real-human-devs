// @ts-check
// Pinned to ESLint 9: eslint-plugin-jsx-a11y doesn't support 10 yet, and
// eslint-plugin-astro 2+ (the ESLint 10 line) would drop the a11y rules below.
import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist/", ".astro/", ".wrangler/"]),

  js.configs.recommended,
  tseslint.configs.recommended,

  astro.configs["flat/recommended"],
  // jsx-a11y's recommended rules, for .astro markup and the .tsx components
  astro.configs["flat/jsx-a11y-recommended"],

  {
    files: ["**/*.{jsx,tsx}"],
    extends: [reactHooks.configs.flat.recommended],
  },

  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // TypeScript (and astro check) already catch undefined names, and this rule
  // doesn't know about global types like Astro's ImageMetadata
  {
    files: ["**/*.{ts,tsx,astro}"],
    rules: { "no-undef": "off" },
  },

  // last, so formatting is left to Prettier
  prettier,
]);
