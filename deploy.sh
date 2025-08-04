#!/bin/bash

# Newham Website Deployment Script for Hostinger
# This script helps with manual deployment to Hostinger via FTP

echo "🚀 Starting Newham Website deployment process..."

# Build the project
echo "📦 Building the Vue.js application..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed! Please fix the errors and try again."
  exit 1
fi

echo "✅ Build successful!"

# Check if FTP credentials are set
if [ -z "$FTP_USER" ] || [ -z "$FTP_PASSWORD" ] || [ -z "$FTP_HOST" ]; then
  echo "⚠️  FTP credentials not set. Please set the following environment variables:"
  echo "   export FTP_USER=your_ftp_username"
  echo "   export FTP_PASSWORD=your_ftp_password"
  echo "   export FTP_HOST=your_hostinger_ftp_server"
  exit 1
fi

# Deploy via FTP using curl
echo "📤 Uploading files to Hostinger..."
echo "This may take a few minutes depending on your connection speed..."

# Check if ncftpput is installed
if command -v ncftpput &> /dev/null; then
  echo "Using ncftpput for deployment..."
  ncftpput -R -v -u "$FTP_USER" -p "$FTP_PASSWORD" "$FTP_HOST" /public_html/ ./dist/*
else
  echo "ncftpput not found. Please install it or use the GitHub Actions workflow instead."
  echo "You can install it with: brew install ncftp"
  exit 1
fi

if [ $? -ne 0 ]; then
  echo "❌ Deployment failed! Please check your FTP credentials and try again."
  exit 1
fi

echo "✅ Deployment successful!"
echo "🌐 Your website is now live at your Hostinger domain!"
echo ""
echo "📝 Don't forget to set up your GitHub repository and push your code to enable automated deployments."
echo "   git remote add origin https://github.com/yourusername/newham-website.git"
echo "   git add ."
echo "   git commit -m \"Initial commit\""
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "⚙️  To set up GitHub Actions secrets for automated deployment, go to:"
echo "   GitHub repository > Settings > Secrets > Actions > New repository secret"
echo "   Add the following secrets:"
echo "   - FTP_SERVER: your_hostinger_ftp_server"
echo "   - FTP_USERNAME: your_ftp_username"
echo "   - FTP_PASSWORD: your_ftp_password"
