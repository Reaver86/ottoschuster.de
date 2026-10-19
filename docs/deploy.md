# Deploy to production

Use this guide when the user explicitly requests deployment, for example
"deploy it". That request authorizes publishing the current intended changes and
the necessary backup and verification. Editing, testing, committing, pushing, or
preparing this guide does **not** authorize production deployment. Do not schedule
production uploads or add automatic deployment on push.

## Target and access

| Setting | Value |
| --- | --- |
| Production | `https://www.ottoschuster.de` (also serves `https://ottoschuster.de`) |
| Provider / account | Netcup, customer `232476` |
| Hosting | `Hosting202032`, Webhosting 2000 NUE |
| Server | `ae8e5.netcup.net`, IPv4 `202.61.232.229` |
| IPv6 | `2a03:4000:61:843b::20:2032` |
| Document root | `ottoschuster.de/httpdocs` within this hosting subscription |
| Account portal | <https://www.customercontrolpanel.de/> |
| Build output | Contents of `dist/`, not the `dist` directory itself |
| Transfer | Explicit FTPS (FTPES), port 21, passive mode |
| Deployment user | `ottoschuster-deploy` |
| FTP-visible root | `/` (jailed to `ottoschuster.de/httpdocs`) |

`teslime.de` shares this hosting subscription with a separate document root.
Never upload to the subscription root, `teslime.de/httpdocs`, or Hosting223287.
Domain, DNS, and email have already moved to Netcup. Routine website releases
require no DNS, mailbox, registrar, certificate, or hosting-setting changes.

Local credentials are in **`.deploy/netcup.json`**, ignored by Git, with directory
permissions `0700` and file permissions `0600`. It contains `ftp_username`,
`ftp_password`, `ftp_root`, `ftp_port`, and `host` for deployments, plus separate
`ccp_username` / `ccp_password` for portal administration. Read it programmatically
without printing passwords or putting them in command arguments or tracked files.

**Normal deployments use FTPS and need no portal login or TAN.** The portal still
requires a current two-factor TAN for account administration. On a fresh clone,
restore the credentials file from the owner's private credential storage or request
access; it is deliberately not part of Git. If FTP credentials are lost, reset only
`ottoschuster-deploy` through WCP → FTP Access, then update the local file. Do not
reset the shared hosting login or the `teslime` account.

## Verified method and gotchas

Use **explicit FTPS on `ae8e5.netcup.net:21`**, passive mode, with certificate
verification and encrypted data connections (`PROT P`). Python 3's standard
library `ftplib.FTP_TLS` works without additional dependencies. Do not use plain
FTP, implicit FTPS on port 990 (connection refused), or disable TLS validation.

The dedicated account was created on 18 October 2026 with its base directory set
to `/ottoschuster.de/httpdocs`. Its FTP-visible root is already `/`: **do not append
`ottoschuster.de/httpdocs` again**. Parent traversal stays at `/`. This account
cannot stage files outside the served document root, so keep backups locally and
upload individual build files, not ZIP archives.

