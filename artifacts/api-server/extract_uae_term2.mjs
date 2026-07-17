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
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-5.6-terra',
      max_completion_tokens: 8192,
      messages: [
        { role: 'system', content: 'You are an Arabic textbook OCR assistant. Read the provided scanned pages from a UAE Grade 2 Arabic textbook and extract all Arabic text and any translations. Preserve structure: unit/lesson titles, vocabulary, dialogues, model sentences, exercises. Return only extracted text, clearly labeling each page.' },
        { role: 'user', content: [...imageContents, { type: 'text', text: `Extract all text from these pages of ${label}.` }] },
      ],
    }),
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? JSON.stringify(data, null, 2);
}

const label = 'grade2_term2';
const dir = '../../.agents/outputs/uae_samples/grade2_term2_all';
const outPath = '../../.agents/outputs/uae_grade2_term2_extracted.txt';
const entries = await fs.readdir(dir);
const images = entries.filter((e) => e.endsWith('.png')).sort();
let out = `=== ${label} ===\n`;

for (let i = 0; i < images.length; i += 5) {
  const batch = images.slice(i, i + 5);
  const pageNums = batch.map((img) => Number(img.match(/page(\d+)/)?.[1] ?? 0));
  console.log(`Processing ${label}: pages ${pageNums.join(',')}`);
  const text = await callVision({ label, pages: batch, dir });
  out += `\n--- Pages ${pageNums.join(', ')} ---\n${text}\n`;
  await fs.writeFile(outPath, out);
  await sleep(400);
}
console.log('Done');
