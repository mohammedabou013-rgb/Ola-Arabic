---
name: GitHub push size limits
description: Large uploaded PDFs can block GitHub pushes; this file explains how to diagnose and fix it.
---

Large PDFs uploaded to `attached_assets/` can be tracked by git and block pushes to GitHub because GitHub rejects individual files over 100 MB and large pushes often time out.

**Rule:** Before pushing a repo that contains uploaded PDFs or other large assets, check `git ls-files` and `du -sh .git`. If `attached_assets/*.pdf` are tracked, remove them from git history.

**Why:** GitHub's hard limit is 100 MB per file. The Replit `gitPush` tool returns a generic `TIMEOUT`, or the shell push fails with authentication errors, when the push payload is too large.

**How to apply:**
1. Stash or commit any working changes.
2. Run `git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch attached_assets/*.pdf' --prune-empty --tag-name-filter cat -- --all`.
3. Remove `.git/refs/original`, expire reflog, and run `git gc` (gc may time out on very large repos; the push can still succeed without gc completing).
4. Add `attached_assets/*.pdf` to `.gitignore`.
5. Push again.

The PDFs remain in the repl filesystem for local use; they are only excluded from git and GitHub.