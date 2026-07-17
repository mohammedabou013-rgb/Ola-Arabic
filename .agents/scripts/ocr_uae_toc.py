import fitz
import os
import json
import urllib.request
import base64

pdfs = [
    (1, 1, "attached_assets/0_Arabic_grade_1_term1_1784272841470.pdf"),
    (1, 2, "attached_assets/0_Arabic_grade_1_term2_1784272937969.pdf"),
    (1, 3, "attached_assets/0_Arabic_grade_1_term_3_1784273174066.pdf"),
]

base_url = os.environ['AI_INTEGRATIONS_OPENAI_BASE_URL']
api_key = os.environ['AI_INTEGRATIONS_OPENAI_API_KEY']
os.makedirs('.agents/outputs/uae_toc', exist_ok=True)

for grade, term, pdf_path in pdfs:
    if not os.path.exists(pdf_path):
        continue
    out_path = f'.agents/outputs/uae_toc/grade{grade}_term{term}_toc.txt'
    try:
        doc = fitz.open(pdf_path)
        page_count = doc.page_count
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(f'=== UAE Grade {grade} Term {term} TOC | {pdf_path} | {page_count} pages ===\n\n')
            for i in range(min(15, page_count)):
                page = doc[i]
                pix = page.get_pixmap(matrix=fitz.Matrix(1.3, 1.3))
                b64 = base64.b64encode(pix.tobytes('png')).decode('utf-8')
                payload = {
                    'model': 'gpt-5.6-luna',
                    'max_completion_tokens': 1024,
                    'messages': [{
                        'role': 'user',
                        'content': [
                            {'type': 'text', 'text': 'If this page contains a table of contents, unit list, or lesson list, extract all Arabic titles and page numbers. If not, just say "NO TOC". Keep it concise.'},
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
                if 'NO TOC' not in text:
                    f.write(f'\n--- Page {i+1} ---\n')
                    f.write(text)
                    f.write('\n')
                    print(f'Grade {grade} Term {term} Page {i+1}: TOC found ({len(text)} chars)')
                else:
                    print(f'Grade {grade} Term {term} Page {i+1}: no TOC')
        doc.close()
        print(f'DONE: {out_path}')
    except Exception as e:
        print(f'ERROR {pdf_path}: {e}')
