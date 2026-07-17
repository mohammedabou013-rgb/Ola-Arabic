import { setBaseUrl } from '@workspace/api-client-react';

// In Expo/development, the Replit web domain proxies the API at /api.
// In a standalone build, set EXPO_PUBLIC_API_BASE_URL to the production API.
const base =
  (process as any).env.EXPO_PUBLIC_API_BASE_URL ||
  (typeof process !== 'undefined' && (process as any).env.EXPO_PUBLIC_DOMAIN
    ? `https://${(process as any).env.EXPO_PUBLIC_DOMAIN}/api`
    : 'https://api.olaarabic.com/api');

setBaseUrl(base);

export const API_BASE_URL = base;
