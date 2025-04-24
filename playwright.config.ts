import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    // These are being set in the package.json script when running playwright tests.
    // To show the bug the monocart-reporter must be added to the reporter array before
    // the html reporter.
    //
    // ["html", { open: "never" }],
    // [
    //   "monocart-reporter",
    // ],
  ],
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
