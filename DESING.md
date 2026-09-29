---
version: 1.0
name: DreamGIS-design-system
description: A deep-navy, data-intelligence B2B brand anchored on a dark satellite canvas and DreamGIS Electric Blue (#006aff), the single voltage that carries every primary CTA, accent highlight, and interactive state. Type runs Montserrat at modest-to-bold weights — display sits at 36–42px in weight 700 for authority, while body and UI chrome run at 400–500 for readability. The palette is exclusively blue-spectrum: five blue stops from near-black (#0b0721) to electric (#006aff) plus a full tint ladder, with white (#ffffff) and light gray (#f2f2f2) as the only non-blue surfaces. Satellite imagery textures used as hero backgrounds reinforce the geo-intelligence positioning. Corner radii are moderate — 8px on buttons and cards, no pill shapes except small badges — projecting technological precision over consumer friendliness.

colors:
  primary: "#006aff"
  primary-hover: "#0058d4"
  primary-active: "#0047ab"
  primary-disabled: "#99C3FF"
  primary-subtle: "#CCE1FF"
  navy-1: "#0b0721"
  navy-2: "#000062"
  navy-2-300: "#333381"
  navy-2-500: "#6666A1"
  navy-2-700: "#9999C0"
  navy-2-900: "#CCCCE0"
  navy-3: "#004087"
  navy-3-300: "#33669F"
  navy-3-500: "#668CB7"
  navy-3-700: "#99B3CF"
  navy-3-900: "#CCD9E7"
  navy-4: "#14152c"
  navy-5: "#2f3d91"
  blue-300: "#3388FF"
  blue-500: "#66A6FF"
  blue-700: "#99C3FF"
  blue-900: "#CCE1FF"
  surface-navy: "#333658"
  surface-slate: "#666882"
  surface-mist: "#999BAB"
  surface-cloud: "#CCCDD5"
  canvas: "#ffffff"
  surface-soft: "#f2f2f2"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-canvas: "#0b0721"
  body-text: "#14152c"
  muted: "#666882"
  muted-soft: "#999BAB"
  hairline: "#CCCDD5"
  hairline-soft: "#e8e8ed"
  border-strong: "#999BAB"
  error: "#d93025"
  error-hover: "#b52118"
  success: "#1a8a3c"
  scrim: "#000000"

typography:
  display-xl:
    fontFamily: "'Montserrat', -apple-system, system-ui, 'Helvetica Neue', sans-serif"
    fontSize: 42px
    fontWeight: 700
    lineHeight: 1.19
    letterSpacing: -0.84px
  display-lg:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: -0.72px
  display-md:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.29
    letterSpacing: -0.42px
  display-sm:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: -0.28px
  title-lg:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0
  title-md:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  title-sm:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  body-md:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  caption:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0
  caption-sm:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  badge:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: 0.22px
  micro-label:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0.24px
  uppercase-tag:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 1px
    textTransform: uppercase
  button-md:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.16px
  button-sm:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: 0.14px
  nav-link:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0
  link:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  lang-tag:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0.5px
    textTransform: uppercase

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  base: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px
  section-lg: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 14px 32px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    border: "1px solid {colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 13px 31px
    height: 48px
  button-secondary-dark:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    border: "1px solid {colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 13px 31px
    height: 48px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
  button-sm:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.md}"
    padding: 10px 20px
    height: 38px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-canvas}"
    typography: "{typography.nav-link}"
    height: 72px
    borderBottom: "1px solid {colors.hairline-soft}"
  top-nav-dark:
    backgroundColor: "{colors.navy-1}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 72px
  nav-link-active:
    textColor: "{colors.primary}"
    typography: "{typography.nav-link}"
    fontWeight: 600
  lang-switcher:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.lang-tag}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  hero-dark:
    backgroundColor: "{colors.navy-1}"
    textColor: "{colors.on-dark}"
    backgroundImage: "satellite texture overlay at 20% opacity"
    padding: "{spacing.section-lg} 0"
  hero-gradient:
    background: "linear-gradient(135deg, {colors.navy-1} 0%, {colors.navy-2} 50%, {colors.primary} 100%)"
    textColor: "{colors.on-dark}"
    padding: "{spacing.section-lg} 0"
  section-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-canvas}"
    padding: "{spacing.section} 0"
  section-soft:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.on-canvas}"
    padding: "{spacing.section} 0"
  section-dark:
    backgroundColor: "{colors.navy-1}"
    textColor: "{colors.on-dark}"
    padding: "{spacing.section} 0"
  section-navy:
    backgroundColor: "{colors.navy-2}"
    textColor: "{colors.on-dark}"
    padding: "{spacing.section} 0"
  service-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-canvas}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 32px
    border: "1px solid {colors.hairline-soft}"
  service-card-dark:
    backgroundColor: "{colors.navy-4}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 32px
    border: "1px solid {colors.surface-navy}"
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-canvas}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    overflow: hidden
  product-card-image:
    aspectRatio: "16 / 9"
    rounded: "{rounded.none}"
  stat-block:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    accentColor: "{colors.primary}"
  partner-logo-strip:
    backgroundColor: "{colors.canvas}"
    opacity: "0.7 default, 1 on hover"
    padding: "{spacing.xl} 0"
    gap: "{spacing.xl}"
  partner-badge:
    backgroundColor: "{colors.surface-soft}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    typography: "{typography.uppercase-tag}"
    textColor: "{colors.muted}"
  cobranding-official-partner:
    label: "OFFICIAL PARTNER"
    typography: "{typography.uppercase-tag}"
    textColor: "{colors.muted}"
  cobranding-official-distributor:
    label: "OFFICIAL DISTRIBUTOR"
    typography: "{typography.uppercase-tag}"
    textColor: "{colors.muted}"
  icon-container:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    size: 48px
  icon-container-dark:
    backgroundColor: "rgba(0, 106, 255, 0.15)"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    size: 48px
  tag-badge:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.primary}"
    typography: "{typography.badge}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  tag-badge-dark:
    backgroundColor: "rgba(0, 106, 255, 0.2)"
    textColor: "{colors.blue-700}"
    typography: "{typography.badge}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-canvas}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.hairline}"
    padding: 14px 16px
    height: 52px
  text-input-focus:
    border: "2px solid {colors.primary}"
  form-label:
    textColor: "{colors.body-text}"
    typography: "{typography.caption}"
  footer-dark:
    backgroundColor: "{colors.navy-1}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: 64px 80px
  footer-link:
    textColor: "{colors.muted-soft}"
    typography: "{typography.body-sm}"
  footer-link-hover:
    textColor: "{colors.on-dark}"
  legal-band:
    backgroundColor: "{colors.navy-4}"
    textColor: "{colors.muted}"
    typography: "{typography.caption-sm}"
    borderTop: "1px solid {colors.surface-navy}"
  satellite-texture:
    type: "background overlay"
    source: "satellite imagery (blue-toned)"
    blendMode: "overlay or multiply"
    opacity: "0.15–0.25"
    usage: "hero sections, dark section backgrounds"
