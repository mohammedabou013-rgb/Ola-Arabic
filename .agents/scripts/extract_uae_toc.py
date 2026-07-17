import fitz
import sys
import os

pdfs = [
    ("attached_assets/0_Arabic_grade_2_term1_1784272514338.pdf", "Grade2 Term1"),
    ("attached_assets/0_Arabic_grade_2_term2_1784272722617.pdf", "Grade2 Term2"),
]

for pdf, label in pdfs:
    if not os.path.exists(pdf):
        print(f'{label}: PDF not found')
        continue
    doc = fitz.open(pdf)
    print(f'\n=== {label} | {len(doc)} pages ===')
    # Try to extract text from pages 3-8 (intro and table of contents)
    for i in range(2, min(8, len(doc))):
        page = doc.load_page(i)
        text = page.get_text()
        if text.strip():
            print(f'\n--- Page {i+1} ---')
            print(text[:1500])
    doc.close()
