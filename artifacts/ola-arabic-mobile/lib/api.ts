import { setBaseUrl } from '@workspace/api-client-react';

// Primary production URL. Replit deployments may have SSL/redirect issues on some
// Android devices (e.g. Honor EMUI), so the runtime also falls back to a direct
// fetch if the generated client request fails.
const base =
  (process as any).env.EXPO_PUBLIC_API_BASE_URL ||
  (typeof process !== 'undefined' && (process as any).env.EXPO_PUBLIC_DOMAIN
    ? `https://${(process as any).env.EXPO_PUBLIC_DOMAIN}`
    : 'https://api.olaarabic.com');

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
