import fitz
import sys
import os
from pathlib import Path

# UAE PDFs mapping
pdf_files = [
    (1, "attached_assets/0_Arabic_grade_1_term1_1784272841470.pdf"),
    (1, "attached_assets/0_Arabic_grade_1_term2_1784272937969.pdf"),
    (1, "attached_assets/0_Arabic_grade_1_term_3_1784273174066.pdf"),
    (2, "attached_assets/0_Arabic_grade_2_term1_1784272514338.pdf"),
    (2, "attached_assets/0_Arabic_grade_2_term2_1784272722617.pdf"),
    (2, "attached_assets/0_Arabic_grade_2_term3_1784272795340.pdf"),
    (3, "attached_assets/0_Arabic_grade_3_term1_1784273285619.pdf"),
    (3, "attached_assets/0_Arabic_grade_3_term2_1784273393952.pdf"),
    (3, "attached_assets/0_Arabic_grade_3_term_3_1784273480103.pdf"),
    (4, "attached_assets/0_Arabic_grade_4_term1_1784273763261.pdf"),
    (4, "attached_assets/0_Arabic_grade_4_term2_1784273683038.pdf"),
    (4, "attached_assets/0_Arabic_grade_4_term_3_1784273566620.pdf"),
    (5, "attached_assets/Arabic_grade_5_term1_1784274946336.pdf"),
    (5, "attached_assets/Arabic_grade_5_term2_1784274847937.pdf"),
    (5, "attached_assets/Arabic_grade_5_term_3_1784274759528.pdf"),
    (6, "attached_assets/Arabic_grade_6_term_1_1784273986044.pdf"),
    (6, "attached_assets/Arabic_grade_6_term_2_1784274145716.pdf"),
    (6, "attached_assets/Arabic_grade_6_term_3_1784274264497.pdf"),
    (7, "attached_assets/Arabic_grade_7_term1_1784275248912.pdf"),
    (7, "attached_assets/Arabic_grade_7_term2_1784275331298.pdf"),
    (7, "attached_assets/Arabic_grade_7_term3_1784275394343.pdf"),
    (8, "attached_assets/Arabic_grade_8_term1_1784274378299.pdf"),
    (8, "attached_assets/Arabic_grade_8_term2_1784274589707.pdf"),
    (8, "attached_assets/Arabic_grade_8_term3_1784274464009.pdf"),
]

os.makedirs(".agents/outputs/uae", exist_ok=True)

for grade, pdf_path in pdf_files:
    if not os.path.exists(pdf_path):
        print(f"MISSING: {pdf_path}")
        continue
    try:
        doc = fitz.open(pdf_path)
        out_path = f".agents/outputs/uae/grade{grade}_{Path(pdf_path).name}.txt"
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(f"=== Grade {grade} | {pdf_path} | {doc.page_count} pages ===\n\n")
            for i, page in enumerate(doc):
                text = page.get_text()
                if text.strip():
                    f.write(f"\n--- Page {i+1} ---\n")
                    f.write(text)
        doc.close()
        print(f"EXTRACTED: {out_path} ({doc.page_count} pages)")
    except Exception as e:
        print(f"ERROR {pdf_path}: {e}")
