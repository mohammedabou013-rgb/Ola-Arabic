import fitz

doc = fitz.open("attached_assets/0_Arabic_grade_2_term2_1784272722617.pdf")
for i in range(5, 8):
    page = doc.load_page(i)
    pix = page.get_pixmap(dpi=100)
    pix.save(f".agents/outputs/uae_samples/grade2_term2_verify_page{i+1}.png")
    print(f'Saved page {i+1}')
doc.close()
