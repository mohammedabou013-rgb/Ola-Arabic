import { useEffect, useRef } from 'react';
import { ADS_ENABLED, PUB_ID, AD_SLOTS, pushAd, type AdSlotKey } from '@/lib/ads';

type AdSize = 'banner' | 'rectangle' | 'mobile' | 'auto';

interface AdBannerProps {
  slot: AdSlotKey;
  size?: AdSize;
  className?: string;
}

const SIZE_STYLES: Record<AdSize, { w: string; h: string; label: string }> = {
  banner:    { w: 'w-full max-w-[728px]', h: 'h-[90px]',  label: 'Leaderboard 728×90' },
  rectangle: { w: 'w-full max-w-[336px]', h: 'h-[280px]', label: 'Rectangle 336×280' },
  mobile:    { w: 'w-full max-w-[320px]', h: 'h-[50px]',  label: 'Mobile 320×50' },
  auto:      { w: 'w-full',               h: 'h-[90px]',  label: 'Responsive' },
};

/**
 * AdBanner — drop-in ad placement component.
 *
 * - When VITE_ADS_ENABLED=true and VITE_ADSENSE_PUB_ID is set → renders a real
 *   Google AdSense unit.
 * - Otherwise → shows a clearly-labelled placeholder so you can see ad locations
 *   during development/preview.
 */
export function AdBanner({ slot, size = 'auto', className = '' }: AdBannerProps) {
  const insRef = useRef<HTMLModElement>(null);
  const slotId  = AD_SLOTS[slot];
  const { w, h, label } = SIZE_STYLES[size];

  useEffect(() => {
    if (ADS_ENABLED && PUB_ID && insRef.current) {
      pushAd();
    }
  }, []);

  // ── Real AdSense unit ──────────────────────────────────────────────
  if (ADS_ENABLED && PUB_ID) {
    return (
      <div className={`flex justify-center my-2 ${className}`}>
        <ins
          ref={insRef}
          className={`adsbygoogle ${w}`}
          style={{ display: 'block' }}
          data-ad-client={PUB_ID}
          data-ad-slot={slotId}
          data-ad-format={size === 'auto' ? 'auto' : undefined}
          data-full-width-responsive={size === 'auto' ? 'true' : undefined}
        />
      </div>
    );
  }

  // ── Placeholder (dev / no publisher ID) ───────────────────────────
  return (
    <div className={`flex justify-center my-2 ${className}`}>
      <div
        className={`${w} ${h} flex flex-col items-center justify-center border-2 border-dashed border-primary/30 bg-primary/5 rounded-xl text-primary/50 select-none`}
      >
        <span className="text-xs font-bold uppercase tracking-widest">Ad Slot</span>
        <span className="text-[10px] mt-0.5 font-mono">{label} · {slot}</span>
      </div>
    </div>
  );
}
