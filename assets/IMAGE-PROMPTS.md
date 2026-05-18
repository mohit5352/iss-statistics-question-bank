# Image generation prompts

Production app uses **four** theme-specific WebP files. CSS assigns them when the user toggles dark/light.

| File | CSS variable | Theme | Role |
|------|----------------|-------|------|
| `top-hero-image-dark.webp` | `--top-hero-image` in `:root` | Dark | Sticky header hero (`main.html`, `login.html`) |
| `top-hero-image-light.webp` | `--top-hero-image` in `.light-theme` | Light | Sticky header hero |
| `page-hero-image-dark.webp` | `--page-hero-image` in `:root` | Dark | Full-page backdrop (`body.app-photo-backdrop`) |
| `page-hero-image-light.webp` | `--page-hero-image` in `.light-theme` | Light | Full-page backdrop |

**Export:** 21:9, **2560×1097** (or 2400×1028), sRGB, WebP q84–86, aim &lt; 200 KB per file when possible.

**Theme anchors:** bone `#F1ECE3`, charcoal `#424242`, deep `#2E2E2E`.  
**Default palette:** forest green, antique gold, burnt sienna, warm ivory.

**UI pairing (important):** Photos are designed to work with CSS in `styles.css` — scrims on the image layer only, not white boxes on hero copy. Light mode question cards use **transparent glass** over the page plate; the light page image must retain **visible color and texture**.

---

## Design goals

### Sticky hero (`top-hero-*`)

- **Left third:** calm, low detail — headline + hero dock (text on photo, **no UI background boxes**).
- **Right two-thirds:** desk props, charts, shallow DOF.
- **Dark:** slightly darker left third; **bone** UI text.
- **Light:** bright ivory left third; **charcoal** UI text.

### Page backdrop (`page-hero-*`)

- Full-screen **plate**, not a marketing hero banner.
- Even luminance; soft blur/bokeh; no strong single focal point.
- **Dark:** visible green/gold/chart texture under charcoal scrim (~48–88% in CSS).
- **Light:** same richness as dark but ~25% brighter; **not** a flat ivory/white wash; must read through light scrim (~12–38% on mobile) and transparent glass cards.

### Avoid (all four)

- Neon, HDR clip, legible text on props, logos, faces, watermarks  
- Busy left third on **top** heroes  
- Light page: blank white frame, zero visible subject  

---

## Image 1a — `top-hero-image-dark.webp`

**Prompt:**

```
Cinematic ultra-wide 21:9 photograph, statistics and examination study desk hero for an academic question bank app (UPSC Indian Statistical Service tone). Composition: clear empty calm LEFT THIRD (soft shadow, low detail, slightly darker) for overlaid ivory UI text; rich visual interest on the RIGHT TWO-THIRDS — Gaussian normal curve on graph paper, scatter plot on tablet, compass, pencil, wood desk, shallow depth of field on right-side props only. Palette: forest green, antique gold, burnt sienna, warm ivory highlights — muted editorial academic colors, not neon, not HDR. Soft directional light from upper left, balanced mid-tones, gentle contrast, film still mood. Photorealistic, 8K detail, serious and tasteful. No people, no faces, no logos, no brand names, no readable text or numbers on screens or papers, no watermark.
```

**Negative:** neon, oversaturated, blown highlights, crushed blacks, busy left third, centered subject, cartoon, 3D render, CGI, stock photo, clutter, lens flare, legible text, equations, UI mockup, frame border, heavy vignette

---

## Image 1b — `top-hero-image-light.webp`

**Prompt:**

```
Cinematic ultra-wide 21:9 photograph, statistics study desk hero for LIGHT MODE academic web app. Bright calm LEFT THIRD: warm ivory #F1ECE3, soft low detail, even luminance for dark charcoal #424242 UI text; visual interest on RIGHT TWO-THIRDS — normal curve on graph paper, scatter plot on tablet, compass, pencil, wood desk, shallow depth of field on props. Palette: forest green, antique gold, burnt sienna on warm ivory — bright airy editorial, soft upper-left daylight, balanced high-key mid-tones, not overexposed, not flat white. Photorealistic, tasteful. No people, faces, logos, readable text, watermark.
```

