# ISS Statistics Question Bank

> 🌐 **[View Question Bank](https://mohit5352.github.io/iss-statistics-question-bank/main.html)** — Browse ISS Statistics Paper I & II questions by section and year, with MathJax rendering and instant answer reveal.

This repository contains a web-based archive of objective questions from ISS Statistics Paper I and Paper II examinations, organised by **paper**, **year**, and **section**:

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
├── styles.css                                     # Styling for question cards and layout
├── answers.js                                     # Centralized answer keys for Show Answer feature
├── server.py                                      # Local server with answer correction support (writes to answers.js)
├── api/
│   └── correct.js                                 # Vercel serverless API for live answer corrections (updates GitHub)
├── vercel.json                                    # Vercel config (rewrites / to main.html)
├── DEPLOYMENT.md                                  # Deployment guide for Vercel (live corrections)
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
   - **Note**: `server.py` serves static files and supports **answer corrections** (writes directly to `answers.js`). For static-only serving, use `python3 -m http.server 8000` instead.

2. **Find your computer's IP address**:
   - Mac: System Preferences → Network → IP Address
   - Windows: Run `ipconfig` → Look for IPv4 Address
   - Linux: Run `hostname -I`

3. **On your phone** (same WiFi network):
   - Open browser and go to: `http://YOUR_IP:8000/main.html`
   - Example: `http://192.168.1.100:8000/main.html`
   - Bookmark this URL for easy access!

**Note**: Mobile browsers block loading local files directly. Using a local web server is the most reliable method.

### Live Deployment (Vercel) — Answer Corrections on Production

To deploy so that **answer corrections work on the live site** (updating `answers.js` in GitHub), use **Vercel** (free tier). See **[DEPLOYMENT.md](DEPLOYMENT.md)** for step-by-step instructions (GitHub PAT, env vars, deploy).

## 🎯 Features

- **Sticky Header**: Paper/Section/Year controls stay visible at the top while scrolling
- **Paper Switcher**: Switch between Paper I and Paper II
- **Section Switcher**: 
  - Paper I: Switch between Probability & Statistics, Numerical Analysis, and Computer sections
  - Paper II: Switch between Linear Models, Statistical Inference and Hypothesis Testing, and Official Statistics
- **Year Navigation**: Browse questions from 2017 to 2025
- **Copy Button**: Each question has a copy button (📋) to easily copy the question text, topic, and options
- **Show Answer Button**: Eye icon (👁) that reveals the correct answer with **purple highlighting** and an animated checkmark (✓) badge on the right side of the option
- **Wrong Answer? / Correct Answer**: When the answer is visible, a **Wrong Answer?** link appears in the action row. Click it to reveal inline option chips (a)(b)(c)(d) — select the correct one to update `answers.js` (see [Answer Correction Scenarios](#-answer-correction-scenarios) for how updates work in different deployments)
- **Mobile Optimized**: Responsive design with touch-friendly controls
- **Math Rendering**: Beautiful mathematical notation using MathJax
- **Color-Coded Interface**: Modern **Obsidian Dark Theme** — matte/near-black background with an all-purple accent palette:
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
  - **Action Row**: Single row at bottom of each card — `[Wrong Answer?]` on the left; `[Show Answer]` and `[Copy]` icons on the right; purple gradient separator above; copy turns emerald on success (`#34d399`); answer button glows purple while active
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

### Step 3: HTML File Structure statistics_question_banklate

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
- `.q-copy-btn`: Copy icon button — purple icon, faint ring; turns emerald (`#34d399`) on success
- `.q-answer-btn`: Show/Hide Answer icon button — purple icon; glows lavender while answer is visible
- `.wrong-answer-wrap`: Container for Wrong Answer? trigger and picker (visible when answer is shown)
- `.wrong-answer-trigger`: "Wrong Answer?" link — rose (`#fb7185`); click to expand picker
- `.wrong-answer-picker`: Expandable section with "Choose correct answer:" hint and (a)(b)(c)(d) chips
- `.wrong-answer-chip`: Option chip button — selects correct answer on click
- `.correct-answer`: Correct option — lavender text (`#e0d7ff`), near-black background, rounded corners, white glow shadow with glass-top highlight, purple-gradient animated `✓` badge on the right
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
- [ ] Test that all section files load correctly
- [ ] Verify MathJax renders all mathematical expressions correctly

## 🔧 Technical Details

- **Sticky Header**: Header with Paper/Section/Year controls stays at the top while scrolling using `position: sticky`
- **Math Rendering**: MathJax 3.x is used for rendering mathematical notation. Math expressions are properly rendered in all elements (q-text, q-context, option-item) with consistent styling across desktop and mobile.
- **Answer System**: Answers are stored in `answers.js` and loaded dynamically via JavaScript. The `main.html` script injects show answer buttons and handles toggle functionality.
- **Answer Correction System**: Corrections are submitted via `POST /api/correct`. Behaviour depends on deployment: **Local** (`server.py`) writes to `answers.js`; **Vercel** (`api/correct.js`) pushes updates to GitHub; **GitHub Pages** / static hosting falls back to `localStorage`.
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
- **Color Scheme**: **Obsidian Dark / Purple Theme** — near-black background (`#0a0a0e`), purple-glass card surfaces (`rgba(124,58,237,0.05)`), violet accent hierarchy (`#7c3aed` → `#a78bfa` → `#c4b5fd` → `#e0d7ff`), orchid/fuchsia option text (`#f0abfc` / `#d946ef`), emerald copy-success state (`#34d399`)
- **Browser Compatibility**: Works in all modern browsers that support ES6 and MathJax
- **Loading Method**: Unified fetch/XMLHttpRequest approach works for both desktop and mobile without iframe isolation
- **Animations**: CSS animations for button hover states, answer highlight transitions, and checkmark pop-in effect

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

The repository includes a **Show Answer** feature and a **Wrong Answer?** flow that lets users suggest corrections when an answer is incorrect.

### Show Answer — How It Works:
1. Answers are stored centrally in `answers.js` (no need to modify individual HTML files)
2. A **Show Answer** eye-icon button appears in the action row at the bottom of each question card
3. Clicking the button highlights the correct answer in **purple** (lavender text, near-black background) with an animated purple-gradient checkmark badge (✓) on the right side of the option
4. Clicking again hides the answer and removes the highlight

### Wrong Answer? — How It Works:
1. When the answer is visible, **Wrong Answer?** appears in the action row (left side)
2. Click **Wrong Answer?** to expand the inline picker: **Choose correct answer:** followed by (a)(b)(c)(d) chips
3. Click the correct option chip — the correction is saved according to the deployment scenario (see below)
4. The displayed answer updates immediately; on supported deployments, `answers.js` is updated in the repo

### Answer Correction Scenarios

| Deployment | Correction behaviour |
|------------|----------------------|
| **Local (server.py)** | Corrections are written directly to `answers.js` on your machine. Run `python3 server.py 8000` and open `http://localhost:8000/main.html`. |
| **Vercel (live)** | Corrections are pushed to GitHub via the `/api/correct` serverless function. Requires `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO` env vars. See [DEPLOYMENT.md](DEPLOYMENT.md). |
| **GitHub Pages** | No backend — corrections are stored in `localStorage` only (per browser/device). Toast shows *"Saved (use server to update answers.js)"*. To persist corrections, deploy to Vercel or run the local server. |
| **Static / file://** | Same as GitHub Pages — corrections go to `localStorage` only. |

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
- **User corrections**: On Vercel or local server, users can submit corrections that update `answers.js` directly

## 🔄 Maintenance

When updating or fixing questions:
- Always maintain the HTML structure
- Preserve the CSS class names
- Use LaTeX notation for math (not HTML entities)
- Ensure MathJax compatibility
- Test in multiple browsers if possible
- Test on mobile devices

---

**Last Updated**: 2025/2026 — Full **Obsidian Dark / Purple Theme** redesign:
- **Sticky Header** with paper title, set indicator divider (`SET ◆ X`), and a unified meta-controls pill panel (Paper / Section / Year)
- **Set Indicator**: Displays the exam set letter for each paper/year combination, rendered as a centred divider row with converging purple gradient lines
- **Meta Controls**: Dashboard-style pill panel replacing individual badges — hidden `<select>` overlays, dim ALL-CAPS labels, bold lavender values, vertical hairline separators
- **Question Cards**: Purple-tinted glass surface, depth shadow, smooth hover lift with purple ring; bottom padding reserved for the icon pair
- **Question Numbers & Headers**: Purple accent (`#a78bfa`); q-header has a subtle purple gradient background, rounded corners, and white glow shadow
- **Topic**: Italic orchid inline annotation (`#f0abfc`, weight 500) — no badge, no border
- **Context Block**: Near-black background with a purple gradient left stripe; bold text in orchid (`#f0abfc`); MathJax expressions in lavender (`#c4b5fd`) consistent with question text; "CONTEXT" label removed
- **Options**: Bare orchid text (`#f0abfc`) — no background, no border, no surface; option label is a small fuchsia (`#d946ef`) capsule
- **Action Row & Wrong Answer?**: Single row with Wrong Answer? (left), Show Answer + Copy (right); Wrong Answer? expands to inline (a)(b)(c)(d) chips for corrections
- **Correct Answer Highlight**: Purple theme — lavender text, near-black bg, rounded corners, white glow shadow with glass-top highlight, animated purple-gradient `✓` badge
- **Tables**: Purple → lavender gradient header, lavender first column, minimal hairline separators
- **Unified loading** via fetch/XHR for both desktop and mobile; MathJax 3.x rendering; centralized answer keys in `answers.js`

