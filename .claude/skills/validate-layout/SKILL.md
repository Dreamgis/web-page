---
name: validate-layout
description: Validates DreamGIS page layout — centering, overflow, design rules. Reports violations with file:line fixes.
---

# validate-layout skill

Run the DreamGIS layout validator against one or more pages and report all violations with actionable CSS/HTML fixes.

## Steps

1. **Ensure HTTP server is running** on port 8787:
   ```bash
   lsof -ti:8787 | head -1 || python3 -m http.server 8787 --directory /Users/fabian_mini/fabian/code/web-page --bind 127.0.0.1 &
   sleep 1
   ```

2. **Run the validator** from the project root:
   ```bash
   cd /Users/fabian_mini/fabian/code/web-page
   node scripts/validate-layout.js [pages...] --port=8787
   ```
   - No args → validates `index.html`
   - Specific pages: `node scripts/validate-layout.js index.html nosotros.html`
   - All HTML pages: `node scripts/validate-layout.js $(ls *.html)`

3. **Read the output** — each finding has format:
   ```
   ✖ ERROR  [viewport]  description
       element: <tag class="...">
   ```
   Levels: `ERROR` (must fix) · `WARN` (should fix) · `INFO` (note)

4. **Read violation screenshots** in `.validate-screenshots/`:
   ```
   <page>-mobile.png   <page>-tablet.png   <page>-desktop.png
   ```
   Read each screenshot that corresponds to a reported ERROR.

5. **Locate the root cause** — for each ERROR/WARN:
   - Horizontal overflow → find element with `overflow: visible` or `width: 100vw`; check for negative margins outside `.container`
   - Container not centered → check `margin-inline`, `max-width`, parent `overflow` clipping
   - Element bleeds right → check `position: absolute` with large `right`/`width` or `white-space: nowrap`
   - Flush to edge (<20px left) → missing `padding-inline: var(--pad-x)` on section or container
   - Untranslated key → key missing from `locales/es/translation.json` or `data-i18n` typo

6. **Apply fixes** using Edit tool. Always fix the CSS/HTML source, never inline styles.

7. **Re-run validator** to confirm 0 errors.

8. **Report summary** to user:
   - List each fixed violation with `file:line` reference
   - Show before/after screenshot diff if relevant
   - List any remaining WARNs with explanation

## Design rules enforced

| Rule | Expected value |
|------|---------------|
| Max container width | 1280px |
| Min horizontal padding | 20px (clamp floor of `--pad-x`) |
| Primary color | `#006aff` |
| Teal accent | `#00c4b4` |
| No horizontal scroll | `body.scrollWidth ≤ window.innerWidth + 2px` |
| Container centering | left margin = right margin ±6px |
| Images | must have `alt` attribute |
| i18n keys | must resolve (text ≠ key) |

## Common fixes

**Horizontal overflow:**
```css
/* Add to the offending section */
overflow-x: clip;
/* OR if inside container: */
overflow-x: hidden;
```

**Container not centered:**
```css
.container {
  max-width: var(--max-w);
  margin-inline: auto;
  padding-inline: var(--pad-x);
}
```

**Section content flush to edge:**
```css
.section__intro {
  padding-inline: var(--pad-x);
}
```

**Negative margin pattern (full-bleed inside container):**
```css
/* ONLY valid when parent has padding-inline: var(--pad-x) */
.track-wrap {
  margin-inline: calc(-1 * var(--pad-x));
  padding-inline: var(--pad-x);
}
```

## Input

The user can invoke this as: `/validate-layout` or `/validate-layout nosotros.html`
