# ISS Statistics Question Bank — Deployment Guide

This guide walks you through deploying the app to **Vercel** (free) so that **answer corrections**, **explanation edits**, and **Revision Notes** work on the live site and update `answers.js`, `explanations.js`, and `notes.js` in your GitHub repo.

**Live deployment:** [https://iss-statistics-question-bank.vercel.app/](https://iss-statistics-question-bank.vercel.app/) (with API server)

---

## Prerequisites

1. **GitHub account** — Your repo is already on GitHub
2. **Vercel account** — Free at [vercel.com](https://vercel.com) (sign up with GitHub)

---

## Step 1: Create a GitHub Personal Access Token (PAT)

1. Go to **GitHub** → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **Generate new token (classic)**
3. Name it: `iss-question-bank-vercel`
4. Expiration: 90 days (or No expiration if you prefer)
5. Scopes: Check **`repo`** (full control of private repositories)
6. Click **Generate token**
7. **Copy the token** and store it somewhere safe — you won’t see it again

---

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. **Import** your GitHub repository (`iss-statistics-question-bank` or your repo name)
3. Vercel will detect the project. Keep these settings:
   - **Framework Preset:** Other
   - **Root Directory:** `./` (leave default)
   - **Build Command:** leave empty
   - **Output Directory:** leave default
4. Before deploying, expand **Environment Variables**
5. Add these variables:

   | Name              | Value                    |
   |-------------------|--------------------------|
   | `GITHUB_TOKEN`    | Your PAT from Step 1     |
   | `GITHUB_OWNER`    | Your GitHub username     |
   | `GITHUB_REPO`     | Your repo name           |
   | `ADMIN_USERNAME`   | Admin login username     |
   | `ADMIN_PASSWORD`   | Admin login password     |
   | `ADMIN_NAME`       | Display name when logged in (e.g. `Your Name`) |
   | `CONTACT_EMAIL` | Contact email for users who need credentials (e.g. `your.email@example.com`) |

   Example: If your repo is `https://github.com/mohit5352/iss-statistics-question-bank`, then:
   - `GITHUB_OWNER` = `mohit5352`
   - `GITHUB_REPO` = `iss-statistics-question-bank`

6. Click **Deploy**
7. Wait for the build to finish. Your site will be at `https://your-project.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# From your project folder
cd statistics_question_bank
vercel

# Follow prompts, then add env vars in Vercel Dashboard:
# Project → Settings → Environment Variables
```

---

## Step 3: Configure Custom Domain (optional)

1. In Vercel: **Project** → **Settings** → **Domains**
2. Add your custom domain (e.g. `iss-stats.yourdomain.com`)
3. Update DNS as instructed by Vercel

---

## Step 4: Verify It Works

1. Open your live URL (e.g. `https://your-project.vercel.app` or `https://your-project.vercel.app/main.html`)
2. Log in as admin (Admin Login link)
3. Select a paper, section, and year
4. Click **Show Answer** on a question
5. **Answer correction**: Click **Wrong Answer?** → choose the correct option (e.g. `(b)`). You should see **"Updated answers.js"**. Refresh — the correction should persist.
6. **Explanation**: Click **Add Explanation** → type an explanation (LaTeX supported: `\( \)` for inline, `\[ \]` for display) → **Save**. You should see **"Updated explanations.js"**. Refresh — the explanation should persist.
7. **Revision Notes**: Switch to **Revision Notes** mode → edit a section or add a new one → **Save**. You should see **"Updated notes.js"**. Refresh — the notes should persist.
8. Check your GitHub repo — `answers.js`, `explanations.js`, and `notes.js` should have new commits when you make edits

---

## How It Works

| Environment      | Answer corrections | Explanation edits | Revision Notes (notes.js) |
|------------------|--------------------|-------------------|---------------------------|
| **Local (server.py)** | Writes to `answers.js` on your machine | Writes to `explanations.js` on your machine | Writes to `notes.js` on your machine |
| **Vercel (live)**    | API updates `answers.js` in GitHub | API updates `explanations.js` in GitHub | API updates `notes.js` in GitHub |
| **GitHub Pages**     | Stored in `localStorage` only | Stored in `localStorage` only | Not available |

---

## Troubleshooting

### "Server misconfigured"
- Ensure `GITHUB_TOKEN`, `GITHUB_OWNER`, and `GITHUB_REPO` are set in Vercel **Environment Variables**
- For admin login: set `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_NAME`, and `CONTACT_EMAIL`
- Redeploy after adding or changing env vars

### "GitHub GET failed" or "GitHub PUT failed"
- Confirm the PAT has **repo** scope
- Confirm `GITHUB_OWNER` and `GITHUB_REPO` match your repo exactly (case-sensitive)

### "Question not found in answers.js"
- The question number or path (paper/section/year) may not exist in `answers.js`
- Check that the question has an entry in the correct section

### "Question not found in explanations.js"
- The explanations skeleton must mirror `answers.js`. Run `node generate_explanations.js` to regenerate `explanations.js` from `answers.js` if the structure is out of sync.

### Corrections not persisting
- Check the browser Network tab for the `/api/correct` request
- If it returns 200 and `{ ok: true }`, the update was successful
- A new commit should appear in your GitHub repo

### Notes (notes.js) not updating on Vercel
- Ensure `api/notes.js` exists and is deployed (Vercel creates `/api/notes` from it)
- Same `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO` env vars are used for notes
- Check Network tab for `/api/notes` — 404 means the serverless function is missing

---

## Study chat (Ollama)

The question bank includes a **Chat** panel on `main.html` for **logged-in admins only** (`sessionStorage` after successful `/api/auth`). Non-admins do not load `chat/bootstrap.js`, the floating **Chat** button, or the per-question **Ask AI** control. The same-origin proxy (`/api/ollama/chat`, `/api/ollama/health`) is not separately authenticated from the browser; treat like other backend routes and restrict deployment exposure if you rely on obscurity.

It streams from **Ollama** through that proxy so the browser never talks to `localhost:11434` directly (avoids CORS issues). UI and scripts live under the `chat/` folder.

### Local (recommended)

1. Install [Ollama](https://ollama.com/) and pull the default model:

   ```bash
   ollama pull qwen2.5:7b
   ```

2. Run the **Python** app server (not plain `http.server`), so `/api/ollama/chat` and `/api/ollama/health` exist:

   ```bash
   python3 server.py 8000
   ```

3. Open `http://localhost:8000/main.html`, **Admin Login**, then return to the bank (or refresh). Use the **Chat** floating button (shortcut **⌘J** / **Ctrl+J**).

Optional: set `OLLAMA_HOST` in `.env` if Ollama listens elsewhere (default `http://127.0.0.1:11434`).

The chat loads `syllabus.md` into the **system** prompt for syllabus-grounded scope (not full RAG over the whole site).

### Vercel

Serverless functions cannot run Ollama. Admins still need to log in on the deployed site to see chat UI. To use chat on the deployed site you must:

1. Run Ollama on a machine you control (home Mac, VPS, etc.) reachable over HTTPS or your network.
2. Set project env **`OLLAMA_HOST`** (or **`OLLAMA_BASE_URL`**) to that base URL **without** a trailing slash, e.g. `https://ollama.example.com` so the function can call `…/api/chat` and `…/api/tags`.

If `OLLAMA_HOST` is unset, the health check reports “not configured” and chat requests return 503 until you add it or use the local Python server instead.

---

## Local Development

For local development with live corrections, explanations, notes, and admin login:

```bash
# Create .env from .env.example and set ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_NAME, CONTACT_EMAIL
# (server.py loads .env automatically; do not commit .env)

# Option 1: Python server (writes to answers.js, explanations.js, notes.js; supports login)
python3 server.py 8000
# Open http://localhost:8000/main.html

# Option 2: Static only (corrections/explanations go to localStorage; notes not persisted; login requires API; Ollama chat proxy missing)
python3 -m http.server 8000
# Open http://localhost:8000/main.html
```

---

## Custom fonts (Adobe Fonts) — optional

The UI uses **Atvik** (sans) and **Freight Display Pro** / **Freight Big Pro** (serif). Stacks and fallbacks are in `fonts.css`. Until Adobe Fonts is wired up, the app uses system fallbacks (still fully usable).

1. At [fonts.adobe.com](https://fonts.adobe.com), add **Atvik** and **Freight Display Pro** (or **Freight Big Pro**) to a **Web Project**.
2. Copy the project embed link (`https://use.typekit.net/xxxxx.css`).
3. In **`main.html`** and **`login.html`**, uncomment and set:
   ```html
   <link rel="stylesheet" href="https://use.typekit.net/YOUR_KIT_ID.css">
   ```
4. Redeploy to Vercel (or refresh locally). No build step required — static CSS/HTML only.

Theme colors are defined in `styles.css` (`:root` = dark, `.light-theme` = light). Hero photos: `--top-hero-image` and `--page-hero-image` (four WebPs in `assets/` — see [`assets/README.md`](assets/README.md)). Overlays: `--hero-overlay-*`, `--page-backdrop-scrim`. Shared by `main.html` and `login.html`. **Questions** / **Topics** sticky FAB use **`--fab-bg`** + blur on the page photo; login hero chips and form fields stay **transparent bordered** (`--glass-border`, `--formula-shadow`). Filled pills remain for mode-toggle active, save, and correct-answer badges. **Wordmark** (`assets/upsc-iss-wordmark.svg`): drop-shadow on dark hero only (`body.light-theme .brand-wordmark { filter: none; }`). Edit primitives (`--bone`, `--charcoal`, …) and semantic tokens in `:root` / `.light-theme`; swap images via `assets/IMAGE-PROMPTS.md`. See README → [Theme changes in 3 steps](README.md#theme-changes-in-3-steps) and **Bone & Charcoal glass UI**.

---

## Summary

1. Create a GitHub PAT with `repo` scope  
2. Deploy to Vercel and add `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO`  
3. Add `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_NAME`, `CONTACT_EMAIL` for admin login  
4. Answer corrections, explanation edits, and Revision Notes on the live site will update `answers.js`, `explanations.js`, and `notes.js` in your GitHub repo
