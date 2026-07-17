import fitz
import os

pdfs = [
    ("UAE", 1, "attached_assets/0_Arabic_grade_1_term1_1784272841470.pdf"),
    ("UAE", 2, "attached_assets/0_Arabic_grade_2_term1_1784272514338.pdf"),
    ("UAE", 8, "attached_assets/Arabic_grade_8_term1_1784274378299.pdf"),
]

for label, grade, pdf in pdfs:
    if not os.path.exists(pdf):
        continue
    try:
        doc = fitz.open(pdf)
        count = doc.page_count
        samples = [min(5, count-1), min(20, count-1), min(40, count-1)]
        lengths = [len(doc[p].get_text().strip()) for p in samples]
        doc.close()
        print(f"{label} Grade {grade}: {count} pages, text lengths {lengths}")
    except Exception as e:
        print(f"ERROR {pdf}: {e}")
