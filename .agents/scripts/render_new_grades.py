"""Render TOC pages from grades 5-8 UAE PDFs."""
import fitz, os
os.makedirs(".agents/outputs/uae-pdfs/pages", exist_ok=True)

pdfs = {
    "g5t1": "attached_assets/Arabic_grade_5_term1_1784274946336.pdf",
    "g5t2": "attached_assets/Arabic_grade_5_term2_1784274847937.pdf",
    "g5t3": "attached_assets/Arabic_grade_5_term_3_1784274759528.pdf",
    "g6t1": "attached_assets/Arabic_grade_6_term_1_1784273986044.pdf",
    "g6t2": "attached_assets/Arabic_grade_6_term_2_1784274145716.pdf",
    "g6t3": "attached_assets/Arabic_grade_6_term_3_1784274264497.pdf",
    "g7t1": "attached_assets/Arabic_grade_7_term1_1784275248912.pdf",
    "g7t2": "attached_assets/Arabic_grade_7_term2_1784275331298.pdf",
    "g7t3": "attached_assets/Arabic_grade_7_term3_1784275394343.pdf",
    "g8t1": "attached_assets/Arabic_grade_8_term1_1784274378299.pdf",
    "g8t2": "attached_assets/Arabic_grade_8_term2_1784274589707.pdf",
    "g8t3": "attached_assets/Arabic_grade_8_term3_1784274464009.pdf",
}

for key, path in pdfs.items():
    doc = fitz.open(path)
    print(f"{key}: {doc.page_count} pages")
    for pg in range(4, min(10, doc.page_count)):
        pix = doc[pg].get_pixmap(matrix=fitz.Matrix(1.5, 1.5))
        pix.save(f".agents/outputs/uae-pdfs/pages/{key}_p{pg+1}.png")
    doc.close()
print("Done.")
