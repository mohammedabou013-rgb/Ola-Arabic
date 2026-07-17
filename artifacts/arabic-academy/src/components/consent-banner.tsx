import { useState, useEffect } from 'react';
import { ADS_ENABLED } from '@/lib/ads';
import { useI18n } from '@/i18n/context';
import { X } from 'lucide-react';

const CONSENT_KEY = 'ola_ads_consent';

type ConsentState = 'pending' | 'accepted' | 'declined';

export function ConsentBanner() {
  const { language } = useI18n();
  const isAr = language === 'ar';
  const [state, setState] = useState<ConsentState>('accepted'); // default to accepted until loaded

  useEffect(() => {
    if (!ADS_ENABLED) return;
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setState('pending');
    else setState(stored as ConsentState);
  }, []);

  const accept = () => { localStorage.setItem(CONSENT_KEY, 'accepted'); setState('accepted'); };
  const decline = () => { localStorage.setItem(CONSENT_KEY, 'declined'); setState('declined'); };

  if (!ADS_ENABLED || state !== 'pending') return null;

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t-2 border-border shadow-xl animate-in slide-in-from-bottom"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-foreground">
          <p className="font-bold mb-1">
            {isAr ? '🍪 نستخدم ملفات تعريف الارتباط' : '🍪 We use cookies'}
          </p>
          <p className="text-muted-foreground">
            {isAr
              ? 'نستخدم ملفات تعريف الارتباط وإعلانات Google AdSense لتقديم محتوى مجاني. بالمتابعة، توافق على سياسة الخصوصية.'
              : 'We use cookies and Google AdSense ads to keep this app free. By continuing, you agree to our privacy policy.'}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-bold border rounded-xl hover:bg-muted transition-colors"
          >
            {isAr ? 'رفض' : 'Decline'}
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
          >
            {isAr ? 'قبول' : 'Accept'}
          </button>
          <button onClick={decline} className="text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
