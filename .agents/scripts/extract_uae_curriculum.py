"""Extract text content from UAE Arabic curriculum PDFs to understand structure."""
import fitz  # pymupdf
import json
import os

pdfs = {
    "grade1_term1": "attached_assets/0_Arabic_grade_1_term1_1784272841470.pdf",
    "grade1_term2": "attached_assets/0_Arabic_grade_1_term2_1784272937969.pdf",
    "grade1_term3": "attached_assets/0_Arabic_grade_1_term_3_1784273174066.pdf",
    "grade2_term1": "attached_assets/0_Arabic_grade_2_term1_1784272514338.pdf",
    "grade2_term2": "attached_assets/0_Arabic_grade_2_term2_1784272722617.pdf",
    "grade2_term3": "attached_assets/0_Arabic_grade_2_term3_1784272795340.pdf",
    "grade3_term1": "attached_assets/0_Arabic_grade_3_term1_1784273285619.pdf",
    "grade3_term2": "attached_assets/0_Arabic_grade_3_term2_1784273393952.pdf",
    "grade3_term3": "attached_assets/0_Arabic_grade_3_term_3_1784273480103.pdf",
    "grade4_term1": "attached_assets/0_Arabic_grade_4_term1_1784273763261.pdf",
    "grade4_term2": "attached_assets/0_Arabic_grade_4_term2_1784273683038.pdf",
    "grade4_term3": "attached_assets/0_Arabic_grade_4_term_3_1784273566620.pdf",
}

os.makedirs(".agents/outputs/uae-pdfs", exist_ok=True)

results = {}
for key, path in pdfs.items():
    doc = fitz.open(path)
    print(f"\n{'='*60}")
    print(f"{key}: {doc.page_count} pages")
    
    # Extract text from first 15 pages to understand structure
    pages_text = []
    for page_num in range(min(15, doc.page_count)):
        page = doc[page_num]
        text = page.get_text("text").strip()
        if text:
            pages_text.append(f"--- Page {page_num+1} ---\n{text[:800]}")
    
    results[key] = {
        "pages": doc.page_count,
        "sample": pages_text[:10]
    }
    
    # Print sample
    for p in pages_text[:5]:
        print(p[:600])
    
    doc.close()

# Save full results
with open(".agents/outputs/uae-pdfs/extraction_summary.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("\nDone. Results saved to .agents/outputs/uae-pdfs/extraction_summary.json")
