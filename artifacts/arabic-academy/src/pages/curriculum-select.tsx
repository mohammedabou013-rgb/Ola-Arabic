import { useLocation } from 'wouter';
import { useI18n, SupportedLanguage } from '@/i18n/context';
import { setCurriculum, CurriculumId } from '@/lib/curriculum';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CurriculumSelectPage() {
  const [, navigate] = useLocation();
  const { language, setLanguage, t } = useI18n();
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const langs: { code: SupportedLanguage; label: string }[] = [
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'English' },
    { code: 'ms', label: 'Melayu' },
    { code: 'id', label: 'Indonesia' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
  ];

  const toggleLanguage = () => {
    const currentIndex = langs.findIndex((l) => l.code === language);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLanguage(langs[nextIndex].code);
  };

  const handleSelect = (id: CurriculumId) => {
    setCurriculum(id);
    navigate('/');
  };

  const curricula: {
    id: CurriculumId;
    flag: string;
    name: string;
    desc: string;
    grades: string;
    color: string;
    border: string;
    bg: string;
    shadow: string;
  }[] = [
    {
      id: 'malaysia',
      flag: '🇲🇾',
      name: t('curriculum_malaysia'),
      desc: t('curriculum_malaysia_desc'),
      grades: `${language === 'ar' ? 'ماليا' : 'Malaya'} · ${t('grade_count', { n: '6' })}`,
      color: '#7C3AED',
      border: '#7C3AED',
      bg: 'from-violet-50 to-violet-100',
      shadow: 'hover:shadow-violet-200',
    },
    {
      id: 'uae',
      flag: '🇦🇪',
      name: t('curriculum_uae'),
      desc: t('curriculum_uae_desc'),
      grades: `🇦🇪 ae · ${t('grade_count', { n: '8' })}`,
      color: '#F97316',
      border: '#F97316',
      bg: 'from-orange-50 to-orange-100',
      shadow: 'hover:shadow-orange-200',
    },
    {
      id: 'indonesia',
      flag: '🇮🇩',
      name: t('curriculum_indonesia'),
      desc: t('curriculum_indonesia_desc'),
      grades: `${language === 'ar' ? 'إندونيسيا' : 'Indonesia'} · ${t('grade_count', { n: '6' })}`,
      color: '#DC2626',
      border: '#DC2626',
      bg: 'from-red-50 to-red-100',
      shadow: 'hover:shadow-red-200',
    },
  ];

  return (
    <div
      dir={dir}
      className="min-h-[100dvh] bg-gradient-to-br from-violet-50 via-white to-orange-50 flex flex-col"
    >
      {/* Top language switcher */}
      <div className="flex justify-end p-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleLanguage}
          className="gap-2 font-bold text-muted-foreground hover:text-primary"
        >
          <Globe className="w-4 h-4" />
          <span>{langs.find((l) => l.code === language)?.label}</span>
        </Button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        {/* Logo + App name */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-3xl sm:text-4xl shadow-lg rotate-3 hover:rotate-6 transition-transform select-none">
            ع
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-primary font-arabic text-center">{t('app_name')}</h1>
          <p className="text-base sm:text-xl font-bold text-muted-foreground text-center">{t('choose_curriculum')}</p>
        </div>

        {/* Curriculum cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl">
          {curricula.map((c) => (
            <button
              key={c.id}
              onClick={() => handleSelect(c.id)}
              className={`group rounded-2xl border-2 bg-gradient-to-br ${c.bg} p-5 sm:p-8 flex flex-col items-center gap-4 text-center cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-xl ${c.shadow} focus:outline-none focus:ring-4 focus:ring-offset-2 w-full`}
              style={{
                borderColor: c.border,
                // @ts-ignore
                '--tw-ring-color': c.border,
              }}
            >
              <span className="text-5xl sm:text-6xl leading-none">{c.flag}</span>
              <div>
                <h2
                  className="text-lg sm:text-xl font-black mb-1"
                  style={{ color: c.color }}
                >
                  {c.name}
                </h2>
                <p className="text-sm font-semibold text-muted-foreground mb-3">{c.desc}</p>
                <span
                  className="inline-block px-4 py-2 rounded-full text-white text-sm font-bold"
                  style={{ backgroundColor: c.color }}
                >
                  {c.grades}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
