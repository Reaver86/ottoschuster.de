# Verification

Run `npm test` for the project's existing checks. It runs `astro check`, content
validation, a production build, and local-link/asset validation. A successful
build does not replace browser verification.

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

For a production release, inspect the built site before uploading, then verify
the live affected pages and interactions at these same widths in both languages.
Check HTTPS, redirects, PDFs, and asset loading as described in
[deploy.md](deploy.md). Record what was checked and any remaining limitation.

Documentation-only changes do not need website screenshots. Check documentation
links and commands, and run `npm test`.
