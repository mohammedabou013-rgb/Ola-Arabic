import { useI18n, SupportedLanguage } from '@/i18n/context';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Layout({ children }: { children: React.ReactNode }) {
  const { language, setLanguage, t } = useI18n();
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const langs: { code: SupportedLanguage, label: string }[] = [
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'English' },
    { code: 'ms', label: 'Melayu' },
    { code: 'id', label: 'Indonesia' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' }
  ];

  const toggleLanguage = () => {
    const currentIndex = langs.findIndex(l => l.code === language);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLanguage(langs[nextIndex].code);
  };

  return (
    <div className={`min-h-[100dvh] flex flex-col bg-background text-foreground dir-${dir}`}>
      <header className="sticky top-0 z-40 w-full border-b-2 border-border bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl shadow-sm rotate-3 hover:rotate-6 transition-transform">
              ع
            </div>
            <span className="font-bold text-xl text-primary font-arabic">
              أكاديمية العربية
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2 font-bold text-muted-foreground hover:text-primary">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{langs.find(l => l.code === language)?.label}</span>
            </Button>
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
