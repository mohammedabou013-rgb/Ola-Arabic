"""Render key pages from UAE PDFs as images to read visually."""
import fitz, os

os.makedirs(".agents/outputs/uae-pdfs/pages", exist_ok=True)

pdfs = {
    "g1t1": "attached_assets/0_Arabic_grade_1_term1_1784272841470.pdf",
    "g1t2": "attached_assets/0_Arabic_grade_1_term2_1784272937969.pdf",
    "g1t3": "attached_assets/0_Arabic_grade_1_term_3_1784273174066.pdf",
    "g2t1": "attached_assets/0_Arabic_grade_2_term1_1784272514338.pdf",
    "g2t2": "attached_assets/0_Arabic_grade_2_term2_1784272722617.pdf",
    "g2t3": "attached_assets/0_Arabic_grade_2_term3_1784272795340.pdf",
    "g3t1": "attached_assets/0_Arabic_grade_3_term1_1784273285619.pdf",
    "g3t2": "attached_assets/0_Arabic_grade_3_term2_1784273393952.pdf",
    "g3t3": "attached_assets/0_Arabic_grade_3_term_3_1784273480103.pdf",
    "g4t1": "attached_assets/0_Arabic_grade_4_term1_1784273763261.pdf",
    "g4t2": "attached_assets/0_Arabic_grade_4_term2_1784273683038.pdf",
    "g4t3": "attached_assets/0_Arabic_grade_4_term_3_1784273566620.pdf",
}

# Render pages 4-8 (TOC + first lesson) for each book at 1.5x zoom
for key, path in pdfs.items():
    doc = fitz.open(path)
    pages_to_render = list(range(4, min(9, doc.page_count)))
    for pg in pages_to_render:
        page = doc[pg]
        mat = fitz.Matrix(1.5, 1.5)
        pix = page.get_pixmap(matrix=mat)
        out = f".agents/outputs/uae-pdfs/pages/{key}_p{pg+1}.png"
        pix.save(out)
    doc.close()
    print(f"Rendered {key} pages {[p+1 for p in pages_to_render]}")

print("Done.")
