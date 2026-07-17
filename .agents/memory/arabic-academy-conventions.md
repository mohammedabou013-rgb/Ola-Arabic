---
name: Arabic Academy conventions
description: Durable product decisions for the arabic-academy app (curricula, naming, i18n, progress, auth).
---

- App is named **العُلا**: "أكاديمية العُلا" (ar), "Ola Arabic" (en), "Akademi Ola" (ms/id), "Académie Ola" (fr), "Academia Ola" (es). Key in i18n: `app_name`.

- **Two curricula** supported:
  - `malaysia`: 6 grades (Malaysian MoE Bahasa Arab), data in grade1.ts–grade6.ts, each wrapped with curriculumId:'malaysia'
  - `uae`: 8 grades (UAE MoE Arabic for Non-Native Speakers 2021-2022), data in uae-grade1.ts–uae-grade8.ts
  - Selected via localStorage['app_curriculum']; first visit → /select-curriculum
  - Curriculum badge: UAE shows "ae 🇦🇪", Malaysia shows "ماليا 🇲🇾"

- **UAE grade structure** (all curriculum content original/copyright-safe):
  - G1: 6 units × 5 lessons = 30 lessons (alphabet via animals)
  - G2–G8: each 6 units, T1 has 2 units × 5L, T2 has 2 units × 3L, T3 has 2 units × 3L = 22 lessons each

- **API**: GET /curricula; GET /grades?curriculum=; GET /overview?curriculum=; POST/GET /api/auth/*
  - gradeCount in curricula constant: malaysia=6, uae=8

- **Auth system** (email + password + security question):
  - Backend: bcryptjs + jsonwebtoken; users stored in artifacts/api-server/.data/users.json
  - Routes at /api/auth/: register, login, forgot-password/question, forgot-password/reset, me
  - JWT stored in localStorage('ola_token'); auth context in src/contexts/AuthContext.tsx
  - Password reset: security question/answer (no email service needed)
  - Redirects to /login if not authenticated; /select-curriculum after login if no curriculum chosen

- **Language selector**: popup dropdown (Globe icon) lists all 6 languages with flags, not a cycle-on-click toggle.

- The speaking skill is always **تحدث** (never كلام).
- No database for curriculum/progress. Progress in localStorage prefixed per curriculum: `ola_progress_<curriculumId>`.
- Communicate with user in Arabic, novice (non-technical) register.
