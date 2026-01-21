#!/bin/bash
# Quick start script for local web server
# Makes it easy to run the question bank on mobile

echo "🚀 Starting ISS Statistics Question Bank Server..."
echo ""
echo "📱 To access on your phone:"
echo "   1. Make sure your phone and computer are on the SAME WiFi network"
echo "   2. Find your computer's IP address (shown below)"
echo "   3. On your phone, open browser and go to:"
echo "      http://YOUR_IP:8000/main.html"
echo ""
echo "💡 Press Ctrl+C to stop the server"
echo ""

# Get IP address
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -1)
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    IP=$(hostname -I | awk '{print $1}')
else
    IP="YOUR_IP_ADDRESS"
fi

echo "📍 Your IP address: $IP"
echo "🌐 Access URL: http://$IP:8000/main.html"
echo ""
echo "Starting server..."
echo ""

# Start server
cd "$(dirname "$0")"
python3 -m http.server 8000
