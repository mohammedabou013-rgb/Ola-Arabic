import fitz

pdfs = [
    ("attached_assets/0_Arabic_grade_2_term1_1784272514338.pdf", "Grade2 Term1"),
    ("attached_assets/0_Arabic_grade_2_term2_1784272722617.pdf", "Grade2 Term2"),
]

for pdf, label in pdfs:
    doc = fitz.open(pdf)
    print(f'\n=== {label} ===')
    print(f'Pages: {len(doc)}')
    print('TOC:')
    toc = doc.get_toc()
    for t in toc:
        print(t)
    doc.close()
