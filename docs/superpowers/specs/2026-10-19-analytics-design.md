# First-party analytics and monthly email

Approved direction: option 2 in the conversation. Both static Astro sites send
allowlisted page-view and contact/download events to a same-origin PHP endpoint.
No cookies, local storage, fingerprint scripts, replay, query strings or message
contents. Respect DNT/GPC. Daily, site-specific HMACs of connection IP and browser
header estimate visitors; no raw IP/header stored in analytics. Estimates cannot
identify people or deduplicate across days/sites. Keep event data 90 days; report
sum of daily visitors, explicitly not unique monthly visitors.

PHP 8.4 and PDO MySQL run within the existing Netcup account. Shared database,
separate site configs and credentials outside document roots. Strict origin,
path/event validation, body limits, bot filtering, per-day visitor rate limits,
prepared statements and random per-event IDs for retry deduplication. Static
content and links remain functional if collection fails.

Monthly CLI job runs on the 1st at 08:00 Europe/Berlin and sends the previous calendar month once after month
end in Europe/Berlin. Database report ledger and lock prevent concurrent sends;
ambiguous interrupted delivery requires review instead of automatic duplicates.
Monthly recipients: alexander.schuster86@gmail.com and otto.schuster@ottoschuster.de. Test recipient: Alexander only. Initial test uses clearly labelled
synthetic data, isolated from real statistics. German HTML plus text email, both sites,
previous-month comparisons, daily counts, mobile percentage, popular pages, referrers,
contact/download totals and limitations. No dashboard or replay in this scope.

Verify PHP logic, MySQL integration, validation/abuse boundaries, reporting month
boundaries, deduplication and failure cases. Run both website test suites and
browser checks at 320/390/1440, German/Romanian where applicable; inspect screenshots.
Production setup requires current Netcup TAN. Preserve existing sites/config,
back up before deployment; test real collection and mail handoff. Inbox delivery
can only be confirmed by the recipient. No other email recipients.

Retention cleanup runs separately every day; reports cover the previous calendar month.
