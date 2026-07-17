import fs from 'node:fs/promises';
import path from 'node:path';

const baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL;
const apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;

async function extractToc(term) {
  const dir = `../../.agents/outputs/uae_samples/grade2`;
  const entries = await fs.readdir(dir);
  const images = entries
    .filter(e => e.startsWith(`grade2_term${term}_`) && e.endsWith('.png'))
    .sort();

  const imageContents = await Promise.all(images.map(async (img) => {
    const p = path.join(dir, img);
    const b64 = await fs.readFile(p, { encoding: 'base64' });
    return { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}`, detail: 'high' } };
  }));

  const response = await fetch(`${baseURL}/chat/completions`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-5.6-terra',
      max_completion_tokens: 4096,
      messages: [
        {
          role: 'system',
          content: 'You are an Arabic textbook analyst. Extract the table of contents from the provided scanned UAE Grade 2 Arabic textbook pages. For each unit and each lesson, provide the page number shown in the table of contents. Return a JSON object with the structure: {"term": "1", "units": [{"order": 1, "titleArabic": "...", "startPage": 8, "lessons": [{"order": 1, "titleArabic": "...", "page": 10}]}]}. Include only confirmed content.',
        },
        {
          role: 'user',
          content: [...imageContents, { type: 'text', text: `Extract the table of contents with page numbers from UAE Grade 2 Term ${term}.` }],
        },
      ],
    }),
  });

  const data = await response.json();
  const text = data.choices[0]?.message?.content ?? JSON.stringify(data, null, 2);
  await fs.writeFile(`../../.agents/outputs/uae_grade2_term${term}_toc.json`, text);
  console.log(`Term ${term} TOC:`);
  console.log(text);
}

for (const term of [1, 2]) {
  await extractToc(term);
}
