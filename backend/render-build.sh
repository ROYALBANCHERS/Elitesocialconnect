#!/bin/bash
# Render build script for EliteSocialConnect Backend

set -e

echo "🚀 Starting EliteSocialConnect Backend deployment..."

# Change to backend directory
cd backend

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production=false

# Run any migrations or seeds if needed
# node seed.js

echo "✅ Build complete!"