Netcup's additional FTP users do not get SSH/SFTP access
([Netcup documentation](https://www.netcup.com/en/helpcenter/documentation/web-hosting/interface)).
Port 22 is reachable, but using it would require different credentials and access.
FTPS avoids changing the shared hosting account used by the other website.

Verification on 18 October 2026 established certificate-verified TLS login,
passive directory listing, and download of `de/index.html` matching the live HTTPS
page byte for byte. The WCP confirms the dedicated account's restricted directory.
An isolated temporary-file test verified upload, rename over an existing probe,
byte-for-byte download, deletion, and `MLSD` directory listing. All probe files
were removed and the original root listing restored; no website files changed.
The portal/file-manager ZIP method was also used successfully during the original
migration on 10 October 2026; retain it as a recovery option.

On 17 October 2026, HTTP redirected to HTTPS; apex and `www` HTTPS worked, and
both language homepages returned 200. The certificate showed an expiry of
8 January 2027. Automatic renewal was not verified; the original
certificate used manual DNS validation. Check current certificate validity during
future deployments rather than relying on these dated observations.

### Read-only connection check

Run from the repository root before each deployment. This logs no passwords and
writes nothing remotely:

```sh
python3 - <<'PYTHON'
import ftplib, io, json, ssl, urllib.request
from pathlib import Path

c = json.loads(Path(".deploy/netcup.json").read_text())
with ftplib.FTP_TLS(context=ssl.create_default_context(), timeout=30) as ftp:
    ftp.connect(c["host"], c["ftp_port"])
    ftp.login(c["ftp_username"], c["ftp_password"])
    ftp.prot_p()
    ftp.set_pasv(True)
    assert ftp.pwd() == "/", "Unexpected deployment root"
    assert {"de", "ro", "index.html"} <= set(ftp.nlst())
    current = io.BytesIO()
    ftp.retrbinary("RETR de/index.html", current.write)
    with urllib.request.urlopen("https://www.ottoschuster.de/de/", timeout=30) as r:
        assert current.getvalue() == r.read(), "FTP target differs from live site"
    print("Verified encrypted access to production document root")
PYTHON
```

If the check fails, investigate before uploading. A mismatch can indicate caching
or an unexpected target; do not treat it as permission to overwrite blindly.

## Prepare the release

1. Inspect `git status` and the diff. Deploy the user's intended working-tree
   version, including intended uncommitted files; do not silently switch branches
   or discard changes. Record the commit and working-tree state with the release.
2. Use Node **24.x** and install the lockfile dependencies with `npm ci` if needed.
   Configure `PUBLIC_ANALYTICS_ENABLED` as described in
   [analytics.md](analytics.md). Preserve the intended analytics configuration;
   a build without the flag omits both tracking and its privacy text.
3. Build and run all checks from the repository root:

   ```sh
   SITE_URL=https://www.ottoschuster.de BASE_PATH=/ npm test
   ```

   Do not deploy artifacts produced by the GitHub Pages workflow: that preview
   uses a different origin and `/ottoschuster.de` base path. `npm test` already
   builds `dist/`; deploy that exact verified build without another rebuild.
4. Serve the build with `npm run preview -- --host 127.0.0.1` and follow
   [verification.md](verification.md). Verify both languages at 320, 390, and
   1440 px, including screenshots and affected interactions. Stop on failures.
5. Create a timestamped local release folder under ignored `output/deploy/`.
   Save the built files or ZIP, a SHA-256 manifest, and the release metadata.
   Include only files beneath `dist/`; exclude source, `.env`, `.deploy`, docs,
   and repository metadata. A ZIP must contain `de/`, `ro/`, `_astro/`, etc. at
   its top level, not a containing `dist/` folder.

## Back up and publish over FTPS

After explicit deployment authorization and all preparation checks:

1. Connect as in the read-only example. Recursively list `/` with `mlsd()` and
   download all regular files using `retrbinary()` into the timestamped local
   release folder's `before/` directory. Include dotfiles such as `.htaccess` and
   `.well-known` if present. Record remote paths, sizes, and SHA-256 hashes of the
   downloaded bytes; confirm each download's size. Do not follow symlinks outside
   the tree. Stop on unexpected types or failed/incomplete backups.
2. Inventory the verified `dist/` files and save their SHA-256 manifest. Compare
   against the backup to identify added, changed, unchanged, and obsolete files.
   Keep this manifest and the exact build under the local release folder.
3. Create any missing destination directories under `/`. Upload added/changed
   assets first, then HTML. For each file, use `storbinary()` to a unique temporary
   name in the destination directory, download it again to check its SHA-256,
   then `rename()` it over the destination. Do not log credentials. Stop on a
   transfer or hash failure; clean up only temporary files created by this release.
4. Preserve server configuration and `.well-known` validation files unless the
   release explicitly includes a reviewed change. Do not blindly mirror with
   deletion or empty the root. Keep old hashed `_astro/` assets through verification
   so cached pages continue working. Review obsolete pages separately so removed
   content does not remain accessible indefinitely.
5. Download the deployed files and compare against the new manifest, then perform
   the live checks below. Retain the local backup and release manifest for rollback.

A per-file rename avoids exposing partially uploaded files, but this is **not a
whole-site atomic release**: requests can briefly see mixed versions. Uploading
assets before HTML reduces that risk. Temporary files under this FTP root are
potentially public; only upload public build output, never credentials or backups.
Do not assume `rsync` or an SSH shell is available.

## File-manager fallback

If FTPS is unavailable, log in to CCP, select **Hosting202032**, and use **Auto-Login
WEB** to open WCP/Plesk. Select **ottoschuster.de** → **Files**, and confirm
`ottoschuster.de/httpdocs`. Download and verify a full backup before replacing
anything. Upload a ZIP of the build to a temporary directory outside `httpdocs`,
extract and inspect it, then copy its contents into the document root. Preserve
server configuration, use assets-first/HTML-last ordering where possible, and
perform the same live checks. Remove the temporary ZIP/extraction directory after
verification. Do not leave backups or release archives publicly downloadable.

## Verify the live release

- Check `http://ottoschuster.de/`, `https://ottoschuster.de/`, and
  `https://www.ottoschuster.de/`, plus all six pages under both `/de/` and `/ro/`.
  Check certificate validity and the intended updated content on the live host.
- Confirm uploaded files against the release manifest by authenticated download
  when possible, or compare served HTML and assets against the local build.
  Successful upload alone does not prove the correct site was updated.
- Repeat affected browser checks at 320, 390, and 1440 px in both languages;
  inspect screenshots, navigation, language switching, FAQ/catalogue interactions,
  contact link destinations, PDF links, images, and browser/network errors.
- Check legacy redirect paths listed in `astro.config.mjs` and the root language
  redirect. Astro's static output uses HTML meta-refresh redirects; an HTTP 200
  for those files is not itself a failure. A source `301` does not automatically
  configure a server-side HTTP redirect on Netcup. Also check unknown URLs and
  report the actual 404 behavior instead of assuming Plesk serves `404.html`.
- If analytics is enabled, verify the intended first-party endpoint and live tracking as
  described in [analytics.md](analytics.md).
- Report the published version, production URL, checks performed, and backup
  location. Never include secrets in the report.

## Rollback

If live checks fail because of the release, restore the saved document-root backup
using the same access route. Replace previous files, restore any changed server
configuration, and remove only newly introduced files identified by comparing the
before/after manifests. Preserve unrelated files and ACME validation material.
Recheck both languages, HTTPS, and affected interactions. Report that the release
was rolled back and retain the failed artifact locally for diagnosis.

## Scope of the automation

`AGENTS.md` routes explicit deployment requests here. This is an agent-operated
runbook, not a push-triggered production pipeline. The existing
`.github/workflows/deploy.yml` deploys only the GitHub Pages preview. Keep it that
way unless the user explicitly requests a different production approval model.
