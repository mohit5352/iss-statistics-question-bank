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
├── answers.js                                     # Centralized answer keys for Show Answer feature
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

- **Sticky Header**: Paper/Section/Year controls stay visible at the top while scrolling
- **Paper Switcher**: Switch between Paper I and Paper II
- **Section Switcher**: 
  - Paper I: Switch between Probability & Statistics, Numerical Analysis, and Computer sections
  - Paper II: Switch between Linear Models, Statistical Inference and Hypothesis Testing, and Official Statistics
- **Year Navigation**: Browse questions from 2017 to 2025
- **Copy Button**: Each question has a copy button (📋) to easily copy the question text, topic, and options
- **Show Answer Button**: Eye icon (👁) that reveals the correct answer with gold highlighting and animated checkmark (✓) on the right side of the option
- **Mobile Optimized**: Responsive design with touch-friendly controls
- **Math Rendering**: Beautiful mathematical notation using MathJax
- **Color-Coded Interface**: Modern **Dark Theme** color scheme for easy visual distinction:
  - **Background**: Deep slate blue (`#0f172a`) body with dark slate (`#1e293b`) containers
  - **Headers**: Light purple (`#c4b5fd`) for main titles, copy button in indigo (`#a5b4fc`)
  - **Meta Controls**: Light purple values (`#c4b5fd`) with subtle glow effect (`text-shadow`)
  - **Questions**: Bright teal numbers (`#34d399`), light gray text (`#e2e8f0`) with subtle purple tint background
  - **Topic Badges**: Teal (`#34d399`) with light background and border
  - **Options**: Muted red (`#fca5a5`) with lighter red labels (`#f87171`)
  - **Correct Answer**: Golden amber (`#f59e0b`) background with animated checkmark
  - **Tables**: Teal headers (`#059669`) with dark slate backgrounds and alternating row colors
  - **Context**: Light teal (`#6ee7b7`) with gradient teal background and decorative border
  - **All text maintains WCAG-compliant contrast ratios (4.5:1+) for comfortable viewing
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

- `.sticky-header`: Sticky header container with `position: sticky`, dark slate background (`#1e293b`), and subtle border
- `.question-card`: Container for each question with dark slate background (`#1e293b`), subtle shadow, and border (`#334155`)
- `.q-header`: Header section with question number and topic badge
- `.q-number`: Question number styling (bright teal color: `#34d399`)
- `.q-topic`: Topic tag styling (teal badge: `#34d399` with light background and border)
- `.q-text`: Main question text (light gray: `#e2e8f0`, `1.125rem` font size on desktop, responsive scaling, subtle purple tint background)
- `.q-context`: Context/setup text for multi-part questions (light teal: `#6ee7b7`, `1.0625rem` font size, teal gradient background with left border accent)
- `.q-table`: Enhanced table container with teal headers (`#059669`), dark slate backgrounds, and alternating row colors
- `.options-grid`: Grid layout for answer options (2 columns on desktop, 1 column on mobile < 600px)
- `.option-item`: Individual option styling (muted red: `#fca5a5`, `1.0625rem` font size on desktop, responsive scaling)
- `.opt-label`: Option label (a, b, c, d) styling (lighter red: `#f87171`, bold)
- `.q-copy-btn`: Copy button styling (light purple: `#a5b4fc`, positioned top-right of each question card)
- `.q-answer-btn`: Show Answer button styling (transparent background, gold/amber icon color: `#fbbf24`, positioned top-right of options grid)
- `.correct-answer`: Correct answer highlight styling (golden gradient background: `rgba(251, 191, 36, 0.15)` → `rgba(245, 158, 11, 0.2)`, amber border: `#f59e0b`, animated checkmark badge on the right side with dark text)
- `.year-section`: Container for all questions of a year
- `.meta-value`: Paper/Section/Year value text (light purple: `#c4b5fd` with subtle glow effect)
- `.meta-line`: Container for each meta control with rounded pill shape, purple border, and hover effects

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
- **Color Scheme**: Modern **Dark Theme** with deep slate blue background (`#0f172a`), dark slate containers (`#1e293b`), light gray text (`#e2e8f0`), and purple/teal accents for high contrast and comfortable viewing in any lighting condition
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

## 🎯 Show Answer Feature

The repository includes a **Show Answer** feature that allows users to reveal correct answers with a single click.

### How It Works:
1. Answers are stored centrally in `answers.js` (no need to modify individual HTML files)
2. A "Show Answer" button (👁 eye icon) appears on each question card
3. Clicking the button highlights the correct answer in **golden amber** with an animated checkmark (✓) on the **right side** of the option
4. Clicking again hides the answer

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
- **Centralized**: All answers in one file - easy to manage and update
- **Dynamic**: No need to modify question HTML files
- **Extensible**: Simply add more answer keys as needed

## 🔄 Maintenance

When updating or fixing questions:
- Always maintain the HTML structure
- Preserve the CSS class names
- Use LaTeX notation for math (not HTML entities)
- Ensure MathJax compatibility
- Test in multiple browsers if possible
- Test on mobile devices

---

**Last Updated**: 2025 - Added **Sticky Header** feature for easy navigation while scrolling. Updated **meta controls** to show only values (no labels) with modern **purple color scheme** and subtle glow effects. **Unified loading method** using fetch for both desktop and mobile (no more iframe isolation). **Dark Theme** with deep slate blue background (`#0f172a`), dark slate containers (`#1e293b`), light gray text (`#e2e8f0`), and purple/teal accents. All text maintains WCAG-compliant contrast ratios (4.5:1+) for comfortable viewing in any lighting condition. Also includes Show Answer feature with centralized answer keys (`answers.js`), eye icon toggle (👁 → 👁❌), golden yellow answer highlighting with animated checkmark, copy button now shows green checkmark when clicked, unified action button styling with tooltips, enhanced mobile responsive design, and improved color scheme with darker, more readable colors.

