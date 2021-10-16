#!/usr/bin/env bash
echo "┏━━━ 📦 INSTALL CLIENT PACKAGES  ━━━━━━━━━━━━━━━━━━━━━━━━━━"
cd client && npm install
cd ..

echo ""
echo "┏━━━ 📦 INSTALL SERVER PACKAGES  ━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
cd server && npm install 
