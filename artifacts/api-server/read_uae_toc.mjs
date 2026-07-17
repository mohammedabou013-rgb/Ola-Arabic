import fs from 'node:fs/promises';
import path from 'node:path';

const baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL;
const apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;

async function extractTerm(term) {
  const dir = `../../.agents/outputs/uae_samples/grade2`;
  const entries = await fs.readdir(dir);
  const images = entries
    .filter(e => e.startsWith(`grade2_term${term}_`) && e.endsWith('.png'))
    .sort();

  const imageContents = await Promise.all(images.map(async (img) => {
    const p = path.join(dir, img);
    const b64 = await fs.readFile(p, { encoding: 'base64' });
    return { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}`, detail: 'low' } };
  }));

  const response = await fetch(`${baseURL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-5.6-terra',
      max_completion_tokens: 4096,
      messages: [
        {
          role: 'system',
          content: 'You are an Arabic textbook analyzer. Extract the table of contents / unit list from the provided scanned Arabic textbook pages. Return a JSON object with fields: {"term": "1", "units": [{"order": 1, "titleArabic": "...", "lessons": [{"order": 1, "titleArabic": "..."}]}]}. Be concise and only include confirmed content.',
        },
        {
          role: 'user',
          content: [...imageContents, { type: 'text', text: `Extract the table of contents from these pages of a UAE Grade 2 Arabic textbook term ${term}.` }],
        },
      ],
    }),
  });

  const data = await response.json();
  return data.choices[0]?.message?.content ?? JSON.stringify(data, null, 2);
}

for (const term of [2, 3]) {
  console.log(`\n=== Term ${term} ===`);
  const result = await extractTerm(term);
  console.log(result);
}
