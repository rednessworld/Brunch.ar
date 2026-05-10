# Stitch Restaurant Template — Claude Instructions

## Project Overview

This is a static restaurant website template built from a Stitch ZIP export. The workflow:
1. Design screens in Stitch
2. Export as ZIP (contains HTML/CSS/images from the Stitch design system)
3. Use this repo as the integration target — drop exported assets into `src/`, wire up content

## Directory Structure

```
/
├── CLAUDE.md           ← this file
├── README.md
├── design/             ← raw Stitch export assets (drop ZIP contents here)
└── src/
    ├── index.html      ← main restaurant page
    ├── privacy.html    ← GDPR privacy policy (placeholder, update before launch)
    ├── 404.html        ← branded error page
    ├── css/
    │   ├── style.css   ← design tokens, reset, and layout
    │   └── print.css   ← menu print stylesheet (media="print")
    ├── fonts/          ← self-hosted font files (.woff2); empty until fonts are added
    ├── js/
    │   ├── main.js     ← interactive behavior (menu toggle, reservations, etc.)
    │   └── i18n.js     ← EN / ES / CA translations
    └── images/         ← optimized photos (hero, food, team)
```

## Building from Stitch Screen PNGs

The primary workflow for a new project is to design screens in Stitch, export the ZIP, and use the exported `screen.png` files as pixel-accurate references while building the HTML/CSS by hand.

### Step-by-step

1. **Export the Stitch ZIP** and extract it into `design/`. The ZIP contains one `screen.png` per screen plus a design-token JSON or CSS file.
2. **Reference the PNGs** — keep `design/` open alongside your editor. Each `screen.png` is the source of truth for layout, spacing, colour, and type.
3. **Extract design tokens** — copy colour, spacing, and type values from the Stitch token output into the `:root` block in `src/css/style.css`. Do not overwrite the reset or layout rules.
4. **Add fonts** — if the design uses a custom or self-hosted typeface, copy the `.woff2` files into `src/fonts/` and add the `@font-face` declarations at the top of `src/css/style.css`. For Google Fonts, add the `<link>` preconnect and stylesheet tags to `<head>` instead (see Performance section).
5. **Build the HTML** — work section by section, matching each part of the `screen.png` reference. Preserve Stitch component class names so future exports stay in sync.
6. **Replace placeholder images** — drop optimised photos into `src/images/` and update `src` paths in `src/index.html`.
7. **Run the polish sequence** — see Testing Workflow below.

### Tips

- Zoom into the `screen.png` at 2× to read exact spacing and font sizes before writing CSS.
- Stitch often uses a 4 px or 8 px base unit — check the token output and set `--space-1` accordingly.
- If the Stitch export includes multiple screen variants (mobile/tablet/desktop), start with mobile and layer up using `--bp-md` and `--bp-lg`.

## Custom Fonts (src/fonts/)

`src/fonts/` is the home for self-hosted typefaces. Preferred format is `.woff2` (best compression, supported by all modern browsers).

### Adding a self-hosted font

```css
/* at the top of src/css/style.css, before :root */
@font-face {
  font-family: 'FontName';
  src: url('../fonts/fontname-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

Then reference it in `:root`:

```css
:root {
  --font-heading: 'FontName', Georgia, serif;
}
```

- Always use `font-display: swap` to prevent invisible text during font load.
- Add a `<link rel="preload" as="font" type="font/woff2" crossorigin href="fonts/fontname-regular.woff2">` in `<head>` for the font(s) used above the fold.
- Keep the `src/fonts/` folder committed (with `.gitkeep` if empty) so the path is always present.

## Working with Stitch Exports (token-only flow)

When the Stitch ZIP contains a CSS/JSON token file but no screen PNGs:
1. Extract the ZIP contents into `design/`
2. Copy relevant CSS variables and tokens from the Stitch output into `src/css/style.css` under the `:root` block — do not overwrite the reset or layout rules
3. Replace placeholder image paths in `src/index.html` with actual exported image filenames from `src/images/`
4. Preserve the Stitch component class names so designs stay in sync with future exports

## Sections in index.html

The page is structured as a single-page restaurant site with these sections (in order):
- `#nav` — sticky navigation with logo and links
- `#hero` — full-bleed hero with headline and CTA
- `#about` — brief restaurant story, 2-column on desktop
- `#menu` — tabbed menu (Starters / Mains / Desserts / Drinks)
- `#gallery` — CSS grid photo gallery
- `#reservations` — booking form (name, date, time, party size, notes)
- `#contact` — address, phone, hours, embedded map placeholder

## CSS Conventions

