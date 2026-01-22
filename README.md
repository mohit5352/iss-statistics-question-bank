# ISS Statistics Question Bank

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
     cd "/Users/illusion/Desktop/ISS Extracted PDFs/statistics_question_bank"
     python3 -m http.server 8000
     ```
   - **Windows**: Double-click `start-server.bat` or run:
     ```cmd
     cd "path\to\statistics_question_bank"
     python -m http.server 8000
     ```

2. **Find your computer's IP address**:
   - Mac: System Preferences → Network → IP Address
   - Windows: Run `ipconfig` → Look for IPv4 Address
   - Linux: Run `hostname -I`

3. **On your phone** (same WiFi network):
   - Open browser and go to: `http://YOUR_IP:8000/main.html`
   - Example: `http://192.168.1.100:8000/main.html`
   - Bookmark this URL for easy access!

**Note**: Mobile browsers block loading local files directly. Using a local web server is the most reliable method.

## 🎯 Features

- **Paper Switcher**: Switch between Paper I and Paper II
- **Section Switcher**: 
  - Paper I: Switch between Probability & Statistics, Numerical Analysis, and Computer sections
  - Paper II: Switch between Linear Models, Statistical Inference and Hypothesis Testing, and Official Statistics
- **Year Navigation**: Browse questions from 2017 to 2025
- **Copy Button**: Each question has a copy button to easily copy the question text, topic, and options
- **Mobile Optimized**: Responsive design with touch-friendly controls
- **Math Rendering**: Beautiful mathematical notation using MathJax
- **Color-Coded Interface**: Vibrant color scheme for easy visual distinction:
  - **Headers**: Indigo (`#6366f1`) for main titles, Emerald (`#10b981`) for subtitles
  - **Meta Controls**: Purple labels (`#8d1bf7`) and green values (`#3dbb0d`)
  - **Questions**: Teal numbers (`#14b8a6`), purple text (`#b10fec`), green topic badges (`#3dbb0d`)
  - **Options**: Red text (`#dc0909`) with darker red labels (`#a00606`)
  - **Tables**: Indigo headers with alternating row colors
  - **Context**: Vibrant green (`#03a403`) for setup paragraphs with gradient background
- **Enhanced Tables**: Styled tables with colored headers, alternating rows, and hover effects
- **Offline Capable**: Works without internet (except for MathJax CDN)

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
- The `<h2>` tag styling is handled by CSS class `.year-section h2` - no inline styles needed. The header will automatically have indigo color (`#6366f1`), center alignment, and a bottom border.
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

- `.question-card`: Container for each question with white background and subtle shadow (position: relative for copy button)
- `.q-header`: Header section with question number and topic badge
- `.q-number`: Question number styling (teal color: `#14b8a6`)
- `.q-topic`: Topic tag styling (green badge with light gray background: `#3dbb0d`)
- `.q-text`: Main question text (purple color: `#b10fec`, `1.125rem` font size on desktop, responsive scaling)
- `.q-context`: Context/setup text for multi-part questions (vibrant green color: `#03a403`, `1.0625rem` font size, light green gradient background with subtle shadow)
- `.q-table`: Enhanced table container with indigo headers, alternating row colors, and rounded corners
- `.options-grid`: Grid layout for answer options (2 columns on desktop, 1 column on mobile)
- `.option-item`: Individual option styling (red text: `#dc0909`, `1.0625rem` font size on desktop, responsive scaling)
- `.opt-label`: Option label (a, b, c, d) styling (darker red: `#a00606`, bold)
- `.q-copy-btn`: Copy button styling (indigo background: `#6366f1`, positioned absolutely on each question card)
- `.year-section`: Container for all questions of a year
- `.meta-label`: Paper/Section/Year label text (purple: `#8d1bf7`)
- `.meta-value`: Paper/Section/Year value text (green: `#3dbb0d`)

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
- [ ] Test that all section files load correctly
- [ ] Verify MathJax renders all mathematical expressions correctly

## 🔧 Technical Details

- **Math Rendering**: MathJax 3.x is used for rendering mathematical notation. Math expressions are properly rendered in all elements (q-text, q-context, option-item) with consistent styling across desktop and mobile.
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
- **Color Scheme**: Vibrant, color-coded interface for visual distinction (see Features section above)
- **Browser Compatibility**: Works in all modern browsers that support ES6 and MathJax
- **Loading Method**: 
  - Desktop (`file://`): Uses iframe (works natively)
  - Mobile/Web Server (`http://`): Uses fetch/XMLHttpRequest for better compatibility

## 📱 Mobile Features

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
- Tables feature enhanced styling with indigo headers (`#6366f1`), alternating row colors, and hover effects

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

## 🔄 Maintenance

When updating or fixing questions:
- Always maintain the HTML structure
- Preserve the CSS class names
- Use LaTeX notation for math (not HTML entities)
- Ensure MathJax compatibility
- Test in multiple browsers if possible
- Test on mobile devices

---

**Last Updated**: 2025 - Added Paper II support with three sections (Linear Models, Statistical Inference and Hypothesis Testing, Official Statistics), copy button functionality for each question, enhanced navigation interface, fixed MathJax rendering for HTTP/hosted versions, improved typography with consistent rem-based font sizes, and updated color scheme (q-context now uses vibrant green `#03a403` with gradient background)
