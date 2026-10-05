import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.{ts,tsx}"],
    // component tests opt into jsdom with a `// @vitest-environment jsdom` line
    environment: "node",
    setupFiles: ["tests/setup.ts"],
  },
});
