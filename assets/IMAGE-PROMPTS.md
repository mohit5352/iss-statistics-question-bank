# Image generation prompts

Production app uses **four** theme-specific WebP files. CSS always uses **`--top-hero-image`** on the sticky hero and **`--page-hero-image`** on the full-page backdrop — never swap files in CSS.

| File | CSS variable | Theme | Role |
|------|----------------|-------|------|
| `top-hero-image-dark.webp` | `--top-hero-image` in `:root` | Dark | Sticky header hero (`main.html`, `login.html` branding uses page plate) |
| `top-hero-image-light.webp` | `--top-hero-image` in `.light-theme` | Light | Sticky header hero |
| `page-hero-image-dark.webp` | `--page-hero-image` in `:root` | Dark | Full-page backdrop (`body.app-photo-backdrop`) |
| `page-hero-image-light.webp` | `--page-hero-image` in `.light-theme` | Light | Full-page backdrop |

**Export:** 21:9, **2560×1097** (or 2400×1028), sRGB, WebP q84–86, aim &lt; 200 KB per file when possible.

**Theme anchors:** bone `#F1ECE3`, charcoal `#424242`, deep `#2E2E2E`.  
**Default palette:** forest green, antique gold, burnt sienna, warm ivory.

**UI pairing:** Scrims live in CSS only (`--hero-overlay-*`, `--page-backdrop-scrim`). Light question cards are transparent glass over the page plate — the **photo files** must carry color and texture, not flat white.

---

## Light theme: matched pair (read first)

Generate **`page-hero-image-light.webp` first**, then **`top-hero-image-light.webp`** in the **same session** so both share one color grade.

### Shared light color grade (copy into both prompts)

```
SAME EXPOSURE AND COLOR GRADE AS THE PAIRED IMAGE: warm ivory bone #F1ECE3 atmosphere, clearly visible forest green and antique gold chart tones, burnt sienna accents, soft film grain, gentle contrast, NOT overexposed, NOT a flat white or bleach wash. Mid-tones anchored around warm cream — hero and page must look like one continuous photo when stacked vertically in the app.
```

### Rules

| | `page-hero-image-light` | `top-hero-image-light` |
|--|-------------------------|-------------------------|
| **Composition** | Full-screen defocused plate, even luminance | Hero banner: calm **left third** only, detail on **right two-thirds** |
| **Brightness** | Reference grade for the pair | **Same** overall brightness as page plate — left third at most ~8% lighter than page average, never stark white |
| **Avoid** | Flat ivory only, empty frame | Solid white left third, brighter than page plate, different color temperature |

After export, check in the app: toggle light theme, scroll from hero into questions — no obvious white band on the hero strip.

---

## Design goals (all themes)

### Sticky hero (`top-hero-*`)

- **Left third:** calm, low detail — headline + hero dock.
- **Right two-thirds:** desk props, charts, shallow DOF.
- **Dark:** slightly darker left third; **bone** UI text.
- **Light:** warm ivory left third (not white); **charcoal** UI text; **same color grade as page-light**.

### Page backdrop (`page-hero-*`)

- Full-screen plate, soft bokeh, no strong focal point.
- **Dark:** visible green/gold under charcoal scrim.
- **Light:** visible green/gold on bone atmosphere — same grade as top-light.

### Avoid (all four)

- Neon, HDR clip, legible text on props, logos, faces, watermarks  
- Busy left third on **top** heroes  
- Light pair: mismatched exposure between top and page, flat white wash  

---

## Image 1a — `top-hero-image-dark.webp`

**Prompt:**

```
Cinematic ultra-wide 21:9 photograph, statistics and examination study desk hero for an academic question bank app (UPSC Indian Statistical Service tone). Composition: clear empty calm LEFT THIRD (soft shadow, low detail, slightly darker) for overlaid ivory UI text; rich visual interest on the RIGHT TWO-THIRDS — Gaussian normal curve on graph paper, scatter plot on tablet, compass, pencil, wood desk, shallow depth of field on right-side props only. Palette: forest green, antique gold, burnt sienna, warm ivory highlights — muted editorial academic colors, not neon, not HDR. Soft directional light from upper left, balanced mid-tones, gentle contrast, film still mood. Photorealistic, 8K detail, serious and tasteful. No people, no faces, no logos, no brand names, no readable text or numbers on screens or papers, no watermark.
```

