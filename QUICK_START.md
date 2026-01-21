# Quick Start Guide

## 🖥️ Desktop Usage (Easiest)

1. **Open `main.html`** directly in your web browser (double-click the file)
2. Select **Section** and **Year** from the dropdowns
3. Questions will load automatically

That's it! No setup required for desktop use.

---

## 📱 Mobile Usage

Mobile browsers block loading local files directly, so you need to use a local web server.

### Step 1: Start the Server

**Mac/Linux:**
- Double-click `start-server.sh`, OR
- Open terminal and run:
  ```bash
  cd "/Users/illusion/Desktop/ISS Extracted PDFs/statistics_question_bank"
  python3 -m http.server 8000
  ```

**Windows:**
- Double-click `start-server.bat`, OR
- Open Command Prompt and run:
  ```cmd
  cd "path\to\statistics_question_bank"
  python -m http.server 8000
  ```

### Step 2: Find Your Computer's IP Address

**Mac:**
- System Preferences → Network → IP Address
- Or run: `ifconfig | grep "inet " | grep -v 127.0.0.1`

**Windows:**
- Run `ipconfig` in Command Prompt
- Look for "IPv4 Address"

**Linux:**
- Run `hostname -I` or `ip addr`

### Step 3: Access on Your Phone

1. **Make sure your phone and computer are on the same WiFi network**
2. Open browser on your phone
3. Go to: `http://YOUR_IP:8000/main.html`
   - Example: `http://192.168.1.100:8000/main.html`
4. **Bookmark this URL** for easy access!

### Pro Tips for Mobile

- **Add to Home Screen**: Makes it work like an app
  - iOS: Safari → Share → "Add to Home Screen"
  - Android: Chrome → Menu → "Add to Home Screen"

- **Keep Server Running**: The terminal must stay open while using the app
  - To stop: Press `Ctrl+C` in the terminal

---

## 🌐 Host Online (Optional)

If you want to access it from anywhere:

### GitHub Pages (Free)
1. Create GitHub account
2. Create new repository
3. Upload all files from `statistics_question_bank` folder
4. Go to Settings → Pages → Enable
5. Access at: `https://yourusername.github.io/repo-name/main.html`

### Netlify Drop (Easiest)
1. Go to https://app.netlify.com/drop
2. Drag and drop the `statistics_question_bank` folder
3. Get instant URL!

---

## ❓ Troubleshooting

**Questions not loading?**
- Desktop: Check that all HTML files are in the same folder
- Mobile: Make sure you're using the web server method (not opening file directly)
- Check that phone and computer are on same WiFi network

**Math not rendering?**
- Check internet connection (MathJax requires CDN)
- Verify LaTeX syntax is correct

**Need help?** See the full README.md for detailed instructions.
