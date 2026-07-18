---
name: Mobile production API URL
description: How the mobile app picks its API base URL and what must be set before an EAS production build.
---

The mobile app resolves its API base URL in `artifacts/ola-arabic-mobile/lib/api.ts`:

1. `EXPO_PUBLIC_API_BASE_URL` environment variable (used in EAS builds).
2. `EXPO_PUBLIC_DOMAIN` environment variable (used in Replit development).
3. Fallback to `https://api.olaarabic.com`.

**Rule:** Before running an EAS production build, set `EXPO_PUBLIC_API_BASE_URL` to the real production API root. Do not rely on the fallback unless that domain is actually configured.

**Why:** The fallback domain is not guaranteed to exist. A published Google Play app that points to a missing or temporary API domain will fail to load lessons and grades.

**How to apply:**
- Use the Replit deployment URL (`https://<replit-app-domain>`) after the project is published, or a custom domain that points to the deployed API server.
- Set the value in `eas.json` under `build.production.env` and in the EAS dashboard secrets so both local `eas build` and cloud builds use the same URL.
- If the API server is deployed on Replit, the web artifact proxies `/api` to the API server, so the web artifact's production URL is usually the correct API root.
