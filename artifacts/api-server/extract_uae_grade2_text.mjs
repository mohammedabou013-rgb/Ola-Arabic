import fs from 'node:fs/promises';
import path from 'node:path';

const baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL;
const apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function callVision({ label, pages, dir }) {
  const imageContents = await Promise.all(pages.map(async (img) => {
    const p = path.join(dir, img);
    const b64 = await fs.readFile(p, { encoding: 'base64' });
    return { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}`, detail: 'low' } };
  }));

  const response = await fetch(`${baseURL}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-5.6-terra',
      max_completion_tokens: 8192,
      messages: [
        {
          role: 'system',
          content: 'You are an Arabic textbook OCR assistant. Read the provided scanned pages from a UAE Grade 2 Arabic textbook and extract all Arabic text and any English/Malay/Indonesian/French/Spanish translations. Preserve the structure: page numbers, unit titles, lesson titles, vocabulary lists, dialogues, model sentences, and exercises. Return only the extracted text, clearly labeling each page.',
        },
        {
          role: 'user',
          content: [...imageContents, { type: 'text', text: `Extract all text from these pages of ${label}.` }],
        },
      ],
    }),
  });

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content ?? JSON.stringify(data, null, 2);
  return { text };
}

async function extractTerm(termLabel, inputDir, outPath, startPage = 1, batchSize = 10) {
  const entries = await fs.readdir(inputDir);
  const images = entries.filter((e) => e.endsWith('.png')).sort();
  let out = '';
  try {
    out = await fs.readFile(outPath, 'utf-8');
  } catch { /* start fresh */ }
  if (!out) out = `=== ${termLabel} ===\n`;

  // Filter images to start from startPage
  const startImg = `page${startPage.toString().padStart(3, '0')}.png`;
  const startIdx = images.findIndex((img) => img === startImg);
  const effectiveImages = startIdx >= 0 ? images.slice(startIdx) : images;

  for (let i = 0; i < effectiveImages.length; i += batchSize) {
    const batch = effectiveImages.slice(i, i + batchSize);
    const pageNums = batch.map((img) => Number(img.match(/page(\d+)/)?.[1] ?? 0));
    console.log(`Processing ${termLabel}: pages ${pageNums[0]}-${pageNums[pageNums.length - 1]}`);

    const { text } = await callVision({ label: termLabel, pages: batch, dir: inputDir });
    out += `\n--- Pages ${pageNums.join(', ')} ---\n${text}\n`;
    await fs.writeFile(outPath, out);
    await sleep(500);
  }

  console.log(`Wrote ${outPath}`);
}

await extractTerm('grade2_term1', '../../.agents/outputs/uae_samples/grade2_term1_all', '../../.agents/outputs/uae_grade2_term1_extracted.txt', 61, 10);
await extractTerm('grade2_term2', '../../.agents/outputs/uae_samples/grade2_term2_all', '../../.agents/outputs/uae_grade2_term2_extracted.txt', 1, 10);
