---
name: Arabic Academy conventions
description: Durable product decisions for the arabic-academy app (curriculum data, naming, i18n, progress).
---

- Curriculum content must be ORIGINAL wording (copyright-safe rewrite of Malaysian Bahasa Arab textbooks) — keep only vocabulary/themes/grammar level. **Why:** user's explicit legal requirement.
- The speaking skill is always named **تحدث** (never كلام) across UI, data and AI prompts. **Why:** explicit user request.
- No database by design: curriculum is static TS data in the api-server; user progress (XP/stars/streak/badges) lives in localStorage; no auth. Progress must be idempotent on lesson replay.
- UI localized in 6 languages (ar/en/ms/id/fr/es); Arabic flips layout RTL. Learning content always shows vocalized Arabic + translation in the current UI language.
- Textbook PDFs in attached_assets: Years 2/3/6 are scanned images (no extractable text) — render pages as images if more curriculum detail is needed.
- Communicate with the user in Arabic, novice (non-technical) register.
