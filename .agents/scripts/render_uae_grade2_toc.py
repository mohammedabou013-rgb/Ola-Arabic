import fitz
import os

pdfs = [
    ("attached_assets/0_Arabic_grade_2_term2_1784272722617.pdf", "grade2_term2"),
    ("attached_assets/0_Arabic_grade_2_term3_1784272795340.pdf", "grade2_term3"),
]

os.makedirs(".agents/outputs/uae_samples/grade2", exist_ok=True)

for pdf, label in pdfs:
    doc = fitz.open(pdf)
    for i in range(2, min(8, len(doc))):
        page = doc.load_page(i)
        pix = page.get_pixmap(dpi=150)
        out = f".agents/outputs/uae_samples/grade2/{label}_page{i+1}.png"
        pix.save(out)
        print(f'Saved {out}')
    doc.close()
