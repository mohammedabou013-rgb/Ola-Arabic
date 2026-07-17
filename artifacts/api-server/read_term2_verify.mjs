import fs from 'node:fs/promises';
import path from 'node:path';

const baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL;
const apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;

const images = ['page6', 'page7', 'page8'].map(p => `.agents/outputs/uae_samples/grade2_term2_verify_${p}.png`);
const imageContents = await Promise.all(images.map(async (img) => {
  const b64 = await fs.readFile(`../../${img}`, { encoding: 'base64' });
  return { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}`, detail: 'high' } };
}));

const response = await fetch(`${baseURL}/chat/completions`, {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'gpt-5.6-terra',
    max_completion_tokens: 4096,
    messages: [
      { role: 'system', content: 'Read these pages from a UAE Grade 2 Arabic textbook and tell me the unit title, lesson title, and main topic. Be concise.' },
      { role: 'user', content: [...imageContents, { type: 'text', text: 'What unit and lesson are these pages from?' }] },
    ],
  }),
});

const data = await response.json();
console.log(data.choices[0]?.message?.content);
