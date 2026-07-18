---
name: Indonesian curriculum enrichment
description: How to add or update Indonesian MI grade files without breaking the API server typecheck.
---

When enriching the Indonesian curriculum files in `artifacts/api-server/src/data/`, the output must be clean, multi-line, valid TypeScript that matches the `GradeData` type from `types.ts`.

**Rule:** Always verify with `pnpm --filter @workspace/api-server run typecheck` immediately after any enrichment. Fix all errors before finishing.

**Why:** AI-generated curriculum content tends to be collapsed into very long single lines when the generator is trying to save tokens. Prettier cannot always fix those lines, and they can contain subtle syntax errors (e.g., misordered helper-function arguments) that break the build.

**How to apply:**
- When using subagents, give them the explicit instruction: "After writing the file, run `pnpm --filter @workspace/api-server run typecheck`, fix any errors, and do not return until it passes."
- When writing manually, keep the file indented and run typecheck after every major change.
- If helper functions are used (e.g., `u()`, `l()`, `ex()`), keep their signatures and call sites consistent, or avoid them in favor of plain object literals.
