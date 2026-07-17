import fitz
import os

pdfs = [
    ("attached_assets/0_Arabic_grade_2_term1_1784272514338.pdf", "grade2_term1"),
    ("attached_assets/0_Arabic_grade_2_term2_1784272722617.pdf", "grade2_term2"),
]

for pdf, label in pdfs:
    out_dir = f".agents/outputs/uae_samples/{label}_all"
    os.makedirs(out_dir, exist_ok=True)
    doc = fitz.open(pdf)
    print(f'Rendering {label}: {len(doc)} pages')
    for i in range(len(doc)):
        page = doc.load_page(i)
        pix = page.get_pixmap(dpi=100)
        pix.save(f"{out_dir}/page{i+1:03d}.png")
    doc.close()
    print(f'Done {label}')
