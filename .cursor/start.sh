#!/usr/bin/env bash
set -euo pipefail
cd /workspace

PORT=3000
if curl -sf "http://127.0.0.1:${PORT}/" >/dev/null 2>&1; then
  echo "website-agent already running on port ${PORT}"
  exit 0
fi

exec npm run dev