**Negative:** neon, oversaturated, blown highlights, crushed blacks, busy left third, centered subject, cartoon, 3D render, CGI, stock photo, clutter, lens flare, legible text, equations, UI mockup, frame border, heavy vignette

---

## Image 1b — `top-hero-image-light.webp`

Generate **after** `page-hero-image-light.webp`. Paste the **shared light color grade** block above into this prompt.

**Prompt:**

```
Cinematic ultra-wide 21:9 photograph, statistics study desk HERO BANNER for LIGHT MODE academic web app (UPSC Indian Statistical Service). SAME EXPOSURE AND COLOR GRADE AS THE PAIRED PAGE PLATE: warm ivory bone #F1ECE3 atmosphere, clearly visible forest green and antique gold, burnt sienna accents, soft film grain, gentle contrast — NOT overexposed, NOT flat white, NOT cooler or warmer than the page backdrop file.

Composition: calm LEFT THIRD with soft low detail for charcoal #424242 UI text — left third only slightly brighter than the overall frame (~8% max), still shows green/gold color, never a solid white slab. RIGHT TWO-THIRDS: normal curve on graph paper, scatter plot on tablet, compass, pencil, wood desk, shallow depth of field on props. Soft upper-left daylight, balanced high-key mid-tones matching the page plate. Photorealistic, tasteful. No people, faces, logos, readable text, watermark.
```

**Negative:** solid white left third, brighter than paired page plate, cooler or warmer color cast than page plate, dark moody left third, crushed blacks, neon, HDR clip, busy left third, legible text, cartoon, watermark, bleach wash, blank ivory frame

---

## Image 2a — `page-hero-image-dark.webp`

**Prompt:**

```
Ultra-wide 21:9 atmospheric background plate for a statistics study web app (not a hero banner). Statistics desk world — faint graph paper, soft normal curve, abstract chart shapes, compass, geometric hints — composed for FULL-SCREEN BACKDROP: even luminance, no strong focal point, no empty text zone, gentle abstract blur and soft bokeh, slightly defocused overall. Palette: forest green, antique gold, burnt sienna — desaturated ~30%, harmonized with bone #F1ECE3 and charcoal #424242, clearly visible under a dark UI scrim (like frosted glass over a photo). Low contrast, soft film grain, muted editorial mood, no harsh center hotspots. Photorealistic texture, dreamy but with visible color and detail. No people, faces, logos, readable text, watermark.
```

**Negative:** high contrast, spotlight, busy center, sharp legible charts, neon, HDR, dramatic left-right split, single dominant object, text, numbers, faces, logo, cartoon, harsh shadows, pure white patches

---

## Image 2b — `page-hero-image-light.webp`

Generate **first** in the light pair. Paste the **shared light color grade** block above.

**Prompt:**

```
Ultra-wide 21:9 atmospheric background plate for LIGHT MODE statistics study web app (full-screen backdrop, NOT a hero banner). SAME EXPOSURE AND COLOR GRADE FOR A PAIRED HERO FILE: warm ivory bone #F1ECE3 atmosphere, clearly visible forest green and antique gold throughout, burnt sienna accents, soft graph paper texture, subtle normal curve, abstract chart bokeh, compass hints — NOT a flat solid white or ivory wash.

Even luminance across the frame, gentle defocus, soft film grain, low contrast, ~25% brighter than the dark page plate but with the SAME visible color richness as dark (green/gold must read clearly). Must work under light bone CSS scrim and transparent glass cards. Harmonized with bone #F1ECE3 and charcoal #424242. No people, faces, logos, readable text, watermark, pure blank white areas, no single dominant object.
```

**Negative:** flat ivory only, no visible green/gold, empty white frame, high contrast, spotlight, neon, HDR, legible charts, text, faces, logo, harsh shadows, darker than dark plate without added color, bleach wash

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
3. Test **dark + light** on **desktop and mobile** — hero strip must match page plate in light theme (see [`README.md` QA checklist](README.md#qa-checklist)).

### Regenerate workflow (macOS)

```bash
cd assets
W=1536
CH=$(( W * 9 / 21 ))
sips -c "$CH" "$W" input.png --out cropped.webp
sips -z 1097 2560 cropped.webp --out final.webp
cwebp -q 86 -m 6 final.webp -o page-hero-image-light.webp
```

See also [`README.md`](README.md) for image ↔ UI mapping and QA checklist.
