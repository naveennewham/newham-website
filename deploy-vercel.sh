#!/bin/bash

# Newham Website Deployment Script for Vercel

echo "🚀 Starting Newham Website deployment to Vercel..."

# Step 1: Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
  echo "⚠️ Vercel CLI not found. Installing globally..."
  npm install -g vercel
fi

# Step 2: Build the Vue app
echo "📦 Building the Vue.js application..."
npm run generate

if [ $? -ne 0 ]; then
  echo "❌ Build failed! Please fix the errors and try again."
  exit 1
fi
echo "✅ Build successful!"

# Step 3: Deploy to Vercel
echo "🚀 Deploying to Vercel..."
echo "You may be prompted to log in if this is your first time using Vercel CLI"

# Deploy with production flag if specified
if [ "$1" == "production" ]; then
  echo "🌐 Deploying to PRODUCTION environment..."
  vercel --prod
else
  echo "🧪 Deploying to PREVIEW environment..."
  echo "To deploy to production, run: ./deploy-vercel.sh production"
  vercel
fi

echo "✨ Deployment process completed!"
