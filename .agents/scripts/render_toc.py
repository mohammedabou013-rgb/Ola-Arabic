import fitz, os
books = {
    "y1": ("attached_assets/BA_Tahun_1_1784269969059.pdf", range(3, 7)),
    "y2": ("attached_assets/B_Arab_tahun_2__1784269914009.pdf", range(2, 8)),
    "y3": ("attached_assets/Buku_Teks_THN3_BA_1784269848224.pdf", range(2, 8)),
    "y4": ("attached_assets/Bahasa_Arab_Tahun_4_1784269781997.pdf", range(3, 8)),
    "y5": ("attached_assets/Bahasa_Arab_SK_Tahun_5_1784269706752.pdf", range(3, 8)),
    "y6": ("attached_assets/Tahun_6_BA_1784270093611.pdf", range(2, 8)),
}
os.makedirs(".agents/outputs/toc", exist_ok=True)
for key, (path, pages) in books.items():
    doc = fitz.open(path)
    for p in pages:
        if p >= doc.page_count: break
        pix = doc[p].get_pixmap(matrix=fitz.Matrix(1.6, 1.6))
        out = f".agents/outputs/toc/{key}_p{p}.png"
        pix.save(out)
        print(out, pix.width, pix.height)
    doc.close()
