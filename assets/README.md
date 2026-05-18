# Hero image assets

Used on **`main.html`** (sticky full-bleed hero) and **`login.html`** (left hero panel). Both read the same `--hero-image` from `styles.css` `:root`.

**Active default:** `hero-statistics-color-green-gold.webp` (set in `styles.css`).  
**Monochrome alternate:** `hero-statistics.webp`. **SVG fallback:** `hero-statistics.svg`.

## Colorful alternates (2400×800 WebP)

| File | Palette |
|------|---------|
| `hero-statistics-color-teal-amber.webp` | Teal, amber, warm cream |
| `hero-statistics-color-indigo-rose.webp` | Indigo, violet, rose chart tones |
| `hero-statistics-color-green-gold.webp` | Forest green, gold, burnt sienna *(default)* |
| `hero-statistics-color-coral-sky.webp` | Coral, sky blue, soft yellow washes |

## Swap the hero (one line in CSS)

In `styles.css` `:root`, set:

```css
--hero-image: url('assets/hero-statistics-color-teal-amber.webp');
```

Hard refresh. Main hero, login panel, overlays, and on-image controls use the same tokens.

## Light vs dark theme

Sun/moon toggles **page chrome** (cards, body, login card) via `.light-theme`. **Hero overlay and on-image text** stay on `:root` hero tokens — the photo keeps the same cinematic treatment in both themes. Tune contrast on the photo with the overlay variables below, not `.light-theme`.

## Image brief (all variants)

- **21:9** wide, calm **left third** for headline, detail on the right.
- **Balanced exposure** — not crushed, not blown out.
- Monochrome or colorful both work; if the left side is busy/dark, raise `--hero-overlay-text-side` in `:root`.

### Optional overlay tune (`:root` only)

- `--hero-overlay-text-side` — contrast behind text (higher = stronger)
- `--hero-overlay-clear-at` — where the gradient opens on the photo
- `--hero-compact-min-height` — height of sticky hero after scroll compact (main app)

## AI prompts

**Monochrome (default look):**

> Cinematic 21:9 statistics desk hero. Ivory `#F1ECE3` / charcoal `#424242` only. Normal curve on graph paper, tablet scatter plot, compass, soft left light. Empty left third. Balanced mid-tones. No logos, text, faces.

**Colorful (alternates):**

> Same composition, but refined academic color — teal/amber, indigo/rose, green/gold, or coral/sky chart tones. Muted editorial palette, not neon. Empty left third for text.

**Negative:** neon, HDR clip, busy left side, logos, watermark, cartoon, readable text on props.
