import { useListGrades } from '@workspace/api-client-react';
import { useI18n } from '@/i18n/context';
import { getLocalizedText } from '@/lib/localize';
import { getProgress } from '@/lib/progress';
import { getCurriculum } from '@/lib/curriculum';
import { Link, useLocation } from 'wouter';
import { Trophy, Star, Target, Flame, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AdBanner } from '@/components/ad-banner';

export default function Home() {
  const { t, language } = useI18n();
  const [, navigate] = useLocation();
  const { data: allGrades, isLoading: gradesLoading } = useListGrades();
  const progress = getProgress();
  const curriculum = getCurriculum();

  // Filter grades to only show the selected curriculum
  const grades = allGrades?.filter(g => g.id.startsWith(`${curriculum}-`));

  if (gradesLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin text-primary w-12 h-12">
          <Star className="w-12 h-12 fill-current" />
        </div>
      </div>
    );
  }

  const curriculumFlag =
    curriculum === 'malaysia' ? '🇲🇾' :
    curriculum === 'uae' ? '🇦🇪' : '🇮🇩';

  return (
    <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12 pb-20 sm:pb-0">
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <Card className="bg-primary text-primary-foreground border-primary-border border-b-4 hover:-translate-y-1 transition-transform">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-white/20 p-2.5 sm:p-3 rounded-2xl">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
            </div>
            <div>
              <p className="text-sm font-bold opacity-80">{t('xp')}</p>
              <p className="text-xl sm:text-2xl font-black">{progress.xp}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-secondary text-secondary-foreground border-secondary-border border-b-4 hover:-translate-y-1 transition-transform">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-white/20 p-2.5 sm:p-3 rounded-2xl">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
            </div>
            <div>
              <p className="text-sm font-bold opacity-80">{t('streak')}</p>
              <p className="text-xl sm:text-2xl font-black">{progress.streak}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-b-4 hover:-translate-y-1 transition-transform">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-primary/10 p-2.5 sm:p-3 rounded-2xl text-primary">
              <Target className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground">{t('completed')}</p>
              <p className="text-xl sm:text-2xl font-black text-foreground">{progress.completedLessons.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-b-4 hover:-translate-y-1 transition-transform">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-accent/20 p-2.5 sm:p-3 rounded-2xl text-accent-foreground">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground">{t('badges')}</p>
              <p className="text-xl sm:text-2xl font-black text-foreground">{progress.badges.length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ad slot — below stats */}
      <AdBanner slot="HOME_TOP" size="auto" />

      {/* Curriculum Badge — flag only, no text words */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate('/select-curriculum')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors text-sm font-bold text-primary cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span className="text-xl">{curriculumFlag}</span>
          <span className="text-muted-foreground font-normal">· {t('switch_curriculum')}</span>
        </button>
      </div>

      {/* Grades Path */}
      <div className="relative">
        <h2 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8 text-center">{t('start_learning')}</h2>
        
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-1/2 before:-translate-x-1/2 before:md:ml-12 before:md:translate-x-0 before:h-full before:w-4 before:bg-border before:rounded-full">
          {grades?.map((grade, index) => {
            const isRtl = language === 'ar';
            const alignClass = index % 2 === 0 ? (isRtl ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left') : (isRtl ? 'md:pl-24 md:text-left' : 'md:pr-24 md:text-right');
            const flexRow = index % 2 === 0 ? 'flex-row' : 'flex-row-reverse md:flex-row';

            return (
              <div key={grade.id}>
              {index > 0 && index % 3 === 0 && <AdBanner slot="HOME_INLINE" size="auto" className="my-4" />}
              <div className={`relative flex items-center justify-center md:justify-start ${flexRow} gap-6 md:gap-0`}>
                <div className={`absolute left-1/2 -translate-x-1/2 md:left-12 z-10 w-16 h-16 rounded-full border-4 border-white shadow-md flex items-center justify-center text-3xl`} style={{ backgroundColor: grade.color }}>
                  {grade.icon === 'letters' ? '🔤' : grade.icon === 'family' ? '👨‍👩‍👧‍👦' : grade.icon === 'kitchen' ? '🍽️' : '📚'}
                </div>
                
                <div className={`w-full max-w-full sm:max-w-sm mx-auto md:mx-0 ${alignClass} z-20`}>
                  <Link href={`/grade/${grade.id}`}>
                    <Card className="hover:scale-105 transition-transform cursor-pointer border-b-8 group" style={{ borderColor: grade.color }}>
                      <CardContent className="p-5 sm:p-6 text-center">
                        <h3 className="text-xl sm:text-2xl font-black mb-2 group-hover:text-primary transition-colors font-arabic">
                          {getLocalizedText(grade.title, language)}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground font-bold mb-4">
                          {getLocalizedText(grade.description, language)}
                        </p>
                        <div className="flex justify-between text-xs sm:text-sm font-bold text-muted-foreground bg-slate-50 p-3 rounded-xl">
                          <span>{grade.unitCount} {t('units') || 'Units'}</span>
                          <span>{grade.lessonCount} {t('lessons') || 'Lessons'}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
