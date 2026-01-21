@echo off
REM Quick start script for local web server (Windows)
REM Makes it easy to run the question bank on mobile

echo.
echo 🚀 Starting ISS Statistics Question Bank Server...
echo.
echo 📱 To access on your phone:
echo    1. Make sure your phone and computer are on the SAME WiFi network
echo    2. Find your computer's IP address (run: ipconfig)
echo    3. On your phone, open browser and go to:
echo       http://YOUR_IP:8000/main.html
echo.
echo 💡 Press Ctrl+C to stop the server
echo.

REM Get IP address
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    set IP=%%a
    goto :found
)
:found
set IP=%IP:~1%

echo 📍 Your IP address: %IP%
echo 🌐 Access URL: http://%IP%:8000/main.html
echo.
echo Starting server...
echo.

REM Start server
cd /d "%~dp0"
python -m http.server 8000

pause
