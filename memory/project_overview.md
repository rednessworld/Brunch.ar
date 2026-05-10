---
name: Project Overview
description: What this repo is, its structure, and workflow for Stitch ZIP exports
type: project
---

This is a static restaurant website template designed for use with Stitch (Anthropic's design tool) ZIP exports. No build tools — plain HTML/CSS/JS.

**Why:** User wants a ready-to-go template that can be quickly customized after dropping in a Stitch design export.

**How to apply:** Treat this as a zero-dependency project. Don't suggest build tools, frameworks, or npm unless the user explicitly asks. Keep all content editable directly in `src/index.html`.

## Structure

- `CLAUDE.md` — instructions for Claude on how to work with Stitch exports
- `README.md` — human-readable usage guide
- `src/index.html` — full single-page restaurant site (nav, hero, about, menu tabs, gallery, reservations form, contact, footer)
- `src/css/style.css` — CSS custom properties (design tokens), reset, and all layout/component styles
- `src/js/` — empty, reserved for `main.js` (menu tabs, mobile nav toggle, form handling)
- `src/images/` — empty, reserved for restaurant photos
- `design/` — empty, intended drop zone for raw Stitch ZIP contents

## Workflow for Stitch exports

1. Drop Stitch ZIP contents into `design/`
2. Copy CSS custom property values from Stitch output into `:root` in `src/css/style.css`
3. Replace placeholder image paths with exported images in `src/images/`
4. Preserve Stitch component class names for design-sync
