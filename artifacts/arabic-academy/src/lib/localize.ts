import type { LocalizedText } from "@workspace/api-client-react";

export const getLocalizedText = (text: LocalizedText, lang: string): string => {
  // If the target lang exists in the object, return it.
  // Fallback to English, then Arabic.
  if (!text) return '';
  const val = text[lang as keyof LocalizedText];
  if (val) return val;
  if (text.en) return text.en;
  if (text.ar) return text.ar;
  return Object.values(text)[0] || '';
};