- All colors, typography, and spacing live in CSS custom properties on `:root`
- Mobile-first breakpoints: `--bp-md: 768px`, `--bp-lg: 1200px`
- Never use `!important` — specificity should resolve naturally
- Font stack: Stitch exports Google Fonts — add the `<link>` tag to `<head>` when a specific font is chosen

## Updating Content

All editable text content lives directly in `src/index.html` — no build step, no templating engine. This is intentional to keep the project simple and editable without tooling.

## Testing Workflow

Run these skills in order after every build or significant code change. Do not skip or reorder them — each one catches different issues, and fixing earlier problems prevents false positives in later steps.

### Polish sequence (run in this order)

1. `/audit` — accessibility (alt text, contrast, ARIA, form labels), performance (image sizes, render-blocking resources), and code quality. Fix every flagged issue before moving on.
2. `/harden` — error handling and edge cases: empty form submissions, missing images, JS failures, network errors. Apply all suggested improvements.
3. `/clarify` — UX copy, error messages, labels, and microcopy. Fixes ambiguous or untranslated text before visual review.
4. `/adapt` — responsive layout across mobile, tablet, and desktop. Catches breakpoints that don't match the Stitch screen PNGs.
5. `/normalize` — design system consistency: spacing, colour tokens, type scale, component variants. Realigns drift from the Stitch design.
6. `/polish` — final quality pass: alignment, spacing, visual rhythm, pixel-level details. Run last so earlier fixes don't undo it.

### After deployment

7. `/vercel-plugin:verification` — confirms the live deployment works end-to-end: navigation, menu tabs, reservation form, mobile layout, and page load. Run this against the production URL, not localhost.

### What each skill will not catch

- Skills 1–6 work on source files — they will not catch server-side issues or broken asset paths that only appear on a real host.
- `/vercel-plugin:verification` requires a deployed URL — run it after every production push, not just the first deploy.

### Minimum bar before sharing with a client

- [ ] `/audit` passes with no critical or serious issues
- [ ] `/harden` passes with no unhandled failure modes
- [ ] `/clarify` passes with no ambiguous or placeholder copy remaining
- [ ] `/adapt` passes on mobile, tablet, and desktop viewports
- [ ] `/normalize` confirms design token consistency
- [ ] `/polish` passes with no alignment or spacing issues
- [ ] `/vercel-plugin:verification` confirms all sections load and are interactive on mobile

## SEO

All meta tags, Open Graph, and Twitter Card tags are pre-filled with placeholder values in `src/index.html`. Before launch:

- Replace every `thetablerestaurant.com` URL with the real domain in `<head>` and in the Schema.org `<script type="application/ld+json">` block at the bottom of `<body>`
- Replace restaurant name, address, phone, and hours in the JSON-LD block — Google uses this for rich results (star ratings, hours in search)
- `og:image` must point to a real 1200×630 px image; create `src/images/og-image.jpg` for this
- The `<link rel="canonical">` must match the production URL exactly — no trailing slash mismatch
- Validate Schema.org markup at https://search.google.com/test/rich-results after deployment
- Submit `src/sitemap.xml` to Google Search Console after first launch

## Performance

- Hero image has `fetchpriority="high"` and a `<link rel="preload">` in `<head>` — keep these two paths in sync when the hero image changes; never add `loading="lazy"` to the hero
- All below-fold images already have `loading="lazy"` — keep it on every image that is not visible on first load
- Google Fonts: paste the Stitch-exported `<link rel="stylesheet">` after the two preconnect tags already in `<head>`; the URL must include `&display=swap` to prevent invisible text during font load
- For production, run `src/css/style.css` through a CSS minifier (Lightning CSS, cssnano, or the Vercel build pipeline) — the source file is intentionally unminified for readability

## Accessibility

- Skip nav link is the very first focusable element in `<body>` — do not move or remove it; it allows keyboard and screen-reader users to skip the navbar
- One `<h1>` per page (the hero headline); every section uses `<h2>`; subsections use `<h3>` — never skip levels
- All images must have descriptive `alt` text; purely decorative images use `alt=""`
- All interactive elements (buttons, links, form controls) have visible `:focus-visible` styles already — do not override them with `outline: none`
- The form shows inline `aria-invalid` and error messages on failed validation — preserve this pattern for any new fields
- Test with keyboard-only navigation (Tab, Shift+Tab, Enter, Space, arrow keys) and with macOS VoiceOver before delivery

## Formspree (contact form)

The reservation form POSTs to Formspree — no backend required, free tier covers 50 submissions/month.

Setup:
1. Sign up at https://formspree.io
2. Create a new form → copy the endpoint URL (format: `https://formspree.io/f/xxxxxxxx`)
3. Replace `YOUR_FORM_ID` in the form `action` attribute in `src/index.html`
4. Test by submitting the form — you should receive an email at the address linked to the Formspree account

