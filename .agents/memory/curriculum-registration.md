---
name: Curriculum registration
description: How to make a new curriculum visible and filterable in the Arabic Academy app.
---

To add a new curriculum (e.g. `indonesia`) so that it appears on the curriculum-selection screen and its grades are returned correctly:

1. Add it to `export const curricula: CurriculumInfo[]` in `artifacts/api-server/src/data/index.ts`.
2. Add it to the `parseCurriculumParam` whitelist in `artifacts/api-server/src/routes/academy.ts`.
3. Ensure each grade object has `curriculumId: "<id>" as CurriculumId`.

**Why:** The API route falls back to returning *all* grades when the curriculum parameter is not recognized, and the frontend only shows curricula returned by `/api/curricula`. Without both steps, the new curriculum is either invisible or returns unrelated grades.

**How to apply:** Any time a new country/curriculum is added, update both locations and verify `/api/grades?curriculum=<id>` returns only the expected grades.
