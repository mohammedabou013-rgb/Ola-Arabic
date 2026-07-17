import fitz
import os

pdf_files = [
    (1, 1, "attached_assets/0_Arabic_grade_1_term1_1784272841470.pdf"),
    (2, 1, "attached_assets/0_Arabic_grade_2_term1_1784272514338.pdf"),
    (3, 1, "attached_assets/0_Arabic_grade_3_term1_1784273285619.pdf"),
    (4, 1, "attached_assets/0_Arabic_grade_4_term1_1784273763261.pdf"),
]

os.makedirs(".agents/outputs/uae_samples", exist_ok=True)

for grade, term, pdf_path in pdf_files:
    try:
        doc = fitz.open(pdf_path)
        page_count = doc.page_count
        # Sample pages: 20, 40, 60 (or middle if shorter)
        sample_pages = [min(20, page_count-1), min(40, page_count-1), min(60, page_count-1)]
        for p in sample_pages:
            page = doc[p]
            text = page.get_text().strip()
            print(f"Grade {grade} Term {term} Page {p+1}: text length = {len(text)}")
            if len(text) < 50:
                # Render as image
                pix = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5))
                img_path = f".agents/outputs/uae_samples/g{grade}t{term}_p{p+1}.png"
                pix.save(img_path)
                print(f"  -> rendered image: {img_path}")
        doc.close()
    except Exception as e:
        print(f"ERROR {pdf_path}: {e}")