Implementation notes:
- Form submits via `fetch` (no page reload); success/error messages appear in `#form-status`
- The `_gotcha` honeypot field catches bots — do not remove it
- The `_subject` hidden field sets the subject line of notification emails
- For > 50 submissions/month: upgrade Formspree, or swap the `fetch` call in `js/main.js` with a different endpoint (Netlify Forms, a serverless function, etc.)

## Google Analytics 4

1. Create a GA4 property at https://analytics.google.com → Admin → Create Property
2. Copy the Measurement ID (format: `G-XXXXXXXXXX`)
3. Replace the placeholder in `src/index.html`: `window.GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'`
4. Analytics only loads after the visitor clicks "Accept All" in the cookie banner — do not bypass this
5. Verify it works: open Chrome DevTools → Network tab → accept cookies → look for requests to `googletagmanager.com`
6. If adding other analytics or tracking scripts (heatmaps, social pixels), add them inside the `loadAnalytics()` function in `src/js/main.js`

## Cookie Consent (GDPR / Spain)

The cookie banner is required when serving visitors in the EU and is pre-wired to GA4.

- Consent stored in `localStorage` key `cookie_consent` as either `'accepted'` or `'necessary'`
- "Accept All" → stores `accepted`, calls `loadAnalytics()`
- "Necessary Only" → stores `necessary`, GA4 never loads
- The banner is shown with a 600 ms delay on first visit (no preference stored yet)
- Do not add any third-party tracking outside of `loadAnalytics()` in `js/main.js` — everything consent-gated belongs there
- To reset consent for testing: `localStorage.removeItem('cookie_consent')` in the browser console

## Favicon & Web App Manifest

- `src/favicon.svg` — SVG placeholder with a branded "T"; replace with the actual brand mark (SVG favicons work in all modern browsers)
- `src/site.webmanifest` — update `name`, `short_name`, and `description`; create two PNG icons:
  - `src/images/icon-192.png` — 192×192 px (Android home screen)
  - `src/images/icon-512.png` — 512×512 px (Android splash, maskable)
- `src/images/apple-touch-icon.png` — 180×180 px PNG (iOS home screen); referenced in `<head>` already

## Privacy Policy Page

`src/privacy.html` is a GDPR-compliant privacy policy placeholder. Before launch:

- Replace every `<!-- UPDATE -->` comment with real restaurant information
- Update the restaurant legal name, registration number (CIF), and address in sections 1 and 6
- Set the "Last updated" date
- Adjust the data-retention period in section 5
- Add or remove third-party processors in section 4 to match what the site actually uses
- Link to this page from the footer and the cookie banner (add an `href="privacy.html"` link)
- The page is marked `noindex` — search engines will not index it (correct behaviour for a legal page)

## 404 Page

`src/404.html` is a branded "This table doesn't exist" page. Hosting configuration:
- **Vercel** — automatic; Vercel serves any file named `404.html` at the root of the output
- **Netlify** — add `[[redirects]] from="/*" to="/404.html" status=404` in `netlify.toml`
- **Apache** — add `ErrorDocument 404 /404.html` to `.htaccess`
- **Nginx** — add `error_page 404 /404.html;` to the server block

## robots.txt & sitemap.xml

Both files live in `src/` (served at the root of the deployed site).

- `src/robots.txt` — replace `thetablerestaurant.com` with the actual domain before launch
- `src/sitemap.xml` — replace the domain and update `<lastmod>` whenever content changes significantly; submit to Google Search Console after first deployment

## WhatsApp Click-to-Chat

A floating green button sits fixed at the bottom-right of every page. Essential for Barcelona restaurants where WhatsApp is the primary booking channel.

- Update `data-phone` on `#whatsapp-btn` in `src/index.html` — international format, no `+` or spaces (e.g. `34612345678` for a Barcelona number)
- The pre-fill message text is automatically translated per language by `js/i18n.js` — update the `whatsapp.message` key in each language object if needed
- Do not hardcode a message in the `href` directly; the JS overwrites it on page load using the stored language preference
- Test on a real phone — the button should open WhatsApp with the pre-filled message

## Google Maps Embed

The contact section has a placeholder `<div class="map-placeholder">`. To replace it with a real embed:

1. Go to maps.google.com → search the restaurant address → Share → Embed a map → Copy HTML
2. Replace the `<div class="map-placeholder">` in `src/index.html` with the copied `<iframe>` tag
3. Remove the `width` and `height` attributes from the `<iframe>` — the CSS `contact__map` class handles sizing
4. The iframe automatically inherits the `aspect-ratio: 4/3` and `border-radius` from `.contact__map`

