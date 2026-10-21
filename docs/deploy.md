# Production deployment

When the user says **“deploy”**, run from the repository root:

```sh
npm run deploy
```

Requires Node 24, Python 3, and installed dependencies (`npm ci` only if missing).
Credentials are already in ignored `.deploy/netcup.json`. Use the existing
`ottoschuster-deploy` account on `ae8e5.netcup.net:21`, explicit FTPS with TLS
verification, encrypted data, and passive mode. Its root `/` is already
`ottoschuster.de/httpdocs`. No portal login or TAN is needed.

The command builds the current working tree for `https://www.ottoschuster.de`
with production analytics enabled, uploads only new/changed build files
(assets before HTML, temporary upload then rename), and checks that
`https://ottoschuster.de/` is reachable. It leaves other remote files untouched.

Ignored `.deploy/production-state.json` records deployed file hashes and the
source commit. Keep it between sessions; completed uploads are recorded so
retries skip them. If it is missing, the command uploads the full build once.
No Git tag or remote downloads are needed.

**Do not add backups, tests, screenshots, browser checks, or file-download
comparisons.** Thorough verification is a separate task, only when requested.
Do not invent another deployment procedure. If the command fails, report the
specific error; do not switch to portal experiments or a broad audit.

Report the upload count and production URL briefly. Deploy only on an explicit
request; editing these instructions, committing, or pushing is not permission.
GitHub Pages remains a separate preview and never triggers production deployment.
