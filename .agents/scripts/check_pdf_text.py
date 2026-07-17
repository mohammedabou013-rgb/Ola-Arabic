import fitz
import os

pdfs = [
    ("Indonesia", 1, "attached_assets/BAHASA_ARAB__MI__KELAS__I_2020_abdimadrasah.com_1784292790913.pdf"),
    ("Indonesia", 2, "attached_assets/BAHASA_ARAB__MI__KELAS__II_2020_abdimadrasah.com_1784292790913.pdf"),
    ("Indonesia", 3, "attached_assets/BAHASA_ARAB__MI__KELAS__III_2020_abdimadrasah.com_1784292790914.pdf"),
    ("Indonesia", 4, "attached_assets/BAHASA_ARAB__MI__KELAS__IV_2020_abdimadrasah.com_1784292790914.pdf"),
    ("Indonesia", 5, "attached_assets/BAHASA_ARAB__MI_KELAS_V_2020_abdimadrasah.com_1784292790915.pdf"),
    ("Indonesia", 6, "attached_assets/BAHASA_ARAB__MI_KELAS_VI_2020_abdimadrasah.com_1784292790915.pdf"),
]

for label, grade, pdf in pdfs:
    if not os.path.exists(pdf):
        print(f"MISSING: {pdf}")
        continue
    try:
        doc = fitz.open(pdf)
        count = doc.page_count
        # Check text on pages 5, 20, 40
        samples = [min(5, count-1), min(20, count-1), min(40, count-1)]
        lengths = []
        for p in samples:
            text = doc[p].get_text().strip()
            lengths.append(len(text))
        doc.close()
        print(f"{label} Grade {grade}: {count} pages, text lengths {lengths}")
    except Exception as e:
        print(f"ERROR {pdf}: {e}")
