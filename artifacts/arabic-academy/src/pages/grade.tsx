import { useRoute, Link } from 'wouter';
import { useGetGrade, getGetGradeQueryKey } from '@workspace/api-client-react';
import { useI18n } from '@/i18n/context';
import { getLocalizedText } from '@/lib/localize';
import { getProgress } from '@/lib/progress';
import { ChevronLeft, ChevronRight, Lock, Star, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SkillBadge } from '@/components/skill-badge';
import { AdBanner } from '@/components/ad-banner';

export default function GradePage() {
  const [, params] = useRoute('/grade/:gradeId');
  const gradeId = params?.gradeId || '';
  
  const { data: grade, isLoading } = useGetGrade(gradeId, {
    query: { enabled: !!gradeId, queryKey: getGetGradeQueryKey(gradeId) }
  });
  
  const { t, language } = useI18n();
  const progress = getProgress();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin text-primary w-12 h-12">
          <Star className="w-12 h-12 fill-current" />
        </div>
      </div>
    );
  }

  if (!grade) {
    return <div className="text-center p-10 font-bold">{t('error')}</div>;
  }

  const isRtl = language === 'ar';
  const BackIcon = isRtl ? ChevronRight : ChevronLeft;

  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 pb-20 sm:pb-0">
      <Link href="/">
        <div className="inline-flex items-center gap-2 text-primary font-bold hover:bg-primary/10 px-4 py-2 rounded-xl cursor-pointer transition-colors">
          <BackIcon className="w-5 h-5" />
          {t('home')}
        </div>
      </Link>

      <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-arabic" style={{ color: grade.color }}>
          {getLocalizedText(grade.title, language)}
        </h1>
        <p className="text-base sm:text-xl font-bold text-muted-foreground">
          {getLocalizedText(grade.description, language)}
        </p>
      </div>

      <AdBanner slot="GRADE_TOP" size="auto" className="mb-4" />

      <div className="space-y-12">
        {grade.units?.map((unit, uIdx) => (
          <div key={unit.id} className="space-y-6">
            {uIdx > 0 && uIdx % 2 === 0 && <AdBanner slot="GRADE_TOP" size="auto" className="mb-2" />}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-black text-lg sm:text-xl text-white shadow-sm" style={{ backgroundColor: grade.color }}>
                {uIdx + 1}
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-arabic">
                {getLocalizedText(unit.title, language)}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 sm:pl-4 md:pl-16 rtl:pl-0 rtl:sm:pr-4 rtl:md:pr-16">
              {unit.lessons?.map((lesson, lIdx) => {
                const isCompleted = progress.completedLessons.includes(lesson.id);
                const stars = progress.stars[lesson.id] || 0;
                
                // Allow first lesson of unit 1, or any completed lesson, or lesson right after a completed one.
                // Simple logic for sandbox: everything is unlocked.
                const isLocked = false; 

                return (
                  <Link key={lesson.id} href={`/lesson/${lesson.id}`}>
                    <Card className={`group cursor-pointer border-b-4 hover:-translate-y-1 transition-all ${isLocked ? 'opacity-50 grayscale' : 'hover:border-primary'} ${isCompleted ? 'bg-primary/5' : ''}`}>
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg sm:text-xl font-black group-hover:text-primary transition-colors font-arabic">
                            {getLocalizedText(lesson.title, language)}
                          </h3>
                          {isLocked ? (
                            <div className="bg-muted p-2 rounded-full">
                              <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                            </div>
                          ) : isCompleted ? (
                            <div className="flex gap-1">
                              {[1,2,3].map(s => (
                                <Star key={s} className={`w-4 h-4 sm:w-5 sm:h-5 ${s <= stars ? 'fill-secondary text-secondary' : 'fill-muted text-muted'}`} />
                              ))}
                            </div>
                          ) : (
                            <div className="bg-primary text-primary-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {lesson.skills.map(sk => (
                            <SkillBadge key={sk} skill={sk} />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