**Negative:** dark moody left third, crushed blacks, flat solid white left third, neon, HDR clip, busy left third, legible text, cartoon, watermark

---

## Image 2a — `page-hero-image-dark.webp`

**Prompt:**

```
Ultra-wide 21:9 atmospheric background plate for a statistics study web app (not a hero banner). Statistics desk world — faint graph paper, soft normal curve, abstract chart shapes, compass, geometric hints — composed for FULL-SCREEN BACKDROP: even luminance, no strong focal point, no empty text zone, gentle abstract blur and soft bokeh, slightly defocused overall. Palette: forest green, antique gold, burnt sienna — desaturated ~30%, harmonized with bone #F1ECE3 and charcoal #424242, clearly visible under a dark UI scrim (like frosted glass over a photo). Low contrast, soft film grain, muted editorial mood, no harsh center hotspots. Photorealistic texture, dreamy but with visible color and detail. No people, faces, logos, readable text, watermark.
```

**Negative:** high contrast, spotlight, busy center, sharp legible charts, neon, HDR, dramatic left-right split, single dominant object, text, numbers, faces, logo, cartoon, harsh shadows, pure white patches

---

## Image 2b — `page-hero-image-light.webp` *(regenerate this one most often if light glass looks flat)*

**Prompt:**

```
Ultra-wide 21:9 atmospheric background plate for LIGHT MODE statistics study web app (full-screen backdrop, not a hero banner). Clearly visible forest green and antique gold throughout, soft graph paper texture, subtle normal curve, abstract chart bokeh, compass hints on warm ivory bone atmosphere — NOT a flat solid white or ivory wash. Same visible photographic detail and color richness as the dark page plate but ~25% brighter and airier. Even luminance, gentle defocus, soft film grain, low contrast. Must read well under light bone scrim, transparent glass question cards, and mobile portrait crop. Harmonized with bone #F1ECE3 and charcoal #424242. No people, faces, logos, readable text, watermark, pure blank white areas.
```

**Negative:** flat ivory only, no visible subject, empty white frame, high contrast, spotlight, neon, HDR, legible charts, text, faces, logo, harsh shadows, darker than dark plate, single dominant object

---

## Palette swaps (all four prompts)

| Mood | Palette line |
|------|----------------|
| Green & gold *(default)* | forest green, antique gold, burnt sienna, warm ivory highlights |
| Teal & amber | deep teal, amber, warm cream, muted copper |
| Indigo & rose | indigo, soft violet, dusty rose, chart-line accents |
| Coral & sky | coral, sky blue, soft yellow wash, warm sand |
| Monochrome | ivory #F1ECE3 and charcoal #424242 only |

---

## After export

1. Save all four files in `assets/` with exact names.
2. Hard refresh (**Cmd+Shift+R**).
3. Test **dark + light** on **desktop and mobile** (see [`README.md` QA checklist](README.md#qa-checklist)).

### CSS tuning (if photo or glass needs a nudge)

| Token | Location | Purpose |
|-------|----------|---------|
| `--page-backdrop-scrim` | `:root` / `.light-theme` | Page photo visibility |
| `--hero-overlay-*` | `:root` / `.light-theme` | Sticky hero tint (photo layer only) |
| `--header-glass-bg` | `.light-theme` | Q-header on photo |
| `--page-hero-position-mobile` | `:root` + `@media` in `styles.css` | Mobile crop of 21:9 plate |

**Mobile:** One WebP per theme; CSS `background-position` crops the plate (no separate mobile exports).

### Regenerate workflow (macOS)

```bash
cd assets
W=1536   # width of AI export before crop
CH=$(( W * 9 / 21 ))
sips -c "$CH" "$W" input.webp --out cropped.webp
sips -z 1097 2560 cropped.webp --out final.webp
cwebp -q 86 -m 6 final.webp -o page-hero-image-light.webp
```

See also [`README.md`](README.md) for image ↔ UI mapping, CSS tuning tokens, and QA checklist.
