# First-party analytics

Both websites use a same-origin PHP collector on the existing Netcup hosting.
No Umami, Google Analytics, or external analytics subscription is used. This repository's
`analytics/` directory is the canonical shared backend and tracker source.
`public/metrics/tracker.js` is copied into each site; keep both copies identical.
The static pages continue to work without the collector or JavaScript.

## Activation and deployment

Set `PUBLIC_ANALYTICS_ENABLED=true` for an explicitly authorized production build.
Without it, the tracker and analytics privacy section are absent. Preview builds
must leave it unset. The tracker also checks the real domain and respects DNT/GPC.
The test report does not activate tracking or recurring email.

Requires PHP 8.4 with PDO MySQL and working PHP mail transport. Select a supported
PHP runtime in WCP; do not use the domains' previous PHP 7.4 setting. Create one
shared MySQL database, execute `analytics/schema.sql`, and create credentials.
Install `core.php`, `collect.php`, `report.php`, `console.php`, `schema.sql` in each domain's
`private/analytics/` directory **outside httpdocs**. Install an adapted
`config.example.php` at `private/analytics-config.php`, mode 0600. Generate a random
secret of at least 32 bytes and never commit it. Use each domain's own site value.
The public endpoint is only a loader; private code/config must never enter dist.
Run `console.php install` once to initialize the schema. Verify PHP open_basedir permits the private directory and the scheduler can read
it. PHP configuration, database access and mail delivery require live checks.

Configure two tasks in WCP under the hosting202032 system user, using PHP 8.4
and timezone **Europe/Berlin**:

- Daily at 07:50: `ottoschuster.de/private/analytics/console.php daily`.
  This only deletes events older than 90 days; it never sends email.
- On the **1st of every month at 08:00**: `ottoschuster.de/private/analytics/console.php monthly`.
  This sends the **previous calendar month**, once, to
  **alexander.schuster86@gmail.com** and **otto.schuster@ottoschuster.de**.
  The first report is November 1, 2026, covering the partial October collection period.

Set scheduler error notifications to alexander.schuster86@gmail.com. The monthly
job also performs retention cleanup. If a monthly run fails, inspect the ledger
and manually rerun `monthly` within the same month after fixing the cause.
A `sending` entry requires checking delivery before retrying. Months older than
the preceding month need deliberate recovery; do not change the server clock.

All report copy, subject, labels and explanatory text are German. Each website
shows mobile page views as a percentage of all page views (tablets excluded from
the numerator), without separate absolute device counts. Zero traffic shows
“Mobilanteil: keine Daten”. Visitor totals are summed daily estimates.

`console.php preview` prints a synthetic HTML report without configuration or DB.
`console.php send-test` sends that demo only to alexander.schuster86@gmail.com.
No demo events are inserted. Monthly recipients are pinned in code as well as config; test mode sends only to Alexander.
`mail()` success means accepted by the hosting mail transport, not verified inbox
delivery. Confirm the initial email with the owner and inspect spam/bounces.

## Data and interpretation

Allowlisted events: pageview, contact-phone, contact-email, contact-whatsapp,
sample-pdf. Links are explicitly marked with `data-analytics-event`. Otto uses
all four action types; Teslime currently has WhatsApp and business-email links.
Do not count webmaster email or add phone links just to create a metric.

Only approved page paths are accepted. Query parameters, anchors, link targets,
message text and document contents are never sent. Referrers are domains only.
Device category comes from the request's browser header. No geolocation or replay.
A site- and day-specific HMAC of IP plus browser header estimates daily visitors.
Raw IP/header are not stored in analytics, but normal Netcup access logs exist
independently. The HMAC is pseudonymous, not claimed to be anonymous. No cookies,
localStorage, sessionStorage or client-side fingerprinting. Shared networks and
changing IP/browser values affect estimates. Report totals sum visitor-days;
they are **not unique monthly people**. Contact clicks are intent, not enquiries.

Events have random IDs for deduplication, strict origin/path/event validation,
a 2 KB body limit and a 500-event limit per estimated visitor/day. Bot filtering
is heuristic and a public endpoint cannot prove a visitor is human. Prepared SQL
statements, escaped report HTML and private config protect boundaries. Referrer
names are untrusted; never turn them into unescaped markup.

