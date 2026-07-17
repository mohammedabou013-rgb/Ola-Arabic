import fs from 'node:fs/promises';
import path from 'node:path';

const baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL;
const apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;

async function extractLesson(label, startPage, endPage) {
  const dir = `../../.agents/outputs/uae_samples/${label}_all`;
  const images = [];
  for (let p = startPage; p <= endPage; p++) {
    images.push(`page${p.toString().padStart(3, '0')}.png`);
  }

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
          content: 'You are an Arabic textbook analyst. Extract the lesson content from the provided UAE Grade 2 Arabic textbook pages. Return: 1) lesson title, 2) list of vocabulary items in Arabic with English/Malay/Indonesian/French/Spanish translations if shown, 3) any dialogue, 4) any exercises. Be concise and accurate.',
        },
        {
          role: 'user',
          content: [...imageContents, { type: 'text', text: `Extract the lesson content from ${label} pages ${startPage}-${endPage}.` }],
        },
      ],
    }),
  });

  const data = await response.json();
  return data.choices[0]?.message?.content ?? JSON.stringify(data, null, 2);
}

const t1u1l1 = await extractLesson('grade2_term1', 8, 17);
console.log('=== Term1 Unit1 Lesson1 (جسمي) ===');
console.log(t1u1l1);

const t2u3l1 = await extractLesson('grade2_term2', 8, 17);
console.log('\n=== Term2 Unit3 Lesson1 (الساعة والتاريخ) ===');
console.log(t2u3l1);

const t3u5l1 = await extractLesson('grade2_term3', 8, 17);
console.log('\n=== Term3 Unit5 Lesson1 (أعز أصدقائي) ===');
console.log(t3u5l1);
