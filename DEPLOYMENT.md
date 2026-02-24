# ISS Statistics Question Bank — Deployment Guide

This guide walks you through deploying the app to **Vercel** (free) so that **answer corrections work on the live site** and update `answers.js` in your GitHub repo.

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

   | Name           | Value                    |
   |----------------|--------------------------|
   | `GITHUB_TOKEN` | Your PAT from Step 1     |
   | `GITHUB_OWNER` | Your GitHub username     |
   | `GITHUB_REPO`  | Your repo name           |

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
2. Select a paper, section, and year
3. Click **Show Answer** on a question
4. Click **Wrong Answer?** → choose the correct option (e.g. `(b)`)
5. You should see: **"Updated answers.js"**
6. Refresh the page — the correction should persist (it was written to GitHub)
7. Check your GitHub repo — `answers.js` should have a new commit

---

## How It Works

| Environment      | Correction behavior                                      |
|------------------|----------------------------------------------------------|
| **Local (server.py)** | Writes directly to `answers.js` on your machine          |
| **Vercel (live)**    | API calls GitHub to update `answers.js` in the repo      |
| **GitHub Pages**     | No API → corrections stored in `localStorage` only      |

---

## Troubleshooting

### "Server misconfigured"
- Ensure `GITHUB_TOKEN`, `GITHUB_OWNER`, and `GITHUB_REPO` are set in Vercel **Environment Variables**
- Redeploy after adding or changing env vars

### "GitHub GET failed" or "GitHub PUT failed"
- Confirm the PAT has **repo** scope
- Confirm `GITHUB_OWNER` and `GITHUB_REPO` match your repo exactly (case-sensitive)

### "Question not found in answers.js"
- The question number or path (paper/section/year) may not exist in `answers.js`
- Check that the question has an entry in the correct section

### Corrections not persisting
- Check the browser Network tab for the `/api/correct` request
- If it returns 200 and `{ ok: true }`, the update was successful
- A new commit should appear in your GitHub repo

---

## Local Development

For local development with live corrections:

```bash
# Option 1: Python server (writes to local answers.js)
python3 server.py 8000
# Open http://localhost:8000/main.html

# Option 2: Static only (corrections go to localStorage)
python3 -m http.server 8000
# Open http://localhost:8000/main.html
```

---

## Summary

1. Create a GitHub PAT with `repo` scope  
2. Deploy to Vercel and add `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO`  
3. Corrections on the live site will update `answers.js` in your GitHub repo