## Instagram Feed

The `#instagram` section has a placeholder between gallery and reservations. Three no-backend options:

| Option | Cost | Ease | Notes |
|---|---|---|---|
| **Elfsight** | Free tier (200 views/mo) | Paste embed code | Easiest — no API setup |
| **EmbedSocial** | Free tier (100 views/mo) | Paste embed code | More control over layout |
| **Instafeed.js** | Free | Add script + token | Requires Meta API token setup |

For any option: replace the `<div class="instagram__placeholder">` in `src/index.html` with the provider's embed code. The `#instagram` section and `.instagram__placeholder` CSS can then be removed since the provider's widget handles its own layout.

Update the `href` on the "Follow on Instagram" button to the real profile URL.

## Loading Screen

A full-screen overlay with the restaurant name fades in on first page load, then fades out after the page is ready.

- Shows **once per browser session** (tracked via `sessionStorage` key `visited`) — refreshing the page skips it
- To show it every visit: remove the `sessionStorage` check in `js/main.js`
- To change the displayed text: edit `<p class="loader__name">The Table</p>` in `src/index.html`
- Timing is controlled by the `500` ms `setTimeout` in `js/main.js` and the `0.45s` CSS transition on `.loader`

## Smooth Scroll

`html { scroll-behavior: smooth }` is already set in `src/css/style.css`. All anchor links (`href="#section"`) scroll smoothly automatically.

Every `section[id]` also has `scroll-margin-top: calc(var(--nav-height) + var(--space-3))` so content is never hidden under the sticky nav after scrolling. If the nav height changes, update `--nav-height` in `:root` and the scroll offset updates automatically.

For browsers that don't support `scroll-behavior: smooth` (Safari < 15.4), the polyfill is not included — native CSS support is now > 96% globally.

## Back to Top Button

A circular button appears in the bottom-right corner (above the WhatsApp button) after scrolling 400 px, then hides again near the top.

- Scroll threshold: change `THRESHOLD = 400` in `js/main.js`
- Position: `.back-to-top` in `src/css/style.css` — the `bottom` value accounts for the WhatsApp button height; adjust if the WhatsApp button size changes
- Hover colour changes to the brand primary — update in `.back-to-top:hover` if the brand colour changes

## Print Stylesheet (Menu)

`src/css/print.css` is linked with `media="print"` so it only loads when printing. It hides everything except the menu section and expands all tabs so the full menu prints on one or two pages.

- The print header ("The Table — Seasonal Menu") is injected via CSS `content:` on `#menu::before` — update it there, not in HTML
- Category names (Starters, Mains…) are also injected via `::before` content — update them in `print.css` to match any translated menu tab labels
- For a Spanish menu print, duplicate the `::before` rules in `print.css` with Spanish text, gated on `[lang="es"] #tab-starters::before { content: 'Entrantes'; }` etc.
- Test by pressing Ctrl/Cmd+P in the browser — preview should show only the menu

## Multi-Language Support (ES / CA / EN)

The site supports English, Spanish, and Catalan via `src/js/i18n.js`. Language preference is stored in `localStorage` key `preferred_lang`.

### How it works

- Every translatable UI element has a `data-i18n="key"` attribute
- Input/textarea/select placeholders use `data-i18n-ph="key"`
- On page load, `initLang()` reads the stored preference and calls `applyLang()` which swaps all matching elements
- Clicking a `.lang-btn` (EN / ES / CA in the nav) calls `applyLang()` and saves the new preference
- The `<html lang>` attribute is updated automatically for accessibility and SEO

### Adding a new language

1. Add a new object to the `translations` map in `src/js/i18n.js` using an existing language as a template
2. Add a new `<button class="lang-btn" data-lang="xx">XX</button>` to the language switcher `<li class="nav__lang">` in `src/index.html`

### What is and isn't translated

**Translated by i18n.js:** nav links, hero content, section headings and labels, menu tab names, form labels and placeholders, submit button, cookie banner, footer nav, WhatsApp pre-fill message.

**Not translated (edit directly in HTML):** menu item names and descriptions, restaurant story paragraphs, address, phone number, opening hours, footer copyright. These are content, not UI chrome — the restaurant owner customises them directly.

### Updating translations

Edit the relevant key in the `en`, `es`, and `ca` objects in `src/js/i18n.js`. Changes take effect immediately on next page load.

## Restaurant-Specific Guidelines

- Hero images should be ≥ 1920px wide; compress to ≤ 300 KB with WebP where possible
- Menu items follow the pattern: `.menu-item` > `.menu-item__name` + `.menu-item__price` + `.menu-item__desc`
- Always include `aria-label` on icon-only buttons and descriptive `alt` text on all food images
