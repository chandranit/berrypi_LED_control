#!/bin/bash

echo "🚀 Starting Pi Glow Setup..."

# Update and install system dependencies
echo "📦 Updating system packages..."
sudo apt-get update
sudo apt-get install -y python3-pip python3-dev

# Install python dependencies
echo "🐍 Installing Python dependencies..."
pip3 install -r requirements.txt

# Add user to gpio group if not already there
echo "🔑 Updating GPIO permissions..."
sudo usermod -a -G gpio $USER

echo "✅ Setup complete!"
echo "💡 To start the application, run: python3 app.py"
echo "🌐 Then access it at http://$(hostname -I | awk '{print $1}'):5000"

# Remind user to log out and back in for group changes
echo "⚠️  IMPORTANT: Please log out and log back in (or restart) for GPIO permissions to take effect."
