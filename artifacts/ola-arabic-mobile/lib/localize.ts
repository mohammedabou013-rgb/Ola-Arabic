import type { LocalizedText } from '@workspace/api-client-react';

export function getLocalizedText(text: LocalizedText, lang: string): string {
  if (!text) return '';
  const val = text[lang as keyof LocalizedText];
  if (val) return val;
  if (text.en) return text.en;
  if (text.ar) return text.ar;
  return Object.values(text)[0] || '';
}
