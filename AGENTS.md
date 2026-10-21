# Project instructions

- Before changing site structure, content, styles, or behavior, read
  [docs/architecture.md](docs/architecture.md).
- For changes affecting appearance or interaction, follow
  [docs/verification.md](docs/verification.md), including real-browser checks in
  German and Romanian at 320, 390, and 1440 px. Run `npm test` for site changes.
- Deploy to production **only when the user explicitly asks** (for example,
  "deploy it"). Then read [docs/deploy.md](docs/deploy.md) and follow its procedure.
  A request to edit, test, commit, push, or prepare deployment is not permission
  to publish. Never attach production deployment to an automatic push trigger.
  A deployment request means run `npm run deploy`: build, upload changed files
  over FTPS, and check homepage reachability. No backups, tests, screenshots,
  browser checks, or downloaded-file comparisons unless explicitly requested.
  For deployment-tool changes, use focused offline tests.
- For analytics changes or production analytics configuration, read
  [docs/analytics.md](docs/analytics.md).
