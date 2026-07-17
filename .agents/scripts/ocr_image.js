const fs = require('fs');
const path = require('path');

const imagePath = process.argv[2] || 'attached_assets/image_1784290274954.png';
const base64 = fs.readFileSync(imagePath, { encoding: 'base64' });

fetch(process.env.AI_INTEGRATIONS_OPENAI_BASE_URL + '/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.AI_INTEGRATIONS_OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-5.6-luna',
    max_completion_tokens: 2048,
    messages: [{
      role: 'user',
      content: [
        { type: 'text', text: 'Extract all Arabic text from this image. List each vocabulary word with its picture description and diacritics (harakat).' },
        { type: 'image_url', image_url: { url: `data:image/png;base64,${base64}` } }
      ]
    }]
  })
}).then(r => r.json()).then(json => {
  console.log(json.choices?.[0]?.message?.content ?? 'No response');
}).catch(e => console.error(e));
