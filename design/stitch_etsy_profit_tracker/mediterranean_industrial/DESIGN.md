---
name: Mediterranean Industrial
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4c463e'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#7d766d'
  outline-variant: '#cec5bb'
  surface-tint: '#675d4e'
  primary: '#675d4e'
  on-primary: '#ffffff'
  primary-container: '#f5e6d3'
  on-primary-container: '#716657'
  inverse-primary: '#d2c4b2'
  secondary: '#9f402d'
  on-secondary: '#ffffff'
  secondary-container: '#fd876f'
  on-secondary-container: '#732010'
  tertiary: '#4d6359'
  on-tertiary: '#ffffff'
  tertiary-container: '#d6eee1'
  on-tertiary-container: '#576d62'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#efe0cd'
  primary-fixed-dim: '#d2c4b2'
  on-primary-fixed: '#221a0f'
  on-primary-fixed-variant: '#4f4538'
  secondary-fixed: '#ffdad3'
  secondary-fixed-dim: '#ffb4a5'
  on-secondary-fixed: '#3e0500'
  on-secondary-fixed-variant: '#802918'
  tertiary-fixed: '#d0e8db'
  tertiary-fixed-dim: '#b4ccc0'
  on-tertiary-fixed: '#0a1f18'
  on-tertiary-fixed-variant: '#364b42'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  button:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

This design system synthesizes the sun-drenched warmth of the Mediterranean coast with the raw, structural integrity of a Barcelona industrial loft. The brand personality is sophisticated yet welcoming, targeting an affluent audience that appreciates both culinary artistry and architectural heritage. 

The aesthetic leans into a **Tactile Minimalism**. It avoids the sterile coldness of traditional modernism by layering organic textures—such as botanical silhouettes and masonry-inspired dividers—over a clean, structured grid. The goal is a sensory-heavy digital experience that feels as "appetizing" as the menu, evoking the smell of fresh herbs and the warmth of kiln-fired terracotta. High visual density is achieved through rich typography and detailed imagery rather than cluttered interface elements.

## Colors

The palette is driven by natural, earthy tones that ground the digital experience in the physical world. 

- **Primary (Warm Biscuit):** Used for all main page backgrounds to create a warm, parchment-like canvas that is easier on the eyes than pure white.
- **Secondary (Soft Terracotta):** Reserved for primary actions, notifications, and interactive states. It provides a vibrant, sun-baked energy that draws the eye to conversion points.
- **Tertiary (Deep Forest Green):** The primary color for typography, iconography, and botanical accents. This provides high-contrast legibility while maintaining the organic theme.
- **Neutral:** A muted gray used exclusively for subtle borders, secondary metadata, and structural lines to reference industrial materials like weathered steel or concrete.

## Typography

The typographic hierarchy relies on the contrast between the classic, high-contrast serifs of **Playfair Display** and the geometric, urban clarity of **Montserrat**.

- **Playfair Display** is used for all editorial headers and "moments of delight." It should be set with tight letter spacing for large display sizes to emphasize its upscale, fashion-forward roots.
- **Montserrat** handles the functional heavy lifting. Body text should maintain generous line heights to ensure readability against the textured background. 
- Use **Label Caps** for navigation items and small overlines to introduce sections, grounding the "industrial loft" aspect with structured, architectural labeling.

## Layout & Spacing

This design system utilizes a **Fixed Grid** for desktop to maintain an editorial, magazine-like feel, and a **Fluid Grid** for mobile devices. 

- **Grid:** A 12-column system is used for desktop (1280px max-width). Elements should often span 6 or 8 columns to leave intentional "breathing room" (white space) on the sides, mimicking a high-end restaurant menu.
- **Rhythm:** An 8px base unit governs all padding and margins. 
- **Sectioning:** Vertical spacing is intentionally generous (120px+) to allow the botanical accents and high-quality food photography to stand out without competing with UI elements.
- **Mobile:** On mobile, margins shrink to 16px, and the layout collapses to a single column, prioritizing large-scale imagery and legible typography.

## Elevation & Depth

To maintain the "Mediterranean Chic" aesthetic, depth is created through **Tonal Layers** rather than heavy drop shadows. 

1.  **Base Layer:** The Warm Biscuit (#F5E6D3) acts as the foundation.
2.  **Surface Layer:** Cards and interactive containers use a slightly lighter tint of the background or a 1px border in Deep Forest Green at 10% opacity.
3.  **Soft Shadows:** When elevation is required (e.g., for floating action buttons or dropdown menus), use "Ambient Shadows"—extremely diffused, 15% opacity Deep Forest Green tints with a 20px-30px blur. This mimics natural, soft sunlight rather than artificial light.
4.  **Glassmorphism:** Use subtle backdrop blurs (8px to 12px) on navigation bars to allow the "sensory" background colors and images to bleed through as the user scrolls.

## Shapes

The shape language is defined as **Rounded (Level 2)**. 

Standard components (buttons, inputs) use a 0.5rem (8px) corner radius. This strikes a balance between the hard angles of industrial architecture and the organic, soft curves of Mediterranean pottery. 

- **Large Surfaces:** Cards and image containers should use `rounded-lg` (16px) or `rounded-xl` (24px) to feel more inviting.
- **Decorative Elements:** Botanical icons and flourishes should remain purely organic and non-geometric to contrast against the structured grid of the layout.

## Components

- **Buttons:** Primary buttons use the Soft Terracotta (#E2725B) background with White text. Secondary buttons are "Ghost" style with a Deep Forest Green border and Montserrat Bold text.
- **Inputs:** Fields should have a 1px border in Deep Forest Green (20% opacity) on the Warm Biscuit background. On focus, the border thickens and the color shifts to Soft Terracotta.
- **Cards:** Used for menu items. They should feature a top-aligned image with a subtle 1px border. The Deep Forest Green is used for the "Dish Name" (Playfair Display) and Montserrat for price and description.
- **Chips/Tags:** Used for dietary requirements (e.g., "Vegan", "Gluten-Free"). These use a Deep Forest Green background with very small Montserrat white text, mimicking industrial metal tags.
- **Botanical Flourishes:** Small, vector-based leaf or vine silhouettes in Deep Forest Green (at 5-10% opacity) should be placed asymmetrically behind sections to enhance the sensory atmosphere.
- **Interactive Lists:** Menu lists should use "dot leaders" (e.g., Dish Name . . . . . $18) to lean into the upscale restaurant aesthetic.