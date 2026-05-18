# Hero & page backdrop images

Production UI uses **four** theme-specific WebP files. CSS swaps `--top-hero-image` and `--page-hero-image` when the user toggles dark/light — no manual filename changes.

## Files (current production set)

| File | Theme | CSS | Role |
|------|-------|-----|------|
| `top-hero-image-dark.webp` | Dark | `:root` | Sticky hero + `login.html` hero panel |
| `top-hero-image-light.webp` | Light | `.light-theme` | Sticky hero + login hero panel |
| `page-hero-image-dark.webp` | Dark | `:root` | Full-page backdrop behind questions/notes |
| `page-hero-image-light.webp` | Light | `.light-theme` | Full-page backdrop (visible texture for glass UI) |
| `upsc-iss-wordmark.svg` | Both | — | Brand wordmark sprite (`#upsc-iss-wordmark`); `<svg><use href="…"></use></svg>` on main + login. Subtitle lines use solid `currentColor` (no `fill-opacity`); dark theme adds `.brand-wordmark` drop-shadow in CSS, light theme does not |

**Export spec:** 21:9, **2560×1097**, sRGB, WebP q84–86 (typically 75–160 KB per file).

**Generate / replace:** copy-paste prompts from [`IMAGE-PROMPTS.md`](IMAGE-PROMPTS.md). **Light pair:** generate `page-hero-image-light.webp` first, then `top-hero-image-light.webp` with the same color grade (see matched-pair section in prompts).

Optional legacy copies `top-hero-image.webp` / `page-hero-image.webp` (dark duplicates) are not required by CSS. Older `hero-statistics*.webp` files are **not** wired in.

---

## How images map to the UI

### Sticky hero (`top-hero-*`)

- Full-bleed photo strip: title, tagline, **theme toggle** (glass chip), **hero dock** (mode, Paper/Section/Year, Set, admin).
- Text sits **on the photo** — no background panels behind title or dock.
- **Dark:** bone text; left third slightly darker on the photo.
- **Light:** charcoal text; left third bright ivory.

### Page backdrop (`page-hero-*`)

- Active when `body` has class **`app-photo-backdrop`** (`PHOTO_BACKDROP = true` in `main.html`).
- Rendered on `.paper-container::before` (fixed, full viewport).
- **Dark:** charcoal-tinted glass on question cards; photo visible through `--page-backdrop-scrim`.
- **Light:** **transparent** question cards (blur + hairline border; tiny charcoal tint for iOS Safari); lighter scrim; **`page-hero-image-light.webp`** must show visible green/gold/chart texture (not a flat ivory wash).

### Login (`login.html`)

- Full-viewport **`--page-hero-image`** + `--page-backdrop-scrim` (same as main app page backdrop; theme-aware).
- Sign-in column and **`.login-main`** are transparent; frosted glass is only on **`.login-card`** (matches question cards on photo).
- **Back**, theme toggle (on hero panel), username/password inputs, and **Login** button use **transparent** backgrounds with `--glass-border` / `--formula-shadow`. **Questions** / **Topics** sticky FAB on `main.html` use **`--fab-bg`** + blur (readable on the page photo).

---

## Replace or regenerate

1. Generate all four images using [`IMAGE-PROMPTS.md`](IMAGE-PROMPTS.md).
2. Save in this folder with **exact** filenames above.
3. Hard refresh (**Cmd+Shift+R**); on mobile Safari, use a private tab if the old WebP is cached.

Test one file only:

```css
/* styles.css — :root or .light-theme */
--page-hero-image: url('assets/your-test.webp');
```

---

## CSS tuning (no re-export)

| Variable | Where | Effect |
|----------|--------|--------|
| `--page-backdrop-scrim` | `:root` / `.light-theme` | How much page photo shows through |
| `--hero-overlay-text-side` | `:root` / `.light-theme` | Sticky hero tint behind headline (left side) |
| `--hero-overlay-*` | same | Full hero gradient on photo only |
| `--header-glass-bg` | `.light-theme` | Q-header strip on photo (light) |
| `--sidebar-glass-bg` | `.light-theme` | Questions/notes TOC on photo (light) |
| `--page-hero-position` | `:root` | Desktop page crop (`center center`) |
| `--page-hero-position-mobile` | `:root` | Main app mobile page crop (default `center 38%`; ≤480px `center 34%`) |
| `--login-page-hero-position-mobile` | `:root` | Login stacked layout crop (default `center 28%`; ≤480px `center 24%`) |

**Light question cards on photo:** `body.app-photo-backdrop.light-theme .question-card` — transparent / ~5% charcoal + `backdrop-filter` (see `styles.css`).

**Do not** add UI background boxes on the sticky hero — contrast comes from the photo + overlay tokens only.

---

## QA checklist

- [ ] **Dark desktop:** hero readable (bone text); page photo visible behind cards  
- [ ] **Light desktop:** hero readable (charcoal text); page photo visible; cards feel like glass, not white panels  
- [ ] **Dark mobile:** same; page crop acceptable at 768px / 480px  
- [ ] **Light mobile:** transparent glass cards; no solid bone body covering the photo between cards  
- [ ] Theme toggle swaps both image pairs instantly  
- [ ] `login.html` hero matches main (photo + transparent back/theme chips; bordered inputs/button inside glass card)  
- [ ] **Questions** / **Topics** FAB on `main.html`: frosted `--fab-bg`, readable on page photo (dark + light)  
- [ ] **Light theme:** wordmark subtitle (“INDIAN STATISTICAL / SERVICE”) crisp on hero + login (no muddy shadow)  

---

## Related docs

- [`IMAGE-PROMPTS.md`](IMAGE-PROMPTS.md) — full AI prompts + export commands  
- [`../README.md`](../README.md) — app features and CSS token overview  
