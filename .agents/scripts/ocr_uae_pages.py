import fitz
import os
import json
import urllib.request
from pathlib import Path
import base64

pdf_files = [
    (1, 1, "attached_assets/0_Arabic_grade_1_term1_1784272841470.pdf", 106),
    (1, 2, "attached_assets/0_Arabic_grade_1_term2_1784272937969.pdf", 95),
    (1, 3, "attached_assets/0_Arabic_grade_1_term_3_1784273174066.pdf", 93),
    (2, 1, "attached_assets/0_Arabic_grade_2_term1_1784272514338.pdf", 106),
    (2, 2, "attached_assets/0_Arabic_grade_2_term2_1784272722617.pdf", 66),
    (2, 3, "attached_assets/0_Arabic_grade_2_term3_1784272795340.pdf", 71),
    (3, 1, "attached_assets/0_Arabic_grade_3_term1_1784273285619.pdf", 107),
    (3, 2, "attached_assets/0_Arabic_grade_3_term2_1784273393952.pdf", 66),
    (3, 3, "attached_assets/0_Arabic_grade_3_term_3_1784273480103.pdf", 71),
    (4, 1, "attached_assets/0_Arabic_grade_4_term1_1784273763261.pdf", 107),
    (4, 2, "attached_assets/0_Arabic_grade_4_term2_1784273683038.pdf", 67),
    (4, 3, "attached_assets/0_Arabic_grade_4_term_3_1784273566620.pdf", 67),
    (5, 1, "attached_assets/Arabic_grade_5_term1_1784274946336.pdf", 107),
    (5, 2, "attached_assets/Arabic_grade_5_term2_1784274847937.pdf", 67),
    (5, 3, "attached_assets/Arabic_grade_5_term_3_1784274759528.pdf", 71),
    (6, 1, "attached_assets/Arabic_grade_6_term_1_1784273986044.pdf", 107),
    (6, 2, "attached_assets/Arabic_grade_6_term_2_1784274145716.pdf", 68),
    (6, 3, "attached_assets/Arabic_grade_6_term_3_1784274264497.pdf", 67),
    (7, 1, "attached_assets/Arabic_grade_7_term1_1784275248912.pdf", 107),
    (7, 2, "attached_assets/Arabic_grade_7_term2_1784275331298.pdf", 68),
    (7, 3, "attached_assets/Arabic_grade_7_term3_1784275394343.pdf", 71),
    (8, 1, "attached_assets/Arabic_grade_8_term1_1784274378299.pdf", 107),
    (8, 2, "attached_assets/Arabic_grade_8_term2_1784274589707.pdf", 68),
    (8, 3, "attached_assets/Arabic_grade_8_term3_1784274464009.pdf", 67),
]

base_url = os.environ['AI_INTEGRATIONS_OPENAI_BASE_URL']
api_key = os.environ['AI_INTEGRATIONS_OPENAI_API_KEY']
os.makedirs('.agents/outputs/uae_ocr', exist_ok=True)

for grade, term, pdf_path, page_count in pdf_files:
    if not os.path.exists(pdf_path):
        continue
    out_path = f'.agents/outputs/uae_ocr/grade{grade}_term{term}.txt'
    if os.path.exists(out_path) and os.path.getsize(out_path) > 1000:
        print(f'SKIP {out_path} (already done)')
        continue
    try:
        doc = fitz.open(pdf_path)
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(f'=== Grade {grade} Term {term} | {pdf_path} | {page_count} pages ===\n\n')
            # Process every 3rd page in first 60 pages to save cost
            for i in range(0, min(60, page_count), 3):
                page = doc[i]
                pix = page.get_pixmap(matrix=fitz.Matrix(1.2, 1.2))
                img_bytes = pix.tobytes('png')
                b64 = base64.b64encode(img_bytes).decode('utf-8')
                payload = {
                    'model': 'gpt-5.6-luna',
                    'max_completion_tokens': 1024,
                    'messages': [{
                        'role': 'user',
                        'content': [
                            {'type': 'text', 'text': 'Extract all Arabic text and educational content from this page. Identify unit titles, lesson titles, vocabulary words with diacritics, and exercise instructions. Keep it concise.'},
                            {'type': 'image_url', 'image_url': {'url': f'data:image/png;base64,{b64}'}}
                        ]
                    }]
                }
                req = urllib.request.Request(
                    base_url + '/chat/completions',
                    data=json.dumps(payload).encode('utf-8'),
                    headers={'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'},
                    method='POST'
                )
                with urllib.request.urlopen(req, timeout=60) as resp:
                    data = json.loads(resp.read().decode('utf-8'))
                    text = data['choices'][0]['message']['content']
                f.write(f'\n--- Page {i+1} ---\n')
                f.write(text)
                f.write('\n')
                print(f'Grade {grade} Term {term} Page {i+1}: OK ({len(text)} chars)')
        doc.close()
        print(f'DONE: {out_path}')
    except Exception as e:
        print(f'ERROR {pdf_path}: {e}')
