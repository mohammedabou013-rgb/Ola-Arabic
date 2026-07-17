import fitz
import os
from pathlib import Path

pdfs = [
    (1, "attached_assets/BAHASA_ARAB__MI__KELAS__I_2020_abdimadrasah.com_1784292790913.pdf"),
    (2, "attached_assets/BAHASA_ARAB__MI__KELAS__II_2020_abdimadrasah.com_1784292790913.pdf"),
    (3, "attached_assets/BAHASA_ARAB__MI__KELAS__III_2020_abdimadrasah.com_1784292790914.pdf"),
    (4, "attached_assets/BAHASA_ARAB__MI__KELAS__IV_2020_abdimadrasah.com_1784292790914.pdf"),
    (5, "attached_assets/BAHASA_ARAB__MI_KELAS_V_2020_abdimadrasah.com_1784292790915.pdf"),
    (6, "attached_assets/BAHASA_ARAB__MI_KELAS_VI_2020_abdimadrasah.com_1784292790915.pdf"),
]

os.makedirs('.agents/outputs/indonesia', exist_ok=True)

for grade, pdf_path in pdfs:
    if not os.path.exists(pdf_path):
        print(f"MISSING: {pdf_path}")
        continue
    try:
        doc = fitz.open(pdf_path)
        page_count = doc.page_count
        out_path = f".agents/outputs/indonesia/grade{grade}_{Path(pdf_path).stem}.txt"
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(f"=== Indonesia Grade {grade} | {pdf_path} | {page_count} pages ===\n\n")
            for i, page in enumerate(doc):
                text = page.get_text()
                if text.strip():
                    f.write(f"\n--- Page {i+1} ---\n")
                    f.write(text)
        doc.close()
        print(f"EXTRACTED: {out_path} ({page_count} pages)")
    except Exception as e:
        print(f"ERROR {pdf_path}: {e}")
