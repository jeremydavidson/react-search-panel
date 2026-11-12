# Contributing

1. Use Node.js 20+.
2. Install dependencies with `npm install`.
3. Run `npm run typecheck`, `npm run lint`, `npm run test`, and `npm run build` before opening a PR.
4. Add or update unit tests under `src/` and Storybook stories for UI changes.
5. Run Playwright e2e with `npx playwright install chromium && npm run test:e2e` when Storybook behavior changes.
