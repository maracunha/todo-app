#!/usr/bin/env bash
echo "┏━━━ 🚀 STARTING DEV ━━━━━━━━━━━━━━━━━━━━━━━━━━"

as-a DEV concurrently --names "server,client" --prefix "[{name}]" --prefix-colors "bgGreen.bold,bgMagenta.bold" "nodemon server/src/index.js" "cd client && npm run dev --silent"
