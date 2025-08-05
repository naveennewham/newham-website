#!/bin/bash

# Newham Website Deployment Script for Hostinger via FTP

echo "🚀 Starting Newham Website deployment process..."

# Step 1: Build the Vue app
echo "📦 Building the Vue.js application..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed! Please fix the errors and try again."
  exit 1
fi
echo "✅ Build successful!"

# Step 2: Set FTP credentials (replace only if not set externally)
FTP_USER="${FTP_USER:-u704463692.lavenderblush-hippopotamus-801576.hostingersite.com}"
FTP_PASSWORD="${FTP_PASSWORD:-Flexinnovix@2124}"
FTP_HOST="${FTP_HOST:-145.223.17.74}"

# Clean FTP_HOST if it has ftp:// prefix
FTP_HOST_CLEAN=$(echo "$FTP_HOST" | sed 's|^ftp://||')

echo "Using FTP credentials:"
echo "   FTP_USER: $FTP_USER"
echo "   FTP_HOST: $FTP_HOST_CLEAN"

# Step 3: Prepare .netrc for authentication
NETRC_FILE="$HOME/.netrc"
echo "machine $FTP_HOST_CLEAN
login $FTP_USER
password $FTP_PASSWORD" > $NETRC_FILE
chmod 600 $NETRC_FILE

# Step 4: Test connection using curl
echo "🔌 Testing FTP connection..."
if ! curl --disable-epsv -s "ftp://$FTP_HOST_CLEAN/" --netrc --list-only > /dev/null; then
  echo "⚠️ curl connection failed. Trying lftp..."

  # Step 5: Try lftp if installed
  if command -v lftp &> /dev/null; then
    echo "📡 Using lftp to mirror ./dist to /public_html"
    lftp -c "set ftp:ssl-allow no; \
             open -u $FTP_USER,$FTP_PASSWORD $FTP_HOST_CLEAN; \
             mirror -R ./dist/ /public_html/"
  else
    echo "❌ lftp not installed. Install it with: brew install lftp or apt install lftp"
    rm -f $NETRC_FILE
    exit 1
  fi
else
  echo "✅ FTP connection verified via curl."

  # Step 6: Upload using curl
  echo "📤 Uploading files from ./dist to /public_html ..."
  find ./dist -type f | while read -r file; do
    rel_path="${file#./dist/}"
    remote_path="ftp://$FTP_HOST_CLEAN/public_html/$rel_path"

    echo "Uploading: $rel_path"
    curl --ftp-create-dirs --netrc --silent --show-error -T "$file" "$remote_path"

    if [ $? -ne 0 ]; then
      echo "❌ Failed to upload $rel_path"
      rm -f $NETRC_FILE
      exit 1
    fi
  done
fi

# Clean up
rm -f $NETRC_FILE

echo ""
echo "✅ Deployment completed successfully!"
echo "🌐 Visit your website on Hostinger to confirm everything is live."