# monocart-reporter-clash-bug

## Description

This repo was created to show the bug reported by this issue: [[Bug] monocart-reporter clashes with Playwright's built-in html reporter
#174](https://github.com/cenfun/monocart-reporter/issues/174).

## Steps to replicate the bug

1) Clone the repo.
2) From the root of the repo, run `npm i` to install the required npm packages.
3) From the root of the repo, run `npx playwright install` to install the required Playwright browsers.
4) From the root of the repo, run `npm run test:bug`.

The `npm run test:bug` command will run the Playwright tests with both the [monocart-reporter](https://github.com/cenfun/monocart-reporter) and the [built-in html reporter](https://playwright.dev/docs/test-reporters#html-reporter). The `monocart-reporter` is configured to run **before** the `built-in html reporter`. 

## Steps to show workaround for the reported issue

1) Clone the repo.
2) From the root of the repo, run `npm i` to install the required npm packages.
3) From the root of the repo, run `npx playwright install` to install the required Playwright browsers.
4) From the root of the repo, run `npm run test:ok`.

The `npm run test:ok` command will run the Playwright tests with both the [monocart-reporter](https://github.com/cenfun/monocart-reporter) and the [built-in html reporter](https://playwright.dev/docs/test-reporters#html-reporter). The `monocart-reporter` is configured to run **after** the `built-in html reporter`.
