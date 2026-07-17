import fitz
import os

pdf = "attached_assets/0_Arabic_grade_2_term3_1784272795340.pdf"
out_dir = ".agents/outputs/uae_samples/grade2_term3_low"
os.makedirs(out_dir, exist_ok=True)
doc = fitz.open(pdf)
print(f'Rendering {len(doc)} pages at low DPI')
for i in range(len(doc)):
    page = doc.load_page(i)
    pix = page.get_pixmap(dpi=72)
    pix.save(f"{out_dir}/page{i+1:03d}.jpg")
doc.close()
print('Done')
