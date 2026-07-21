---
name: EAS upload exclusions
description: Directories that must be excluded from EAS upload context to prevent build failures.
---

When building the mobile app with EAS in this monorepo, EAS CLI uses the workspace-root `.easignore` file to decide which files to include in the upload tarball. The artifact-level `.easignore` in `artifacts/ola-arabic-mobile/` is **not** the file that matters.

**Why:**
A 558 MB `.agents/outputs/` directory (used for scanned textbook images and other local processing) was copied into the EAS tarball, causing a 1.1 GB upload and `Unknown system error -122` (EDQUOT / disk quota) during compression/write. The root `.easignore` already excluded `attached_assets/` and `screenshots/`, but not `.agents/outputs/`.

**How to apply:**
- Add any large, non-essential directories to the **root** `.easignore`.
- Keep artifact-level `.easignore` in sync as a backup, but treat the root file as authoritative.
- If an EAS upload fails with `error -122` or similar, check `/tmp/runner/eas-cli-nodejs/` for stale tarballs and add the offending directory to the root `.easignore`.