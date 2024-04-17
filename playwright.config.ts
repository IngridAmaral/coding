import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  retries: 0,
  workers: 1,
  reporter: "html",
  outputDir: "test-results/",
  use: {
    baseURL: "http://localhost:5173",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        video: {
          mode: "retain-on-failure",
          size: {
            width: 1920,
            height: 1080,
          },
        },
        viewport: {
          width: 1920,
          height: 1080,
        },
      },
      dependencies: ["setup"],
    },
  ],
});
