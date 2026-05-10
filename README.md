# Stitch Restaurant Template

A static restaurant website template designed to work seamlessly with [Stitch](https://stitch.withanthopic.com) ZIP exports. No build tools required — open `src/index.html` in a browser and start editing.

## Quick Start

1. Clone or download this repo
2. Open `src/index.html` in a browser to preview the template
3. Edit text content directly in `src/index.html`
4. Customize colors and fonts in `src/css/style.css` under `:root`

## Building from a Stitch Export

### Step 1 — Extract the Stitch ZIP

```
design/
└── (paste ZIP contents here)
```

The ZIP contains one `screen.png` per screen plus a design-token CSS or JSON file. Keep the `design/` folder open alongside your editor — the PNGs are the source of truth.

### Step 2 — Copy design tokens

Open the token file from the ZIP and copy colour, spacing, and type values into the `:root` block in `src/css/style.css`. Do not overwrite the reset or layout rules that are already there.

### Step 3 — Add fonts

If the design uses a self-hosted typeface, copy `.woff2` files into `src/fonts/` and add `@font-face` declarations at the top of `src/css/style.css`. For Google Fonts, add the preconnect and `<link rel="stylesheet">` tags to `<head>` in `src/index.html`.

### Step 4 — Drop in photos

Put optimised restaurant photos in `src/images/` and update the `src` paths in `src/index.html` to match. Hero image: ≥ 1920 px wide, ≤ 300 KB WebP.

### Step 5 — Run the polish sequence

```
/audit → /harden → /clarify → /adapt → /normalize → /polish
```

Run each skill in order and fix every flagged issue before moving to the next. See CLAUDE.md for what each skill checks.

## Sections

| Section | Description |
|---|---|
| Navigation | Sticky nav with logo, anchor links, and EN / ES / CA switcher |
| Hero | Full-bleed image with headline and reservation CTA |
| About | Restaurant story, 2-up layout on desktop |
| Menu | Tabbed menu (Starters / Mains / Desserts / Drinks) |
| Gallery | CSS grid photo showcase |
| Instagram | Placeholder for third-party embed (Elfsight, EmbedSocial, or Instafeed.js) |
| Reservations | Booking form (Formspree, no backend) |
| Contact | Address, hours, and Google Maps embed |

## Customization

**Colors & Typography** — edit CSS variables in `src/css/style.css`:

```css
:root {
  --color-primary: #your-brand-color;
  --font-heading: 'Your Font', serif;
}
```

**Self-hosted fonts** — add `.woff2` files to `src/fonts/`, then declare them at the top of `src/css/style.css`:

```css
@font-face {
  font-family: 'FontName';
  src: url('../fonts/fontname-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

**Menu Items** — duplicate this block in `src/index.html`:

```html
<div class="menu-item">
  <span class="menu-item__name">Dish Name</span>
  <span class="menu-item__price">€00</span>
  <p class="menu-item__desc">Short description of the dish.</p>
</div>
```

**Reservation Form** — sign up at [formspree.io](https://formspree.io), create a form, and replace `YOUR_FORM_ID` in the `action` attribute of `<form id="reservation-form">`.

**WhatsApp Button** — update `data-phone` on `#whatsapp-btn` with your number in international format, no `+` or spaces (e.g. `34612345678`).

## File Structure

```
src/
├── index.html          ← all content lives here
├── privacy.html        ← GDPR privacy policy (fill in before launch)
├── 404.html            ← branded error page
├── favicon.svg         ← replace with actual brand mark
├── site.webmanifest    ← update name and short_name
├── robots.txt          ← replace domain before launch
├── sitemap.xml         ← replace domain and update lastmod
├── css/
│   ├── style.css       ← design tokens + layout
│   └── print.css       ← menu print stylesheet
├── fonts/              ← self-hosted .woff2 files go here
├── js/
│   ├── main.js         ← menu tabs, mobile nav, form handling
│   └── i18n.js         ← EN / ES / CA translations
└── images/             ← restaurant photos
design/                 ← paste Stitch ZIP contents here
```

## Multi-Language Support

The template ships with English, Spanish, and Catalan (EN / ES / CA) via `src/js/i18n.js`. UI strings are keyed with `data-i18n` attributes in the HTML; body copy (menu items, about text, hours) is edited directly in the HTML.

Language preference is stored in `localStorage` key `preferred_lang`.

## Pre-launch Checklist

- [ ] Replace `thetablerestaurant.com` with the real domain in `<head>`, `robots.txt`, `sitemap.xml`, and the JSON-LD block
- [ ] Fill in the restaurant name, address, phone, and hours in the JSON-LD block
- [ ] Replace `YOUR_FORM_ID` in the reservation form action attribute
- [ ] Update `data-phone` on the WhatsApp button
- [ ] Replace `G-XXXXXXXXXX` with your GA4 Measurement ID (or remove GA entirely)
- [ ] Update `src/privacy.html` with real legal information
- [ ] Create `src/images/og-image.jpg` (1200 × 630 px) for social sharing
- [ ] Replace `src/favicon.svg` with the actual brand mark
- [ ] Run `/audit`, `/harden`, `/clarify`, `/adapt`, `/normalize`, `/polish` in order
- [ ] Run `/vercel-plugin:verification` after first deployment

## No Build Step

This template is intentionally zero-dependency. To deploy, upload the `src/` folder to any static host (Vercel, Netlify, GitHub Pages, or a plain web server).
