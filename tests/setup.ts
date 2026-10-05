// jest-dom matchers (toBeInTheDocument, toHaveAttribute…) for expect, and a
// clean DOM between component tests.
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});