Individual events last 90 days. Reports in the recipient's mailbox last until
deleted there. The monthly ledger contains only period, delivery state and time.
Do not silently expand retention or add recipients. Privacy copy in both Otto
languages and Teslime's footer must match processing changes. Cookie-free does
not itself establish a legal exemption; the owner remains responsible for the
chosen legal basis and Netcup processing agreement.

## Operations and recovery

Monitor scheduled-job failures and verify that genuine visits generate records.
The report explains that zero records can also indicate a collection fault.
Email ledger states: `sending`, `sent`, `failed`. A crash while handing off mail
leaves `sending`; automation refuses to resend because delivery may have happened.
Inspect the hosting mail logs/inbox, then deliberately set `failed` to retry or
`sent` to acknowledge. Never clear the entire ledger to retry one month.
Concurrent runs use a database advisory lock. Failed handoff can be retried manually after inspection. The report and retention job must run even during low traffic.

Disable collection by removing the build flag and deploying both sites; disable
both scheduled tasks separately to stop reports. Preserve private config during website
releases and back it up securely along with the database. Never put backups under
httpdocs. Rollback static sites using their deployment runbooks.

## Verification

Run `php analytics/tests/core.php`, `php analytics/tests/database.php` against a
separate test database, and both sites' existing suites. Browser checks cover
both Otto languages/all page types and Teslime at 320/390/1440, privacy signals,
event payloads, blocked collection, link functionality and report rendering.
Use `php analytics/console.php preview > output/analytics/test-report.html` for
visual review. Never send tests to anyone besides the authorized recipient.

For local integration tests, start an isolated MariaDB socket at
`/tmp/website-analytics-test.sock` (no network listener), create the dedicated
`website_analytics_test` database, then run:

```sh
php analytics/tests/core.php
php analytics/tests/database.php
PHP_BINARY=php node analytics/tests/http.mjs
PUBLIC_ANALYTICS_ENABLED=true npm test
# In ../teslime.de: PUBLIC_ANALYTICS_ENABLED=true npm run verify
php analytics/console.php preview > output/analytics/test-report.html
node analytics/tests/browser.cjs
```

The database test refuses names without `_test`, empties its test tables and uses
a temporary local sendmail sink. It sends no external email. Override its connection
with `ANALYTICS_TEST_DSN`, `ANALYTICS_TEST_USER`, `ANALYTICS_TEST_PASSWORD` if needed.
The HTTP test currently uses the default isolated socket/database. The browser
script uses installed Chrome through Playwright, intercepting production origins
to serve local builds and capture events; it makes no production writes. It expects
both sibling builds with analytics enabled. Test screenshots go under `output/`.

## Hosting configuration (19 October 2026)

Hosting202032 uses the shared MySQL database `k232476_analytics` on
`10.35.232.230`, with a dedicated user restricted to the hosting web server.
The application is in each domain's `private/analytics/`; config is in
`private/analytics-config.php` with mode 0600 and a private parent directory.
Local recovery credentials are in ignored `.deploy/analytics-production.json`.
Never commit or upload them into a public directory.

The two WCP tasks use PHP 8.4: daily cleanup at 07:50 and monthly reporting on
day 1 at 08:00, Europe/Berlin. Error notifications go only to Alexander.
The initial English demo was received by Alexander before the German report
update. The temporary `analytics-demo` runner, deployment archives and verification
helpers were removed on 20 October 2026. No Umami client or configuration remains in either source tree.

Production configuration was verified on **20 October 2026**. Both domains use
PHP 8.4.24 and the supported subscription-level `open_basedir` setting, allowing
the private backend while keeping it outside httpdocs. Collection starts on
**2026-10-20**, so the first report on November 1 covers October 20–31.
Live HTTP and database checks verified storage, duplicate suppression, DNT/GPC,
origin validation and private-file protection; only the specific probe records
were removed afterwards. Backend file hashes matched the tested source.
Full pre-release backups and build manifests are under each repository's ignored
`output/deploy/2026-10-19-analytics/` folder (preparation began on October 19).
No Umami code was found in either source tree or complete pre-release website backup.
