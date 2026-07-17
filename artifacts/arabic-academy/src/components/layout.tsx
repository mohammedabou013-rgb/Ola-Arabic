import { useI18n, SupportedLanguage } from '@/i18n/context';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef, useState, useEffect } from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
  const { language, setLanguage, t } = useI18n();
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const langs: { code: SupportedLanguage; label: string; abbr: string }[] = [
    { code: 'ar', label: 'العربية', abbr: 'ar' },
    { code: 'en', label: 'English', abbr: 'en' },
    { code: 'ms', label: 'Melayu', abbr: 'ms' },
    { code: 'id', label: 'Indonesia', abbr: 'id' },
    { code: 'fr', label: 'Français', abbr: 'fr' },
    { code: 'es', label: 'Español', abbr: 'es' },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = langs.find(l => l.code === language);

  return (
    <div className={`min-h-[100dvh] flex flex-col bg-background text-foreground dir-${dir}`}>
      <header className="sticky top-0 z-40 w-full border-b-2 border-border bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl shadow-sm rotate-3 hover:rotate-6 transition-transform">
              عُ
            </div>
            <span className="font-bold text-lg sm:text-xl text-primary font-arabic">
              {t('app_name')}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative" ref={dropdownRef}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLangOpen(prev => !prev)}
                className="gap-2 font-bold text-muted-foreground hover:text-primary h-11 px-3 sm:px-4"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">
                  <span className="inline-flex items-center justify-center bg-muted rounded px-1 text-xs font-mono font-bold mr-1">{currentLang?.abbr}</span>
                  {currentLang?.label}
                </span>
                <span className="sm:hidden inline-flex items-center justify-center bg-muted rounded px-1 text-xs font-mono font-bold">{currentLang?.abbr}</span>
              </Button>

              {langOpen && (
                <div className={`absolute top-full mt-1 ${dir === 'rtl' ? 'left-0' : 'right-0'} z-50 bg-white border border-border rounded-xl shadow-lg py-1 min-w-[180px] max-w-[calc(100vw-1rem)]`}>
                  {langs.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLanguage(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-muted transition-colors ${l.code === language ? 'font-bold text-primary bg-primary/5' : 'text-foreground'}`}
                    >
                      <span className="inline-flex items-center justify-center bg-muted rounded px-1.5 text-xs font-mono font-bold w-8">{l.abbr}</span>
                      <span>{l.label}</span>
                      {l.code === language && <span className="ml-auto text-primary">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-border p-2 sm:hidden pb-safe">
        {/* Mobile bottom nav is built into App.tsx or inside Layout via Links */}
      </nav>
    </div>
  );
}
