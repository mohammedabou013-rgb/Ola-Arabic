/**
 * Ads configuration
 *
 * To activate Google AdSense:
 *   1. Set VITE_ADSENSE_PUB_ID=ca-pub-XXXXXXXXXXXXXXXX  (your AdSense publisher ID)
 *   2. Set VITE_ADS_ENABLED=true
 *   3. Replace slot IDs below with the ones generated in your AdSense dashboard.
 *
 * Slot types:
 *   - banner     : 728×90  (horizontal leaderboard — top/bottom of page)
 *   - rectangle  : 336×280 (medium rectangle — between content blocks)
 *   - mobile     : 320×50  (mobile banner)
 *
 * While VITE_ADS_ENABLED is not 'true', placeholder cards are shown instead of
 * real ads so you can see exactly where they will appear.
 */

export const ADS_ENABLED = import.meta.env.VITE_ADS_ENABLED === 'true';
export const PUB_ID = import.meta.env.VITE_ADSENSE_PUB_ID ?? '';

/** Replace these slot IDs once you create ad units in your AdSense dashboard */
export const AD_SLOTS = {
  /** Home page — between curriculum badge and grade list */
  HOME_TOP: import.meta.env.VITE_AD_SLOT_HOME_TOP ?? '0000000001',
  /** Home page — between every 3rd grade card */
  HOME_INLINE: import.meta.env.VITE_AD_SLOT_HOME_INLINE ?? '0000000002',
  /** Grade page — below grade header */
  GRADE_TOP: import.meta.env.VITE_AD_SLOT_GRADE_TOP ?? '0000000003',
  /** Practice page — below section header */
  PRACTICE_TOP: import.meta.env.VITE_AD_SLOT_PRACTICE_TOP ?? '0000000004',
  /** Lesson completion screen */
  LESSON_END: import.meta.env.VITE_AD_SLOT_LESSON_END ?? '0000000005',
} as const;

export type AdSlotKey = keyof typeof AD_SLOTS;

/** Inject the AdSense script once into <head>. Call from App root. */
export function initAdsScript() {
  if (!ADS_ENABLED || !PUB_ID) return;
  if (document.getElementById('ola-adsense')) return;
  const s = document.createElement('script');
  s.id = 'ola-adsense';
  s.async = true;
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUB_ID}`;
  s.crossOrigin = 'anonymous';
  document.head.appendChild(s);
}

/** Push an ad unit to AdSense after the DOM node is rendered */
export function pushAd() {
  if (!ADS_ENABLED || !PUB_ID) return;
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
  } catch (_) {
    // silently ignore in SSR / blocked scenarios
  }
}
