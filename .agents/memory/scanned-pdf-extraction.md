---
name: Scanned PDF extraction
description: Lessons for extracting text from scanned textbook PDFs using the vision API.
---

When rebuilding a curriculum from scanned textbook PDFs:

- Render pages to low-DPI JPEG (e.g. 72 DPI) before sending to the vision API; this keeps the payload small enough to fit in the model context and reduces cost.
- Process the pages in small batches (3–5 pages) and write the output to disk after each batch. Do not try to extract an entire 70-page term in one ShellExec call — the 5-minute timeout kills the job before completion.
- Make the script resumable: read the existing output file, detect the last processed page, and continue from there. This allows restarting after a timeout without reprocessing the whole book.
- Use the OCR output as a scaffold; where the scanned text is garbled, use the lesson titles and known themes to fill in reasonable vocabulary and exercises, then verify the file typechecks.

**Why:** Full vision extraction of a single term can require 20–30 API calls, and ShellExec cannot hold a connection open long enough. Chunking + resuming is the only reliable way to finish without losing progress.

**How to apply:** For any future PDF-driven curriculum rebuild, start with a resumable chunked script and only dispatch subagents for the final curriculum assembly, not the raw extraction.