---

## Overview

DreamGIS is a geo-intelligence B2B platform headquartered in Bogotá, Colombia. The design system projects two brand archetypes simultaneously: **The Wise** (knowledge, innovation, technical authority) and **The Safer** (trust, data security, strategic reliability). These dual personalities produce a design language that is deep and authoritative — not cold or corporate.

The canvas defaults to **deep navy** (`{colors.navy-1}` — #0b0721) on hero and dark sections, with **pure white** (`{colors.canvas}` — #ffffff) for content-dense areas. A single accent voltage of **Electric Blue** (`{colors.primary}` — #006aff) carries every primary CTA, active state, icon accent, and brand highlight. No secondary brand color exists in mainline UI — the full tint ladder of all five navy stops serves as the tonal vocabulary instead.

Type runs **Montserrat** exclusively — a clean geometric sans that transfers well across digital, presentation, and print without requiring a custom license. Display headlines run at 700 (main titles) and 500–600 (section titles); body and navigation chrome at 400. The system trusts weight contrast over size contrast for hierarchy within dark surfaces.

Shape language is **precise but not harsh**. Buttons and cards use 8–12px radius (`{rounded.md}` / `{rounded.lg}`). Badges use full pill (`{rounded.full}`). There are no hard 0px corners on interactive elements. The restraint in rounding signals technical precision — distinct from consumer apps that use heavy pill-shapes throughout.

**Key Characteristics:**
- Deep navy base: `{colors.navy-1}` (#0b0721) for hero/dark sections; white canvas for content sections. No single dominant background — alternate freely to control rhythm.
- Single accent: `{colors.primary}` (#006aff — "Electric Blue") on all CTAs, active states, icon fills, and inline brand links.
- Satellite imagery textures: blue-toned aerial/satellite photos used as section backgrounds at 15–25% opacity overlay. Core to geo-intelligence identity.
- Montserrat only: one family, five weights (Light 300, Regular 400, Medium 500, SemiBold 600, Bold 700, Black 900). No separate display face.
- Five-stop blue palette: navy-1 through navy-4 plus primary. Every UI surface and tonal shift lives within this spectrum.
- Modular grid system: layouts built on 4× unit blocks at ratios 1x/2x/3x/4x. All layout decisions reference this grid.
- Bilingual (ES/EN): language switcher in nav — flag icon + uppercase 2-letter code.
- Partner badging: "OFFICIAL PARTNER" and "OFFICIAL DISTRIBUTOR" uppercase labels in cobranding contexts.

## Brand Personality

### Archetypes

**The Wise (El Sabio):** Knowledge-first. All content centers on education, innovation, discovery, and technical insight in satellite data and geo-intelligence. The brand speaks with expertise — not to impress, but to solve.

**The Safer (El más Seguro):** Trust-anchored. DreamGIS positions as the reliable partner for strategic data decisions. Security and data integrity are implicit in the visual language: clean structure, high contrast, zero decorative noise.

### Tone
- Formal but accessible — technical depth without jargon walls
- Direct, informative, educational
- Language choice: clear professional Spanish (ES primary) + English (EN secondary)
- Taglines: "Transformamos datos en decisiones inteligentes", "Optimizamos su negocio con información geo-inteligente", "Desarrollamos soluciones geo-inteligentes"

## Colors

### Brand & Accent
- **Electric Blue** (`{colors.primary}` — #006aff): The single brand color. All primary CTAs ("Contáctanos", "Comencemos"), active nav states, icon accent fills, and inline brand links. High luminance on dark backgrounds — the most immediate color moment in any DreamGIS surface.
- **Electric Blue Hover** (`{colors.primary-hover}` — #0058d4): Pointer-over state on primary buttons and links.
- **Electric Blue Active** (`{colors.primary-active}` — #0047ab): Press / pointer-down state.
- **Electric Blue Disabled** (`{colors.primary-disabled}` — #99C3FF): Pale tint on disabled CTAs.
- **Electric Blue Subtle** (`{colors.primary-subtle}` — #CCE1FF): Icon container backgrounds, tag badge fills on light surfaces.

### Navy Palette (brand surfaces + tonal scale)
- **Navy 1** (`{colors.navy-1}` — #0b0721): Deepest surface. Hero sections, dark nav, footer background, full-bleed dark bands. The brand's characteristic near-black-blue.
- **Navy 2** (`{colors.navy-2}` — #000062): Deep pure navy. Used in gradients and dark card surfaces. Pantone 2748 C equivalent.
- **Navy 3** (`{colors.navy-3}` — #004087): Mid navy. Dark-mode card borders, secondary surface on dark backgrounds. Pantone 2186 C equivalent.
- **Navy 4** (`{colors.navy-4}` — #14152c): Slightly warmer deep surface. Legal band backgrounds, dark-mode input fills, sub-footer.
- **Navy 5** (`{colors.navy-5}` — #2f3d91): Medium slate-navy. Decorative tonal accent in gradient compositions.

**Tint ladders** (each navy stop at 33/66 opacity over white):

| Base | 300 | 500 | 700 | 900 |
|---|---|---|---|---|
| Navy 1 (#0b0721) | #333658 | #666882 | #999BAB | #CCCDD5 |
| Navy 2 (#000062) | #333381 | #6666A1 | #9999C0 | #CCCCE0 |
| Navy 3 (#004087) | #33669F | #668CB7 | #99B3CF | #CCD9E7 |
| Primary (#006aff) | #3388FF | #66A6FF | #99C3FF | #CCE1FF |

### Surfaces
- **Canvas** (`{colors.canvas}` — #ffffff): Default page floor for content-heavy sections, cards, and forms.
- **Surface Soft** (`{colors.surface-soft}` — #f2f2f2): Lightest fill. Disabled fields, alt section backgrounds, partner logo cells.
- **Surface Navy** (`{colors.surface-navy}` — #333658): Dark card fill and border on very dark backgrounds.
- **Surface Slate** (`{colors.surface-slate}` — #666882): Mid-dark muted surface for secondary elements on dark.
- **Surface Mist** (`{colors.surface-mist}` — #999BAB): Light-dark muted surface. Secondary card borders on light surfaces.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — #CCCDD5): Default 1px border — card outlines on light backgrounds, form input resting state.
- **Hairline Soft** (`{colors.hairline-soft}` — #e8e8ed): Lightest divider — section separators, nav bottom line on white.
- **Border Strong** (`{colors.border-strong}` — #999BAB): Heavier stroke — focused input outline (light variant), disabled button outlines.

### Text
- **On Canvas** (`{colors.on-canvas}` — #0b0721): Primary text on white surfaces. Display, body, and nav labels on light backgrounds.
- **Body Text** (`{colors.body-text}` — #14152c): Running body text and secondary labels on light surfaces. Slightly warmer than pure navy-1.
- **Muted** (`{colors.muted}` — #666882): Inactive nav links, secondary card meta, caption text.
- **Muted Soft** (`{colors.muted-soft}` — #999BAB): Placeholder text, footer link default state, legal copy.
- **On Dark / On Primary** (`{colors.on-dark}` — #ffffff): All text on navy or primary surfaces.

### Semantic
- **Error** (`{colors.error}` — #d93025): Form validation errors. Distinct from primary blue — not a blue variant.
- **Success** (`{colors.success}` — #1a8a3c): Confirmation states, positive status indicators.

### Gradient
- **Brand Gradient**: `linear-gradient(135deg, {colors.navy-1} 0%, {colors.navy-2} 50%, {colors.primary} 100%)` — used on hero sections and featured CTAs. Reads as "dark space → electric intelligence."
- **Satellite Texture Overlay**: Blue-toned satellite/aerial imagery at 15–25% opacity over dark sections. Not a gradient — real photographic content used as visual texture. Reinforces geo-intelligence positioning.

### Scrim
- **Scrim** (`{colors.scrim}` — #000000 at 60% opacity): Modal backdrop. Slightly heavier than consumer apps to match the serious data-intelligence context.

## Typography

### Font Family
The system runs **Montserrat** for everything — display, body, navigation, captions, UI labels. Fallback stack: `-apple-system, system-ui, "Helvetica Neue", sans-serif`.

Montserrat is a Google Font — freely licensed, loaded via Google Fonts CDN or self-hosted. Weights in use: **300** (Light), **400** (Regular), **500** (Medium), **600** (SemiBold), **700** (Bold). Weight 900 (Black) reserved for impact titles in event/presentation materials — use sparingly in web UI.

There is no secondary display family. Montserrat's geometric structure carries the full scale from micro-labels to 42px headlines.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 42px | 700 | 1.19 | -0.84px | Homepage hero h1, event titles |
| `{typography.display-lg}` | 36px | 700 | 1.22 | -0.72px | Section hero h1, product page h1 |
| `{typography.display-md}` | 28px | 700 | 1.29 | -0.42px | Section headlines ("Nuestros Servicios") |
| `{typography.display-sm}` | 28px | 500 | 1.29 | -0.28px | Sub-section titles, stat labels |
| `{typography.title-lg}` | 18px | 600 | 1.33 | 0 | Card titles, feature block heads |
| `{typography.title-md}` | 16px | 600 | 1.25 | 0 | Nav section labels, card meta heads |
| `{typography.title-sm}` | 16px | 500 | 1.25 | 0 | Footer column heads |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running body text |
| `{typography.body-sm}` | 14px | 400 | 1.43 | 0 | Card descriptions, secondary meta |
| `{typography.caption}` | 14px | 500 | 1.29 | 0 | Form labels, data field labels |
| `{typography.caption-sm}` | 12px | 400 | 1.33 | 0 | Legal line, footer copyright |
| `{typography.badge}` | 11px | 700 | 1.18 | 0.22px | Product/status badges |
| `{typography.micro-label}` | 12px | 700 | 1.33 | 0.24px | Icon captions, table micro-labels |
| `{typography.uppercase-tag}` | 10px | 700 | 1.2 | 1px (uppercase) | "OFFICIAL PARTNER", "NEW", section eyebrows |
| `{typography.button-md}` | 16px | 600 | 1.25 | 0.16px | Primary and secondary CTA labels |
| `{typography.button-sm}` | 14px | 600 | 1.29 | 0.14px | Small button labels |
| `{typography.nav-link}` | 14px | 500 | 1.29 | 0 | Top nav item labels |
| `{typography.lang-tag}` | 12px | 700 | 1.33 | 0.5px (uppercase) | Language switcher "ES" / "EN" |
| `{typography.link}` | 14px | 400 | 1.43 | 0 | Inline body links |

### Principles
Weight is the primary hierarchy lever on dark surfaces — 700 headlines over 400 body reads clearly without relying on color. Never use Light (300) for functional UI copy; reserve it for large decorative pull-quotes.

Letter-spacing goes negative at display sizes (-0.42px to -0.84px) to optically tighten Montserrat's wide spacing at large sizes. At body sizes, tracking is 0 or minimal positive. Uppercase labels get +0.5px to +1px tracking regardless of size.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 80px · `{spacing.section-lg}` 120px.
- **Section padding (vertical):** `{spacing.section}` (80px) for standard content bands; `{spacing.section-lg}` (120px) for hero and flagship product sections. Generous vertical breathing room reinforces the enterprise/premium positioning — not the density-first approach of a consumer marketplace.
- **Card internal padding:** `{spacing.xl}` (32px) for service and product cards; `{spacing.lg}` (24px) for compact list-style cards.
- **Grid gutters:** `{spacing.lg}` (24px) between cards in 3-column grids; `{spacing.xl}` (32px) in 2-column feature layouts.

### Modular Grid System
DreamGIS layouts are built on a **4× block module**. Content columns are composed at integer multiples of the base module:
- **1x** — narrow sidebar labels, icon slots
- **2x** — partner logos, icon+label pairs, list items
- **3x** — content columns (body text + image grids)
- **4x** — full-width hero text blocks, feature showcases

This system applies to both web grid and print/presentation layouts, ensuring all digital touchpoints share the same visual DNA.

### Grid & Container
- **Max content width:** ~1280px centered on all pages. Padding: `{spacing.section}` (80px) horizontal at desktop.
- **Service/feature grid:** 3-column at desktop, with 24px gutters.
- **Product showcase (hero):** 2-column — image left (~55%), text+CTA right (~40%), 5% gap.
- **Partner logo strip:** horizontal flex row, centered, `{spacing.xl}` (32px) gap, constrained to ~800px width.
- **Stats row:** 3–4 equal columns with large display numerals (`{typography.display-lg}`) over small uppercase labels.
- **Footer:** 4-column link list at desktop, collapsing to 2-column at tablet and 1-column on mobile.

### Whitespace Philosophy
The system favors **generous vertical rhythm** — 80–120px section padding — to signal enterprise quality and let satellite imagery breathe. Card grids use 24px gutters, which is comfortable but not compressed. The result: "open authority" rather than consumer density.

## Elevation

One shadow tier plus flat baseline.

- **Flat (no shadow):** Hero, dark sections, footer, editorial bands. Dark surfaces carry depth via color — no shadow needed.
- **Card float:** `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06)` — applied to service cards, product cards, and form containers on light backgrounds. Soft layered shadow without the branded tint Airbnb uses.
- **Card hover lift:** `box-shadow: 0 4px 16px rgba(0, 106, 255, 0.12), 0 12px 32px rgba(0, 0, 0, 0.10)` — the blue tint in the hover shadow is a subtle brand moment: lifted cards cast Electric Blue.
- **Modal scrim:** `{colors.scrim}` at 60% opacity for dialogs and overlays.

No progressive elevation beyond two tiers. Depth comes from the dark/light section alternation and satellite image overlays.

## Components

### Buttons

**`button-primary`** — Electric Blue fill (#006aff), white text, 8px radius, 14×32px padding, 48px height, 600 weight. CTAs: "Contáctanos", "Comencemos", "Ver más".

**`button-primary-hover`** — Background shifts to #0058d4. No transform. Transition: 150ms ease.

**`button-primary-disabled`** — Pale blue tint (#99C3FF) fill with white text. `cursor: not-allowed`.

**`button-secondary`** — Transparent fill, Electric Blue 1px border, Electric Blue text. Same sizing. Used for secondary actions over white/light surfaces.

**`button-secondary-dark`** — Transparent fill, white 1px border, white text. Used over dark/navy backgrounds.

**`button-ghost`** — No fill, no border. Electric Blue text with underline on hover. "Ver más" style links.

**`button-sm`** — Same primary styling at 38px height, 10×20px padding, 14px label.

### Navigation

**`top-nav`** — White surface, 72px height, 1px hairline-soft bottom border. Logo left (imagotipo horizontal), nav links center-right, lang switcher flush right.

**`top-nav-dark`** — Navy-1 surface, no border. Used when hero immediately follows nav (transparent-to-dark transition). Logo swaps to white/on-dark variant.

**`nav-link-active`** — Electric Blue text, 600 weight. No underline rule (unlike Airbnb). The color shift alone signals the active state.

**`lang-switcher`** — Flag icon + uppercase 2-letter code ("ES" / "EN") in `{typography.lang-tag}`. Tap/click cycles language. Neutral color at rest, Electric Blue on active locale.

### Hero

**`hero-dark`** — Full-width, navy-1 background, white text, 120px vertical padding. Satellite imagery texture at 20% opacity as background layer. Contains: eyebrow tag (uppercase), display-xl headline, body-md sub-copy, primary CTA + secondary CTA.

**`hero-gradient`** — Same structure but uses the brand gradient (navy-1 → navy-2 → primary at 135°) instead of flat navy. Used for landing pages and campaign heroes.

### Service / Feature Cards

**`service-card`** — White fill, 1px hairline-soft border, 12px radius, 32px padding. Contains: `{component.icon-container}` top, `{typography.title-lg}` title, `{typography.body-sm}` description. Used in 3-column service grids on white sections.

**`service-card-dark`** — Navy-4 (#14152c) fill, surface-navy border. Same structure. Used in 3-column grids on dark sections. Icon container uses the dark variant.

**`icon-container`** — 48×48px container, `{rounded.lg}` (12px), Electric Blue Subtle (#CCE1FF) background, Electric Blue icon. Used at top of service cards.

**`icon-container-dark`** — Same size/radius but `rgba(0, 106, 255, 0.15)` fill — the subtle dark-mode equivalent.

### Product Cards

**`product-card`** — White fill, 12px radius, no border, card-float shadow. 16:9 top image (`{component.product-card-image}`), then 24px padding zone with title (`{typography.title-lg}`), description (`{typography.body-sm}`), and a ghost CTA link.

**`product-card-image`** — 16:9 aspect-ratio image plate, zero border-radius (inherits from parent card clip). Product screenshots, satellite views, or UI mockups.

### Stats

**`stat-block`** — Transparent fill on dark sections. Large display numeral (`{typography.display-lg}`, 700 weight) in white, `{typography.uppercase-tag}` label beneath in muted. Electric Blue can accent the numeral or a ruled separator above. Used in 3–4 column rows.

### Partner Strip

**`partner-logo-strip`** — Horizontal flex row on white or surface-soft background. Logo images at 70% opacity, rising to 100% on hover. `{spacing.xl}` gap. Max width ~800px, centered.

**`partner-badge`** — Surface-soft fill, 8px radius, 12×24px padding. "OFFICIAL PARTNER" / "OFFICIAL DISTRIBUTOR" in `{typography.uppercase-tag}`. Appears adjacent to partner logos in cobranding contexts.

### Tags & Badges

**`tag-badge`** — Pill-shaped (`{rounded.full}`), Electric Blue Subtle fill, Electric Blue text, 11px/700 weight. Used for product labels ("GIS", "Satellite", "NEW").

**`tag-badge-dark`** — Same shape. `rgba(0,106,255,0.2)` fill, blue-700 (#99C3FF) text. For use on dark surfaces.

### Forms

**`text-input`** — White fill, 1px `{colors.hairline}` border, 8px radius, 52px height. Stacked label above in `{typography.caption}` muted. On focus: border becomes 2px Electric Blue, no glow/shadow ring.

**`form-label`** — `{typography.caption}` / 14px 500 weight / body-text color. Always above the input, not placeholder-only.

### Footer

**`footer-dark`** — Navy-1 background, white text, 64×80px padding. 4-column link layout: Company / Services / Products / Contact. Each column: `{typography.title-sm}` header, `{component.footer-link}` rows in `{typography.body-sm}`.

**`footer-link`** — Muted-soft color at rest, white on hover. `{typography.body-sm}`.

**`legal-band`** — Navy-4 background, 1px surface-navy top border. Contains: copyright (© DreamGIS), language/region picker, social icons. All in `{typography.caption-sm}` muted.

### Satellite Texture

**`satellite-texture`** — Blue-toned aerial/satellite photography (real imagery, not generated) used as background on dark sections. Applied as a CSS `background-image` layer beneath the section color, at `mix-blend-mode: overlay` or `luminosity` and `opacity: 0.15–0.25`. The texture contextualizes the geo-intelligence product without using decorative illustration. Only satellite or geographic imagery — no abstract patterns.

## Imagotipo & Logo

### Versions
- **Horizontal (full color):** Imagotipo — 3D globe-continent symbol + "DreamGIS" wordmark. Primary version for horizontal spaces.
- **Horizontal (one-color):** Same layout in single ink. For dark/light monochrome surfaces.
- **Horizontal (wordmark only):** "DreamGIS" text without symbol. For tight horizontal contexts.
- **Vertical (full color):** Symbol centered above wordmark. For square/portrait contexts.
- **Vertical (one-color):** Monochrome vertical version.
- **Isotipo:** Globe-continent symbol only. Used as favicon, profile photo, app icon, and small-scale brand mark.

### Safe Zone
Minimum padding of **4× the module unit** on all sides. No other graphic elements, text, or images within this exclusion zone. The safe zone grid uses 4x padding with internal references at 14, 20, 25, 31, and 35 units for the symbol and text geometry.

### Incorrect Uses
- Do not stretch, compress, or alter proportions
- Do not change colors outside approved palette
- Do not add shadows, gradients, filters, or effects
- Do not modify the typeface or letter forms
- Do not reorder symbol and wordmark positions

## Photography

### Style
All photography defaults to **satellite and aerial imagery** — orbital views, geographic data visualizations, terrain maps, and city-from-above perspectives. Blue-dominant tonality required for palette consistency. Photography is used as visual texture, not documentary illustration.

### Usage
- Hero backgrounds: full-bleed satellite image with dark navy overlay at 60–75% opacity, plus optional `{component.satellite-texture}` layer.
- Section accents: cropped satellite imagery in right-rail product showcases (see `{component.product-card-image}`).
- Presentation/print: imagery bleeds to edge, overlaid with brand copy. No white frames or mats.

### Prohibited
- Generic stock photography of people at computers, handshakes, or cityscapes
- Warm-toned or green-dominant images that clash with the blue palette
- Low-resolution or JPEG-artifact imagery on premium digital surfaces

## Cobranding

When partnering with technology providers (ESRI, MAXAR, VertiGIS, others):
- Maintain equal proportional scale between DreamGIS and partner logos
- Respect both logos' safe zones — do not overlap or crowd
- Use `{component.partner-badge}` labels ("OFFICIAL PARTNER" / "OFFICIAL DISTRIBUTOR") in `{typography.uppercase-tag}` as relationship qualifiers
- Never mix DreamGIS colors with partner brand colors in the same element
- Never merge or stylistically fuse logo elements across brands

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Top nav collapses to logo + hamburger; lang switcher moves to nav drawer; hero stack to single column; service cards 1-up; partner strip wraps 2-column; footer 1-column. |
| Tablet | 640–1024px | Nav keeps logo + lang switcher, hamburger for links; service cards 2-up; partner strip horizontal scroll; footer 2-column. |
| Desktop | 1024–1440px | Full nav with all links visible; service cards 3-up; stats 4-up; partner strip full row; footer 4-column. |
| Wide | > 1440px | Content caps at 1280px, gutters absorb remainder. |

### Touch Targets
- Primary CTAs minimum 48×48px (WCAG AA).
- Nav links: 44px minimum tap height.
- Icon buttons: 40×40px with `{spacing.sm}` padding buffer.
- Language switcher: 36×36px minimum — provide visible label text, not flag-only.

### Collapsing Strategy
- Navigation links collapse into a slide-over drawer at < 1024px. Logo + lang switcher stay in the top bar.
- Hero CTAs stack vertically (primary above secondary) on mobile.
- Service card grids drop from 3 → 2 → 1 column; never reflow rows.
- Stats row drops from 4 → 2 → 1 column on mobile — each stat full width.
- Footer accordion-collapses each column on mobile; legal band stays visible at bottom.

## Digital Touchpoints

All non-web surfaces inherit the same design tokens and use the same modular grid proportions:

- **LinkedIn / Social posts:** Dark navy or gradient backgrounds. Display headline left-anchored, Electric Blue accent for key words or ruled lines. Satellite imagery texture optional.
- **PowerPoint / Presentations:** Cover/close slides use hero-dark or hero-gradient treatment. Internal slides: white canvas with navy accents; data slides use navy-1 background for map and chart visualizations.
- **Online meeting backgrounds:** Full-bleed satellite texture over navy gradient. Logo isotipo or horizontal mark in corner.
- **Email (newsletter + promo):** White canvas base. Single-column on mobile. Header band in navy-1. CTA buttons use `{component.button-primary}`. Footer in navy-4 with legal-band treatment.
- **Email signature:** Horizontal imagotipo, contact info in body-sm, social links as icon row.
- **Event backdrops / Stage:** Full-bleed navy-1 or gradient. Display-xl headline. Imagotipo centered or lower-third. Partner badges at footer.
- **Business cards:** Navy-1 front with white imagotipo + contact details. White back with navy-1 isotipo as watermark.
- **Letterhead:** White surface. Imagotipo top-right. Navy-1 accent strip at page foot.
- **Folders:** Navy-1 cover. White imagotipo. Electric Blue accent line along spine.

## Known Gaps

- **Web CSS tokens:** Exact CSS custom properties from dreamgis.com not extractable at time of writing — site does not expose CSS source in rendered form. These tokens represent the brand manual specification, not a reverse-engineered implementation.
- **Interactive state animations:** Transition timings (hover, focus, active) not specified in brand manual — recommend 150ms ease for color transitions, 200ms ease for shadow/transform.
- **Dark mode:** Brand manual specifies no dark-mode toggle — the design system is explicitly multi-surface (uses both dark navy and white canvas sections) but not user-switchable dark mode.
- **Map UI components:** GIS products (FOLIA, etc.) embed map views (likely Leaflet/MapboxGL). Map tile styling and marker design are product-specific and extend beyond this brand-level system.
- **Form validation error states:** Error color token documented (`{colors.error}`); full input outline + helper-text combination for validation failure not specified in brand manual.
- **Motion / animation:** Brand manual references 3 motion branding video clips but provides no timing or easing specifications for UI micro-animations.
- **Data visualization palette:** Charts and geo-data overlays likely extend the blue tint ladder (`{colors.blue-300}` through `{colors.navy-3-900}`) but exact sequential/diverging data color ramps not specified.
