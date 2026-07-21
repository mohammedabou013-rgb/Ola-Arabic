import { setBaseUrl } from '@workspace/api-client-react';

// The real production deployment URL. EAS embeds EXPO_PUBLIC_API_BASE_URL at
// build time, but older code and some fallback paths were still pointing to the
// placeholder domain api.olaarabic.com which does not exist. Always default to
// the live Replit deployment so the app works on real devices.
const PRODUCTION_API_BASE_URL = 'https://attached-assets-mohammedabou013.replit.app';

const base =
  process.env.EXPO_PUBLIC_API_BASE_URL ||
  (process.env.EXPO_PUBLIC_DOMAIN
    ? `https://${process.env.EXPO_PUBLIC_DOMAIN}`
    : PRODUCTION_API_BASE_URL);

setBaseUrl(base);
export const API_BASE_URL = base;

// Fallback fetch for endpoints that fail on some Android devices.
// Returns parsed JSON or throws the original error.
export async function fetchJson<T>(path: string): Promise<T> {
  const url = `${base}${path}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const text = await response.text();
    if (!text.trim()) return null as T;
    return JSON.parse(text) as T;
  } catch (err) {
    throw err;
  }
}
