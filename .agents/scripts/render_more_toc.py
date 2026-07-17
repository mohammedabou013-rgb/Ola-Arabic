"""Render additional TOC pages we still need."""
import fitz, os
os.makedirs(".agents/outputs/uae-pdfs/pages", exist_ok=True)

# key: (path, pages_to_render)
targets = [
    ("g1t3", "attached_assets/0_Arabic_grade_1_term_3_1784273174066.pdf", [4, 5]),   # unit 5
    ("g2t3", "attached_assets/0_Arabic_grade_2_term3_1784272795340.pdf", [4, 5, 6]), # units 5-6
    ("g3t1b","attached_assets/0_Arabic_grade_3_term1_1784273285619.pdf", [5, 6, 7]), # unit 2
    ("g3t3", "attached_assets/0_Arabic_grade_3_term_3_1784273480103.pdf", [4, 5, 6]),
    ("g4t2", "attached_assets/0_Arabic_grade_4_term2_1784273683038.pdf", [4, 5, 6]),
    ("g4t3", "attached_assets/0_Arabic_grade_4_term_3_1784273566620.pdf", [4, 5, 6]),
    ("g1t1b","attached_assets/0_Arabic_grade_1_term1_1784272841470.pdf", [7, 8, 9]),  # lesson sample
]
for key, path, pages in targets:
    doc = fitz.open(path)
    for pg in pages:
        if pg < doc.page_count:
            pix = doc[pg].get_pixmap(matrix=fitz.Matrix(1.5, 1.5))
            pix.save(f".agents/outputs/uae-pdfs/pages/{key}_p{pg+1}.png")
    doc.close()
    print(f"Rendered {key} pages {[p+1 for p in pages]}")
print("Done.")
