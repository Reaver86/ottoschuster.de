# Verification

Run `npm test` for the project's existing checks. It runs `astro check`, content
validation, a production build, and local-link/asset validation. A successful
build does not replace browser verification.

The build checks also verify the generated `.htaccess`, all legacy static
redirects, their deployment prefixes, and the existence of their destinations.
For redirect changes, additionally serve `dist/` using Apache with `mod_alias`,
`mod_headers`, `mod_dir`, `AllowOverride FileInfo`, and `DirectoryIndex index.html`. Astro's dev
and preview servers do not execute `.htaccess`. Check that each legacy address
returns HTTP 301 directly to its mapped destination, preserves query parameters,
and ends at HTTP 200. Check that current German/Romanian routes stay accessible
and unknown addresses still return 404. In the browser, follow representative
old links in both languages at the three viewport widths below.

Run `node scripts/check-http-redirects.mjs http://127.0.0.1:4381/` against that
Apache server. It checks root HTTP 302 language selection, cache headers, query
preservation, legacy HTTP 301 redirects, and explicit-language URLs. Check the
root in real browsers with Romanian and German locales at all three widths,
including language switching and direct links with the opposite browser language.
Repeat root-language selection on a static server (which ignores `.htaccess`)
with JavaScript enabled, and verify the German fallback with JavaScript disabled.
Check the GitHub Pages base prefix too; preserve queries and fragments.

## Website appearance and interaction

For every change affecting appearance or interaction, verify affected pages in a
real browser before declaring the work complete:

1. Run the site locally (`npm run dev`), or use `npm run preview -- --host
   127.0.0.1` after building when checking production output.
2. Check narrow mobile **320 px**, typical mobile **390 px**, and desktop
   **1440 px** viewports.
3. Capture and inspect screenshots for layout, wrapping, alignment, and overflow.
   A script checking widths alone is insufficient. Store artifacts under ignored
   `output/playwright/`.
4. Exercise affected interactions, including keyboard use where applicable:
   language switching, navigation, FAQ disclosure, catalogue controls, and contact
   or document links. Check destinations without sending messages or making calls.
5. Verify both German and Romanian whenever shared markup or styles change.
   For global layout changes, cover all six page types in both languages.
6. Check for failed images, missing assets, browser errors, and horizontal overflow.

Deployment alone does not trigger these checks. Follow [deploy.md](deploy.md):
build, upload changed files, and check homepage reachability. Run a thorough
release check only when the user explicitly requests one.

Documentation-only changes do not need website screenshots. Check documentation
links and commands. Deployment-tool changes need focused offline tests.
