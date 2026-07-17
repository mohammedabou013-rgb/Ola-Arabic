# أكاديمية العربية — Arabic Academy

Fun, interactive Arabic-learning web app based on the Malaysian primary-school Bahasa Arab curriculum (Years 1–6). Free app, no auth.

## Structure
- `artifacts/arabic-academy/` — React + Vite frontend (wouter, TanStack Query, Tailwind). Pages: home (grade map), grade detail, lesson player, practice games, AI tutor chat, progress.
- `artifacts/api-server/` — Express 5 API. Static curriculum data in `src/data/` (types.ts + grade1..6.ts), routes in `src/routes/academy.ts` and `src/routes/ai.ts`.
- Curriculum content is original wording (copyright-safe), inspired by the official textbooks' vocabulary and themes; Years 1–6 units follow the textbook TOCs.
- API contract: `lib/api-spec/openapi.yaml` → codegen into `lib/api-client-react` and `lib/api-zod`.

## Key decisions
- No database: curriculum is static TS; user progress (XP, stars, streak, badges) lives in localStorage (`src/lib/progress.ts`).
- Four skills naming: استماع، تحدث (never "كلام")، قراءة، كتابة.
- UI localized in 6 languages (ar/en/ms/id/fr/es) via custom context in `src/i18n/`; Arabic flips layout to RTL.
- Pronunciation: browser speechSynthesis (`src/lib/speech.ts`); speaking exercises use SpeechRecognition with fallback.
- AI tutor: Replit AI Integrations (OpenAI proxy), route `POST /api/ai/chat`, model gpt-5.6-luna.

## User preferences
- Communicate with the user in Arabic; non-technical user (novice register).
