# UPSC ISS Statistics Question Bank

> 🌐 **Live:** [**Vercel**](https://iss-statistics-question-bank.vercel.app/) (primary, with API) · [GitHub Pages](https://mohit5352.github.io/iss-statistics-question-bank/main.html) — Free UPSC ISS Statistics Paper I & II question bank. **Statistics Paper I:** Probability & Statistics, Numerical Analysis, Computer. **Statistics Paper II:** Linear Models, Statistical Inference, Official Statistics. 2017–2025. MathJax, instant answers, **Revision Notes** with markdown.

This repository contains a web-based archive of **objective MCQs** from UPSC ISS **Statistics Paper I** and **Statistics Paper II**, organised by **paper**, **section**, and **year**. Aligned with the official UPSC ISS syllabus:

**Paper I:**
- Probability & Statistics
- Numerical Analysis
- Computer Section

**Paper II:**
- Linear Models
- Statistical Inference and Hypothesis Testing
- Official Statistics

## 📁 File Structure

```
statistics_question_bank/
├── main.html                                      # Main navigation interface (paper + section + year switcher)
├── login.html                                     # Admin login page (credentials from env)
├── styles.css                                     # Styling for question cards and layout
├── answers.js                                     # Centralized answer keys for Show Answer feature
├── explanations.js                                # Explanations for each question (skeleton mirrors answers.js; empty template literals)
├── notes.js                                       # Revision Notes per paper/section (sections, tips; markdown + LaTeX)
├── server.py                                      # Local server with answer correction + explanation + notes + auth (writes to answers.js, explanations.js, notes.js)
├── api/
│   ├── correct.js                                 # Vercel serverless API for live answer corrections (single or batch; updates GitHub)
│   ├── explanations.js                            # Vercel serverless API for live explanation edits (updates explanations.js in GitHub)
│   ├── notes.js                                   # Vercel serverless API for Revision Notes edits (updates notes.js in GitHub)
│   ├── auth.js                                    # Admin login validation (ADMIN_USERNAME, ADMIN_PASSWORD)
│   └── config.js                                 # Public config (CONTACT_EMAIL for login page)
├── vercel.json                                    # Vercel config (rewrites / to main.html, /login to login.html)
├── robots.txt                                     # Search engine crawl rules; points to sitemap
├── sitemap.xml                                    # Sitemap for search engines and AI crawlers
├── .env.example                                   # Example env vars (ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_NAME, CONTACT_EMAIL)
├── DEPLOYMENT.md                                  # Deployment guide for Vercel (live corrections, explanations, notes + admin login)
├── QUICK_START.md                                 # Quick start guide
├── start-server.sh                                # Quick start script for local server (Mac/Linux)
├── start-server.bat                               # Quick start script for local server (Windows)
├── pdfs/                                          # Source PDFs for all sections
├── extracted_htmls/                               # Extracted question HTML files
│   ├── stats_paper_1/
│   │   ├── Probability_&_Statistics/
│   │   │   └── Probability_and_Statistics_questions_YYYY.html
│   │   ├── Numerical_Analysis/
│   │   │   └── Numerical_Analysis_questions_YYYY.html
│   │   └── Computer/
│   │       └── Computer_questions_YYYY.html
│   └── stats_paper_2/
│       ├── Linear_Models/
│       │   └── Linear_Models_questions_YYYY.html
│       ├── Statistical_Inference_and_Hypothesis_Testing/
│       │   └── Statistical_Inference_and_Hypothesis_Testing_questions_YYYY.html
│       └── Official_Statistics/
│           └── Official_Statistics_questions_YYYY.html
└── README.md                                      # This file
```

## 🚀 Quick Start

### Desktop Usage (Easiest)
1. Open `main.html` directly in your web browser (double-click the file)
2. Select paper, section, and year from the dropdowns
3. Questions will load automatically

### Mobile Usage (Recommended: Local Web Server)
1. **Start the server** on your computer:
   - **Mac/Linux**: Double-click `start-server.sh` or run:
     ```bash
     cd "/path/to/statistics_question_bank"
     python3 server.py 8000
     ```
   - **Windows**: Double-click `start-server.bat` or run:
     ```cmd
     cd "path\to\statistics_question_bank"
     python server.py 8000
     ```
   - **Note**: `server.py` serves static files and supports **answer corrections** (writes to `answers.js`), **explanation edits** (writes to `explanations.js`), **Revision Notes** (writes to `notes.js`), and **admin login**. For static-only serving, use `python3 -m http.server 8000` instead. For local login, create `.env` from `.env.example` and set `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_NAME`, `CONTACT_EMAIL`.

2. **Find your computer's IP address**:
   - Mac: System Preferences → Network → IP Address
   - Windows: Run `ipconfig` → Look for IPv4 Address
   - Linux: Run `hostname -I`

3. **On your phone** (same WiFi network):
   - Open browser and go to: `http://YOUR_IP:8000/main.html`
   - Example: `http://192.168.1.100:8000/main.html`
   - Bookmark this URL for easy access!

**Note**: Mobile browsers block loading local files directly. Using a local web server is the most reliable method.

### Live Deployment (Vercel) — Answer Corrections, Explanations & Revision Notes on Production

To deploy so that **answer corrections**, **explanation edits**, and **Revision Notes** work on the live site (updating `answers.js`, `explanations.js`, and `notes.js` in GitHub), use **Vercel** (free tier). See **[DEPLOYMENT.md](DEPLOYMENT.md)** for step-by-step instructions (GitHub PAT, env vars, admin login). Set `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO` for corrections, explanations, and notes; and `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_NAME`, `CONTACT_EMAIL` for admin login.

## 🎯 Features

- **Sticky Header**: Paper/Section/Year controls stay visible at the top while scrolling
- **Paper Switcher**: Switch between Paper I and Paper II
- **Section Switcher**: 
  - Paper I: Switch between Probability & Statistics, Numerical Analysis, and Computer sections
  - Paper II: Switch between Linear Models, Statistical Inference and Hypothesis Testing, and Official Statistics
- **Year Navigation**: Browse questions from 2017 to 2025
- **Copy Button**: Each question has a copy button (📋) to easily copy the question text, topic, and options. Tables are preserved with proper structure (tab-separated cells, newline-separated rows) so pasted content stays readable.
- **Show Answer Button**: Eye icon (👁) that reveals the correct answer with **purple highlighting** and an animated checkmark (✓) badge on the right side of the option
- **Admin Login**: An **Admin Login** link appears below the Paper/Section/Year controls. Only admins (logged in) can update answers. See [Admin Login & Roles](#admin-login--roles).
- **Wrong Answer? / Correct Answer**: When logged in as admin and the answer is visible, a **Wrong Answer?** link appears in the action row. Click it to reveal inline option chips (a)(b)(c)(d) — select the correct one to update `answers.js`. Corrections are **batched** (15s debounce) to minimize GitHub commits when deployed on Vercel. See [Answer Correction Scenarios](#-answer-correction-scenarios) for how updates work in different deployments.
- **Add/Edit Explanation**: When logged in as admin and the answer is visible, an **Add Explanation** or **Edit Explanation** link appears in the action row. Click it to add or edit a step-by-step explanation for the question (supports LaTeX). Explanations are stored in `explanations.js` and follow the same deployment pattern as answers.
- **Revision Notes**: Mode toggle (**Questions** | **Revision Notes**) switches between the question bank and a revision notes viewer. Notes are organised by paper and section (e.g. Probability & Statistics, Linear Models). Features a **collapsible sidebar** for quick navigation between key topics. Each section has multiple subsections with titles and content. **Copy**, **Edit**, and **Delete** (admin) icon buttons appear in both the sidebar and each topic header. Add, edit, or delete sections; edit tips per topic. **Markdown** and **LaTeX** supported in notes. **Formatting help** (collapsible) is available in all note editors.
- **Sidebar Navigation**: In Revision Notes mode, a sleek, collapsible sidebar provides an interactive Table of Contents. Each TOC item has **Copy**, **Edit**, and **Delete** (admin) icon buttons — Copy shows a checkmark "Copied" state like the question copy button. **Revision Tips** appears as the last TOC item when tips exist. The **active section is highlighted** as you scroll (works on both mobile and desktop). Links feature smooth hover transitions, a vertical purple accent indicator, and glass-tile styling. **Outside click** closes the sidebar. On mobile, the sidebar becomes a slide-out drawer accessible via a floating **Topics** button.
- **Theme Toggle**: Sun/moon icon in the header switches between **dark** (default) and **light** themes. Preference is saved in `localStorage` and persists across sessions. The login page also supports both themes and syncs with the main app.
- **Mobile Optimized**: Responsive design with touch-friendly controls
- **Math Rendering**: Beautiful mathematical notation using MathJax
- **Color-Coded Interface**: **Dark theme** (default) — Obsidian-style matte/near-black background with an all-purple accent palette. **Light theme** — soft off-white background with equivalent purple accents for readability. Toggle via sun/moon icon in the header. Dark theme palette:
  - **Background**: Near-black (`#0a0a0e`) body; dark surface (`#111117`) sticky header
  - **Paper Title (h1)**: Pale lavender (`#e0d7ff`) with soft purple glow
  - **Set Indicator**: Divider-style row with converging purple gradient lines and uppercase `SET ◆ X` label in `#a78bfa`
  - **Meta Controls (Paper / Section / Year)**: Unified pill panel — purple-glass background, dim ALL-CAPS labels, bold lavender values (`#c4b5fd`); hidden `<select>` overlay makes each zone clickable
  - **Question Cards**: Purple-tinted glass surface (`rgba(124,58,237,0.05)`), subtle depth shadow; hover lifts with a purple ring
  - **Question Number**: Purple (`#a78bfa`) with matching glow
  - **Question Topic**: Italic orchid annotation (`#f0abfc`, weight 500) — no badge, no border
  - **Question Text**: Primary near-white (`#f1f0f7`); MathJax expressions render in lavender (`#c4b5fd`)
  - **Context Block**: Muted lavender text (`#b0aac8`) on near-black background; identified only by a purple gradient left stripe — no label
  - **Options**: Bare orchid text (`#f0abfc`) with small fuchsia capsule labels (`#d946ef`); no borders or backgrounds
  - **Context Block bold text**: Orchid (`#f0abfc`) matching option items; MathJax expressions in lavender (`#c4b5fd`) consistent with question text
  - **Correct Answer Highlight**: Purple theme — lavender text (`#e0d7ff`), near-black background, purple-gradient animated checkmark badge (✓), white glow shadow with glass-top highlight
  - **Tables**: Purple → lavender gradient header row, lavender first-column, minimal hairline separators
- **Action Row**: Single row at bottom of each card — `[Wrong Answer?]` and `[Add/Edit Explanation]` on the left (admin only); `[Show Answer]` and `[Copy]` icons on the right; purple gradient separator above; copy turns purple on success (`#a78bfa`); answer button glows purple while active
- **Enhanced Tables**: Styled tables with colored headers, alternating rows, and hover effects
- **Offline Capable**: Works without internet (except for MathJax CDN)
- **Smooth Animations**: Button hover effects, answer highlight animations, and transitions

## 📋 Instructions for Extracting Questions

### Step 1: Obtain the Source Material
1. Access the ISS Statistics examination paper (Paper I or Paper II) for the target year
2. Locate the relevant section:
   - **Paper I**: Probability & Statistics, Numerical Analysis, or Computer
   - **Paper II**: Linear Models, Statistical Inference and Hypothesis Testing, or Official Statistics
3. Identify questions numbered sequentially

### Step 2: Create the Year-Specific HTML Files

**For Paper I**, for each year `YYYY`, create up to **three** files (one per section) in their respective subfolders:
1. `extracted_htmls/stats_paper_1/Probability_&_Statistics/Probability_and_Statistics_questions_YYYY.html`
2. `extracted_htmls/stats_paper_1/Numerical_Analysis/Numerical_Analysis_questions_YYYY.html`
3. `extracted_htmls/stats_paper_1/Computer/Computer_questions_YYYY.html`

**For Paper II**, for each year `YYYY`, create up to **three** files (one per section) in their respective subfolders:
1. `extracted_htmls/stats_paper_2/Linear_Models/Linear_Models_questions_YYYY.html`
2. `extracted_htmls/stats_paper_2/Statistical_Inference_and_Hypothesis_Testing/Statistical_Inference_and_Hypothesis_Testing_questions_YYYY.html`
3. `extracted_htmls/stats_paper_2/Official_Statistics/Official_Statistics_questions_YYYY.html`

You can copy the base HTML structure from an existing year file and modify it.

### Step 3: HTML File Structure Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
    <link rel="stylesheet" href="../../../styles.css">
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
<div class="year-section">
    <h2>ISS YYYY: Statistics Paper I - [SECTION NAME HERE]</h2>
    <!-- For Paper II, use: ISS YYYY: Statistics Paper II - [SECTION NAME HERE] -->

    <!-- Question cards go here -->
    
</div>
</body>
</html>
```

**Notes**: 
- The CSS path `../../../styles.css` is relative to the subfolder structure. Since question files are in `extracted_htmls/stats_paper_1/[Section]/` or `extracted_htmls/stats_paper_2/[Section]/`, the path goes up three levels (`[Section]/` → `stats_paper_1/` or `stats_paper_2/` → `extracted_htmls/` → `statistics_question_bank/`) to reach `styles.css` in the `statistics_question_bank/` directory.
- The `<h2>` tag styling is handled by CSS class `.year-section h2` - no inline styles needed. The header will automatically have light purple color (`#c4b5fd`), center alignment, and a bottom border.
- Update the header text to match the paper number (Paper I or Paper II) and section name.

### Step 4: Format Each Question

#### Basic Question Format:
```html
<div class="question-card">
    <div class="q-header">
        <span class="q-number">X.</span>
        <span class="q-topic">[Topic: Topic Name]</span>
    </div>
    <div class="q-text">
        Question text with mathematical notation using LaTeX syntax.
        For example: \( X \sim N(\mu, \sigma^2) \) for inline math.
        For display math: \[ E(X) = \mu \]
    </div>
    <div class="options-grid">
        <div class="option-item"><span class="opt-label">(a)</span> Option A text</div>
        <div class="option-item"><span class="opt-label">(b)</span> Option B text</div>
        <div class="option-item"><span class="opt-label">(c)</span> Option C text</div>
        <div class="option-item"><span class="opt-label">(d)</span> Option D text</div>
    </div>
</div>
```

#### Questions with Context/Setup:
```html
<div class="question-card">
    <div class="q-context">
        <strong>Consider the following for the next N items:</strong><br>
        Setup text with mathematical notation...
    </div>
</div>

<!-- Then follow with the individual questions using the basic format above -->
```

#### Questions with Tables:
```html
<div class="question-card">
    <div class="q-header">
        <span class="q-number">X.</span>
        <span class="q-topic">[Topic: Topic Name]</span>
    </div>
    <div class="q-text">Question text</div>
    <div class="q-table">
        <table>
            <tr>
                <td>Header 1</td>
                <td>Header 2</td>
            </tr>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
            </tr>
        </table>
    </div>
    <div class="options-grid">
        <!-- Options here -->
    </div>
</div>
```

### Step 5: Mathematical Notation Guidelines

**⚠️ IMPORTANT**: Always use **LaTeX notation**, NOT HTML entities or tags!

- **Inline math**: Use `\( ... \)` for mathematical expressions within text
- **Display math**: Use `\[ ... \]` for centered, standalone equations

**Common symbols**:
- Greek letters: `\alpha`, `\beta`, `\mu`, `\sigma`, `\theta`, `\lambda`, `\pi`
- Distributions: `N(\mu, \sigma^2)`, `U(a, b)`, `\text{Beta}(\alpha, \beta)`, etc.
- Operators: `\sum`, `\prod`, `\int`, `\lim`, `\sqrt{}`, `\pm`, `\ge`, `\le`
- Relations: `\sim`, `\approx`, `\neq`, `\in`, `\subset`, `\cup`, `\cap`

**❌ WRONG** (HTML entities):
```html
X<sub>1</sub> with &lambda;<sub>1</sub> and &sigma; &ge; 0
```

**✅ CORRECT** (LaTeX):
```html
\( X_1 \) with \( \lambda_1 \) and \( \sigma \ge 0 \)
```

### Step 6: Update main.html

To add a new year, add it to the year dropdown in `main.html`:

```html
<option value="YYYY">YYYY</option>
```

The JavaScript automatically loads the correct file based on the selected paper, section, and year:

**Paper I:**
- Probability & Statistics → `extracted_htmls/stats_paper_1/Probability_&_Statistics/Probability_and_Statistics_questions_YYYY.html`
- Numerical Analysis → `extracted_htmls/stats_paper_1/Numerical_Analysis/Numerical_Analysis_questions_YYYY.html`
- Computer Section → `extracted_htmls/stats_paper_1/Computer/Computer_questions_YYYY.html`

**Paper II:**
- Linear Models → `extracted_htmls/stats_paper_2/Linear_Models/Linear_Models_questions_YYYY.html`
- Statistical Inference and Hypothesis Testing → `extracted_htmls/stats_paper_2/Statistical_Inference_and_Hypothesis_Testing/Statistical_Inference_and_Hypothesis_Testing_questions_YYYY.html`
- Official Statistics → `extracted_htmls/stats_paper_2/Official_Statistics/Official_Statistics_questions_YYYY.html`

### Step 7: Verify the Questions

For **each section file** and each year:
1. Ensure all questions are present and numbered sequentially
2. Check that all mathematical notation renders correctly (MathJax)
3. Verify that all four options (a, b, c, d) are present for each question
4. Test navigation in `main.html` to ensure files load correctly

## 🎨 CSS Classes Reference

- `.sticky-header`: Sticky header — `position: sticky`, near-black surface (`#111117`), hairline bottom separator
- `.paper-container`: Transparent wrapper — no background, no border, no padding
- `.set-indicator-wrap`: Flex row containing two converging gradient lines and the `SET ◆ X` text; sits between `h1` and the meta panel
- `.set-indicator-text` / `#set-letter`: Uppercase set label (`#a78bfa`) with the dynamic set letter rendered brighter (`#c4b5fd`)
- `.auth-row` / `.auth-wrap` / `.auth-pill`: Admin Login link (or "Admin: [Name]" when logged in) below meta controls
- `.meta-controls`: Unified pill panel (max-width 680px) for Paper / Section / Year controls — purple-glass background, faint ring shadow
- `.meta-item`: Individual clickable zone inside the panel (stacked label + value); a hidden `<select>` covers the zone for native dropdown behaviour
- `.meta-label`: Tiny ALL-CAPS dim label (`#3a3a50`) above each value
- `.meta-value`: Bold lavender display value (`#c4b5fd`) — brightens to `#e0d7ff` on hover
- `.meta-sep-line`: 1 px vertical hairline separator between meta zones
- `.question-card`: Card container — purple-tinted glass background, depth shadow; hover adds a purple ring lift; action row in document flow at bottom
- `.question-card.no-surface`: Transparent variant for context-only cards (no bg, no shadow)
- `.q-header`: Question header row — subtle purple → lavender gradient background, rounded (`8px`), thin purple-tinted bottom hairline, white glow shadow with glass-top highlight
- `.q-number`: Question number — purple (`#a78bfa`) with matching glow
- `.q-topic`: Topic annotation — italic, orchid (`#f0abfc`, weight 500), no badge or border; purely inline text
- `.q-text`: Main question text — near-white (`#f1f0f7`), `1.125rem`, no background or border
- `.q-context`: Shared context block — muted lavender text (`#b0aac8`) on near-black bg (`#0a0a0e`); vertical padding, rounded corners, white glow shadow with glass-top highlight; a purple gradient `::before` stripe is the only visual accent; no "CONTEXT" label
- `.q-table`: Responsive table wrapper — purple → lavender gradient header row, soft lavender first column, minimal hairline row separators, white glow shadow with glass-top highlight
- `.options-grid`: 2-column grid (1-column on ≤ 600 px); bare transparent container — no background, no border
- `.option-item`: Individual option — bare orchid text (`#f0abfc`), no background or border
- `.opt-label`: `(a)` / `(b)` / `(c)` / `(d)` capsule badge — fuchsia (`#d946ef`) on translucent fuchsia background
- `.q-actions-row`: Action row at bottom of card — flex layout with separator above; contains left (Wrong Answer?) and right (Show Answer + Copy) sections
- `.q-actions-left` / `.q-actions-right`: Left and right sections of the action row
- `.q-copy-btn`: Copy icon button — purple icon, faint ring; turns purple (`#a78bfa`) on success
- `.q-answer-btn`: Show/Hide Answer icon button — purple icon; glows lavender while answer is visible
- `.wrong-answer-wrap`: Container for Wrong Answer? trigger and picker (visible when answer is shown; admin only)
- `.wrong-answer-trigger`: "Wrong Answer?" link — rose (`#fb7185`); click to expand picker
- `.wrong-answer-picker`: Expandable section with "Choose correct answer:" hint and (a)(b)(c)(d) chips
- `.wrong-answer-chip`: Option chip button — selects correct answer on click
- `.correct-answer`: Correct option — lavender text (`#e0d7ff`), near-black background, rounded corners, white glow shadow with glass-top highlight, purple-gradient animated `✓` badge on the right
- `.notes-layout` / `.notes-sidebar` / `.notes-main-content`: Layout structure for Revision Notes; supports fixed positioning, unified transitions, and collapsible states
- `.toc-item` / `.toc-item-actions` / `.toc-action-btn`: Sidebar TOC row with Copy, Edit, Delete icon buttons; `.toc-action-btn.copied` shows checkmark state after copy
- `.toc-link` / `.toc-link.active`: Sidebar navigation links with interactive hover states, pure white text highlight, and vertical purple accent indicators; `.active` highlights the current section based on scroll position
- `.note-section-actions` / `.note-section-action-btn`: Topic header icon buttons (Copy, Edit, Delete); Copy shows "Copied" checkmark state
- `.sidebar-open-btn` / `.sidebar-close-btn`: Floating and inline toggle buttons for the sidebar with modern easing and shadow effects
- `.year-section`: Wrapper for all questions of a year inside a loaded HTML file

## 📝 Checklist for Adding a New Year

**For Paper I:**
- [ ] Obtain ISS Statistics Paper I for the target year (PDFs are under `statistics_question_bank/pdfs/`)
- [ ] Extract all questions for each section
- [ ] Create `extracted_htmls/stats_paper_1/Probability_&_Statistics/Probability_and_Statistics_questions_YYYY.html`
- [ ] Create `extracted_htmls/stats_paper_1/Numerical_Analysis/Numerical_Analysis_questions_YYYY.html`
- [ ] Create `extracted_htmls/stats_paper_1/Computer/Computer_questions_YYYY.html`
- [ ] Format each question using the HTML structure above
- [ ] **Use LaTeX notation** for all mathematical expressions (NOT HTML entities)
- [ ] Verify questions are numbered sequentially within each section
- [ ] Check that all questions have 4 options (a, b, c, d)
- [ ] Add year option to dropdown in `main.html` (if not already present)
- [ ] Add answer keys to `answers.js` (see Show Answer Feature section)
- [ ] (Optional) Add explanations to `explanations.js` or use Add/Edit Explanation in the UI
- [ ] (Optional) Add or edit Revision Notes in `notes.js` via the Revision Notes mode in the UI
- [ ] Test that all section files load correctly
- [ ] Verify MathJax renders all mathematical expressions correctly

**For Paper II:**
- [ ] Obtain ISS Statistics Paper II for the target year (PDFs are under `statistics_question_bank/pdfs/`)
- [ ] Extract all questions for each section
- [ ] Create `extracted_htmls/stats_paper_2/Linear_Models/Linear_Models_questions_YYYY.html`
- [ ] Create `extracted_htmls/stats_paper_2/Statistical_Inference_and_Hypothesis_Testing/Statistical_Inference_and_Hypothesis_Testing_questions_YYYY.html`
- [ ] Create `extracted_htmls/stats_paper_2/Official_Statistics/Official_Statistics_questions_YYYY.html`
- [ ] Format each question using the HTML structure above
- [ ] **Use LaTeX notation** for all mathematical expressions (NOT HTML entities)
- [ ] Verify questions are numbered sequentially within each section
- [ ] Check that all questions have 4 options (a, b, c, d)
- [ ] Add year option to dropdown in `main.html` (if not already present)
- [ ] Add answer keys to `answers.js` (see Show Answer Feature section)
- [ ] (Optional) Add explanations to `explanations.js` or use Add/Edit Explanation in the UI
- [ ] (Optional) Add or edit Revision Notes in `notes.js` via the Revision Notes mode in the UI
- [ ] Test that all section files load correctly
- [ ] Verify MathJax renders all mathematical expressions correctly

## 🔧 Technical Details

- **Sticky Header**: Header with Paper/Section/Year controls stays at the top while scrolling using `position: sticky`
- **Math Rendering**: MathJax 3.x is used for rendering mathematical notation. Math expressions are properly rendered in all elements (q-text, q-context, option-item) with consistent styling across desktop and mobile.
- **Answer System**: Answers are stored in `answers.js` and loaded dynamically via JavaScript. The `main.html` script injects show answer buttons and handles toggle functionality.
- **Copy / Table Handling**: Copy captures LaTeX source (pre-MathJax) when available. Tables (`.q-table`) are formatted with tab-separated cells and newline-separated rows so pasted content preserves structure.
- **Answer Correction System**: Corrections are submitted via `POST /api/correct`. Only **admins** (logged in) can submit corrections. On Vercel, the frontend **batches** corrections (15s debounce) and sends them in one request to reduce GitHub commits; `sendBeacon` flushes the queue on page unload. Behaviour by deployment: **Local** (`server.py`) writes to `answers.js`; **Vercel** (`api/correct.js`) pushes updates to GitHub; **GitHub Pages** / static hosting falls back to `localStorage`.
- **Explanation System**: Explanations are stored in `explanations.js` (skeleton mirrors `answers.js`; values are empty template literals). Admins can add or edit explanations via **Add/Edit Explanation** when the answer is visible. Edits are submitted via `POST /api/explanations`. Behaviour by deployment: **Local** (`server.py`) writes to `explanations.js`; **Vercel** (`api/explanations.js`) pushes updates to GitHub; **GitHub Pages** / static hosting falls back to `localStorage`.
- **Revision Notes System**: Notes are stored in `notes.js` (structure: `paper`, `section`, `sections[]` with `id`, `label`, `content`, plus `tips` per topic). **Markdown** supports: headers (`#`–`######`), **bold** (`**text**`), *italic* (`*text*`), `inline code`, fenced code blocks (` ``` `), lists (`-` or `1.`), blockquote (`>`), horizontal rule (`---`), tables (`| col | col |`). **LaTeX**: inline `\( ... \)`, block `\[ ... \]`, or `$...$` / `$$...$$`. A collapsible **Formatting help** appears in all note editors. Edits are submitted via `POST /api/notes`. **Local** writes to `notes.js`; **Vercel** (`api/notes.js`) pushes to GitHub; **GitHub Pages** / static: not available. **Sidebar TOC** highlights the active section on scroll (listens to both content-viewer and window scroll); outside click closes the sidebar. **Copy** (raw markdown), **Edit**, and **Delete** (admin) actions available in both the sidebar and each topic header; Copy shows a checkmark "Copied" state.
- **Admin Login**: Credentials are validated via `POST /api/auth`; contact email is served via `GET /api/config`. Env vars: `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_NAME`, `CONTACT_EMAIL`.
- **Responsive Design**: The layout adapts to different screen sizes
  - Options grid: 2 columns on desktop, 1 column on mobile (< 600px)
  - Touch-friendly controls on mobile (minimum 44px touch targets)
  - Responsive tables with horizontal scroll on mobile
  - Full-width layout (no max-width constraint) for better screen utilization
- **Typography**: Consistent rem-based font sizes with responsive scaling:
  - Question text: `1.125rem` (desktop) → `1rem` (tablet) → `0.9375rem` (mobile)
  - Context text: `1.0625rem` (desktop) → `1rem` (tablet) → `0.9375rem` (mobile)
  - Option items: `1.0625rem` (desktop) → `0.9rem` (tablet) → `0.9375rem` (mobile)
  - All font sizes use rem units for consistent scaling and accessibility
- **Color Scheme**: **Dark theme** (default) — Obsidian-style near-black background (`#0a0a0e`), purple-glass card surfaces (`rgba(124,58,237,0.05)`), violet accent hierarchy (`#7c3aed` → `#a78bfa` → `#c4b5fd` → `#e0d7ff`), orchid/fuchsia option text (`#f0abfc` / `#d946ef`). **Light theme** — off-white background (`#f7f8fc`), equivalent purple accents, muted gray-purple for headings (`#4c4363`). Theme preference stored in `localStorage`; login page respects the same setting.
- **Browser Compatibility**: Works in all modern browsers that support ES6 and MathJax
- **Loading Method**: Unified fetch/XMLHttpRequest approach works for both desktop and mobile without iframe isolation
- **Animations**: CSS animations for button hover states, answer highlight transitions, and checkmark pop-in effect
- **SEO**: Meta tags aligned with UPSC ISS syllabus (description, keywords: UPSC ISS, Indian Statistical Service, Statistics Paper 1 & 2, probability, numerical analysis, linear models, statistical inference, official statistics), Open Graph, Twitter Card, JSON-LD (WebApplication schema with syllabus topics), `robots.txt`, `sitemap.xml`, canonical URLs (Vercel: https://iss-statistics-question-bank.vercel.app/), and `noscript` fallback for crawlers. Optimised for search engines and AI tools. If using a custom domain, update canonical/og URLs in `main.html`, `login.html`, `robots.txt`, and `sitemap.xml`.

## 📱 Mobile Features

- ✅ Sticky header for easy navigation
- ✅ Full-screen content display
- ✅ Touch-friendly navigation buttons
- ✅ Zoomable content (pinch to zoom math formulas)
- ✅ Responsive tables (horizontal scroll on small screens)
- ✅ Single-column options on small screens
- ✅ Optimized text sizes for readability

### Mobile Setup Tips

1. **Add to Home Screen**:
   - **iOS**: Safari → Share → "Add to Home Screen"
   - **Android**: Chrome → Menu → "Add to Home Screen"
   - Now it works like an app!

2. **Best Browser**:
   - **iOS**: Safari (best performance)
   - **Android**: Chrome (best compatibility)

3. **Offline Access**:
   - After loading once, browser caches files
   - Works offline if you've visited before
   - MathJax requires internet connection

## 🐛 Troubleshooting

### Questions not loading on desktop?
- Make sure all HTML files are in their correct subfolders under `extracted_htmls/stats_paper_1/` or `extracted_htmls/stats_paper_2/`
- Verify the file paths match the structure: `extracted_htmls/stats_paper_1/[Section]/[Filename].html` or `extracted_htmls/stats_paper_2/[Section]/[Filename].html`
- Check that the paper selector matches the file location (Paper I files in `stats_paper_1/`, Paper II files in `stats_paper_2/`)
- Verify section names match exactly (including underscores and capitalization)
- Check browser console for errors
- Try refreshing the page

### Questions not loading on mobile?
- **Use a local web server** (see Quick Start section above)
- Mobile browsers block loading local files directly due to security restrictions
- Make sure phone and computer are on the same WiFi network

### Math not rendering?
- Check internet connection (MathJax loads from CDN)
- Verify LaTeX syntax is correct (use `\( ... \)` for inline, `\[ ... \]` for display)
- Check browser console for MathJax errors

### Tables not displaying correctly?
- Make sure tables are wrapped in `<div class="q-table">` (not on the `<table>` itself)
- Check that table structure is valid HTML
- Tables feature enhanced styling with teal headers (`#059669`), dark slate backgrounds, alternating row colors, and hover effects

### Show Answer button not appearing?
- Make sure `answers.js` is loaded (check browser console for 404 errors)
- Verify the question has an answer key in `answers.js` for the current paper/section/year
- Check browser console for JavaScript errors
- Make sure the question has a `.q-number` element with a valid question number

### Answer highlight not working?
- Verify the correct answer format in `answers.js` (use "a", "b", "c", or "d" - lowercase)
- Check that the question has a `.options-grid` with `.option-item` elements
- Make sure option labels are formatted as `(a)`, `(b)`, `(c)`, `(d)`

### Corrections not updating answers.js?
- **GitHub Pages / file://**: Corrections are stored in `localStorage` only — they do not update the file. Deploy to [Vercel](DEPLOYMENT.md) or run `server.py` locally for persistent updates.
- **Vercel**: Ensure `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO` are set in Environment Variables. Redeploy after adding env vars.
- **Local server**: Use `python3 server.py 8000` (not `python3 -m http.server`) so the `/api/correct` endpoint is available.
- **Wrong Answer? not visible?**: You must be logged in as admin. See [Admin Login & Roles](#admin-login--roles). Set `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_NAME`, `CONTACT_EMAIL` in env vars.

### Explanations not updating explanations.js?
- **GitHub Pages / file://**: Explanation edits are stored in `localStorage` only. Deploy to [Vercel](DEPLOYMENT.md) or run `server.py` locally for persistent updates.
- **Vercel**: Same env vars as corrections (`GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO`). Redeploy after adding env vars.
- **Local server**: Use `python3 server.py 8000` so the `/api/explanations` endpoint is available.
- **Add/Edit Explanation not visible?**: You must be logged in as admin. Run `node generate_explanations.js` if `explanations.js` structure is out of sync with `answers.js`.

### Revision Notes (notes.js) not updating?
- **GitHub Pages / file://**: Revision Notes edits are not persisted on static hosting. Deploy to [Vercel](DEPLOYMENT.md) or run `server.py` locally.
- **Vercel**: Ensure `api/notes.js` is deployed (Vercel creates `/api/notes` from it). Same env vars: `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO`. Check Network tab for 404 on `/api/notes`.
- **Local server**: Use `python3 server.py 8000` so the `/api/notes` endpoint is available.

## 📚 Example Question Structure

Here's a complete example of a formatted question:

```html
<div class="question-card">
    <div class="q-header">
        <span class="q-number">1.</span>
        <span class="q-topic">[Topic: Order Statistics]</span>
    </div>
    <div class="q-text">
        If \( X_{(1)}, X_{(2)}, X_{(3)}, X_{(4)}, X_{(5)} \) are order statistics 
        from a population with pdf \( f(x)=2e^{-2x}, x > 0 \), then what is the 
        density function of \( X_{(1)} \)?
    </div>
    <div class="options-grid">
        <div class="option-item"><span class="opt-label">(a)</span> \( 10e^{-10x} \)</div>
        <div class="option-item"><span class="opt-label">(b)</span> \( 1-e^{-2x} \)</div>
        <div class="option-item"><span class="opt-label">(c)</span> \( 1-e^{-10x} \)</div>
        <div class="option-item"><span class="opt-label">(d)</span> \( 10e^{-2x} \)</div>
    </div>
</div>
```

## 📌 Important Notes

- Each **section file** should contain all questions for that section and year
- Questions should be numbered sequentially within each section (starting from 1)
- All questions must have exactly 4 options (a, b, c, d)
- **Mathematical notation must use LaTeX syntax** (NOT HTML entities like `&lambda;`, `&sigma;`, etc.)
- Topic tags should be descriptive and placed in square brackets
- The file naming conventions are strict and must be followed exactly
- Always include viewport meta tag in question HTML files for mobile support

## 🎯 Show Answer & Correct Answer Feature

The repository includes a **Show Answer** feature and a **Wrong Answer?** flow that lets admins suggest corrections when an answer is incorrect.

### Admin Login & Roles

- **Admin**: Only admins can update answers. Log in via the **Admin Login** link (below Paper/Section/Year controls). After login, you see "Admin: [Name]" with a logout icon.
- **User**: Regular users can browse questions, show answers, and copy — but cannot update answers (no Wrong Answer? link).
- **Login page** (`/login` or `login.html`): Username/password form with theme toggle (dark/light). Contact email is shown for users who need credentials; if it contains `@`, it’s a clickable `mailto:` link.
- **Env vars**: `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_NAME`, `CONTACT_EMAIL`. See [DEPLOYMENT.md](DEPLOYMENT.md) or `.env.example`.

### Show Answer — How It Works:
1. Answers are stored centrally in `answers.js` (no need to modify individual HTML files)
2. A **Show Answer** eye-icon button appears in the action row at the bottom of each question card
3. Clicking the button highlights the correct answer in **purple** (lavender text, near-black background) with an animated purple-gradient checkmark badge (✓) on the right side of the option
4. Clicking again hides the answer and removes the highlight

### Wrong Answer? — How It Works:
1. When logged in as admin and the answer is visible, **Wrong Answer?** appears in the action row (left side)
2. Click **Wrong Answer?** to expand the inline picker: **Choose correct answer:** followed by (a)(b)(c)(d) chips
3. Click the correct option chip — the displayed answer updates immediately; the correction is queued and saved according to the deployment scenario (see below)
4. **Batching (Vercel)**: Corrections are queued and sent in a single batch after 15 seconds of inactivity, or when you leave the page (`sendBeacon`), to minimize GitHub commits

### Answer Correction Scenarios

| Deployment | Correction behaviour |
|------------|----------------------|
| **Local (server.py)** | Corrections, explanations, and Revision Notes are written directly to `answers.js`, `explanations.js`, and `notes.js` on your machine. Run `python3 server.py 8000` and open `http://localhost:8000/main.html`. |
| **Vercel (live)** | Corrections and explanations are batched (15s debounce) and pushed to GitHub via `/api/correct` and `/api/explanations`. Revision Notes are pushed via `/api/notes`. Multiple edits in one session become a single commit. Requires `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO`; `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_NAME`, `CONTACT_EMAIL` for admin login. See [DEPLOYMENT.md](DEPLOYMENT.md). |
| **GitHub Pages** | No backend — corrections and explanations are stored in `localStorage` only (per browser/device). Revision Notes are not persisted. Toast shows *"Saved (use server to update answers.js)"* or *"Saved (use server to update explanations.js)"*. To persist edits, deploy to Vercel or run the local server. |
| **Static / file://** | Same as GitHub Pages — corrections and explanations go to `localStorage` only; Revision Notes are not persisted. |

### Adding Answer Keys:
To add answer keys, edit `answers.js` following this format:

```javascript
const QUESTION_ANSWERS = {
    "paper1": {  // Paper I
        "prob": {  // Probability & Statistics
            "2025": {
                "1": "a",  // Question 1 correct answer is (a)
                "2": "c",
                // ... more answers
            }
        },
        // ... other sections
    },
    "paper2": {  // Paper II
        "linear": {  // Linear Models
            "2025": {
                "51": "a",
                // ... more answers
            }
        },
        // ... other sections
    }
};
```

### Benefits:
- **Centralized**: All answers in one file — easy to manage and update
- **Dynamic**: No need to modify question HTML files
- **Extensible**: Simply add more answer keys as needed
- **Admin corrections**: On Vercel or local server, admins (logged in) can submit corrections that update `answers.js` directly

## 📒 Revision Notes & Markdown Formatting

Revision Notes are stored in `notes.js` and organised by paper and section. Each topic (e.g. Probability & Statistics) has multiple subsections with titles and content. Use **Markdown** and **LaTeX** when editing:

| Syntax | Example |
|--------|---------|
| **Headers** | `#` `##` `###` … `######` |
| **Bold** | `**text**` |
| **Italic** | `*text*` |
| **Inline code** | `` `code` `` |
| **Code block** | ` ``` ` on its own line, code, ` ``` ` |
| **Lists** | `- item` or `1. item` |
| **Blockquote** | `> quote` |
| **Horizontal rule** | `---` |
| **Table** | `| A | B |` header, `| --- | --- |` separator, `| 1 | 2 |` rows |
| **LaTeX inline** | `\( E = mc^2 \)` or `$...$` |
| **LaTeX block** | `\[ ... \]` or `$$...$$` |

A collapsible **Formatting help** appears in all note editors (question explanation, section content, tips). Use `*text*` for italics (avoid `_text_` as it can conflict with LaTeX subscripts).

## 🔄 Maintenance

When updating or fixing questions:
- Always maintain the HTML structure
- Preserve the CSS class names
- Use LaTeX notation for math (not HTML entities)
- Ensure MathJax compatibility
- Test in multiple browsers if possible
- Test on mobile devices

---

**Last Updated**: 2025/2026 — **Theme toggle** (dark/light), **Revision Notes** mode, markdown formatting, Vercel `api/notes.js`; Full **Obsidian Dark / Purple Theme** redesign:
- **Sticky Header** with paper title, set indicator divider (`SET ◆ X`), and a unified meta-controls pill panel (Paper / Section / Year)
- **Set Indicator**: Displays the exam set letter for each paper/year combination, rendered as a centred divider row with converging purple gradient lines
- **Meta Controls**: Dashboard-style pill panel replacing individual badges — hidden `<select>` overlays, dim ALL-CAPS labels, bold lavender values, vertical hairline separators
- **Question Cards**: Purple-tinted glass surface, depth shadow, smooth hover lift with purple ring; bottom padding reserved for the icon pair
- **Question Numbers & Headers**: Purple accent (`#a78bfa`); q-header has a subtle purple gradient background, rounded corners, and white glow shadow
- **Topic**: Italic orchid inline annotation (`#f0abfc`, weight 500) — no badge, no border
- **Context Block**: Near-black background with a purple gradient left stripe; bold text in orchid (`#f0abfc`); MathJax expressions in lavender (`#c4b5fd`) consistent with question text; "CONTEXT" label removed
- **Options**: Bare orchid text (`#f0abfc`) — no background, no border, no surface; option label is a small fuchsia (`#d946ef`) capsule
- **Admin Login**: Login link below meta controls; logged-in state shows "Admin: [Name]"; admin-only Wrong Answer? and Add/Edit Explanation features
- **Action Row & Wrong Answer? & Add/Edit Explanation**: Single row with Wrong Answer? and Add/Edit Explanation (left, admin only), Show Answer + Copy (right); Wrong Answer? expands to inline (a)(b)(c)(d) chips for corrections; Add/Edit Explanation toggles an inline editor for explanations (supports LaTeX)
- **Revision Notes**: Mode toggle (Questions | Revision Notes); topic-based sections with subsections; **collapsible sidebar** for navigation; add/edit/delete sections; markdown (headers, bold, italic, code, lists, blockquote, tables, code blocks) and LaTeX; collapsible Formatting help in editors
- **Theme Toggle**: Sun/moon icon in header; dark (default) and light themes; preference persisted in `localStorage`; login page supports both themes
- **Sidebar & Floating Button**: Interactive navigation sidebar with Copy/Edit/Delete icon buttons per TOC item; Copy shows checkmark "Copied" state; state-persisted (localStorage) collapsible design; floating "Topics" button for mobile/collapsed viewing; **scroll-synced TOC highlighting** (active section updates on scroll for mobile and desktop); **outside click** closes sidebar; **topic headers** also have Copy/Edit/Delete icon buttons for quick access when scrolled
- **Correct Answer Highlight**: Purple theme — lavender text, near-black bg, rounded corners, white glow shadow with glass-top highlight, animated purple-gradient `✓` badge
- **Tables**: Purple → lavender gradient header, lavender first column, minimal hairline separators
- **Unified loading** via fetch/XHR for both desktop and mobile; MathJax 3.x rendering; centralized answer keys in `answers.js`

