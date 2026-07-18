import { setBaseUrl } from '@workspace/api-client-react';

// In Expo/development, the Replit web domain proxies the API at /api.
// The generated API client already prefixes paths with /api, so the base URL
// must be the domain root without /api to avoid double /api/api/grades.
// In a standalone build, set EXPO_PUBLIC_API_BASE_URL to the production API root.
const base =
  (process as any).env.EXPO_PUBLIC_API_BASE_URL ||
  (typeof process !== 'undefined' && (process as any).env.EXPO_PUBLIC_DOMAIN
    ? `https://${(process as any).env.EXPO_PUBLIC_DOMAIN}`
    : 'https://api.olaarabic.com');

setBaseUrl(base);

export const API_BASE_URL = base;
