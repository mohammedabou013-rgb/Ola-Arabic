import { useGetOverview, useListGrades } from '@workspace/api-client-react';
import { useI18n } from '@/i18n/context';
import { getLocalizedText } from '@/lib/localize';
import { getProgress } from '@/lib/progress';
import { Link } from 'wouter';
import { Trophy, Star, Target, Flame } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function Home() {
  const { t, language } = useI18n();
  const { data: overview, isLoading: overviewLoading } = useGetOverview();
  const { data: grades, isLoading: gradesLoading } = useListGrades();
  const progress = getProgress();

  if (overviewLoading || gradesLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin text-primary w-12 h-12">
          <Star className="w-12 h-12 fill-current" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 sm:pb-0">
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-primary text-primary-foreground border-primary-border border-b-4 hover:-translate-y-1 transition-transform">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-2xl">
              <Star className="w-6 h-6 fill-white" />
            </div>
            <div>
              <p className="text-sm font-bold opacity-80">{t('xp')}</p>
              <p className="text-2xl font-black">{progress.xp}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-secondary text-secondary-foreground border-secondary-border border-b-4 hover:-translate-y-1 transition-transform">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-2xl">
              <Flame className="w-6 h-6 fill-white" />
            </div>
            <div>
              <p className="text-sm font-bold opacity-80">{t('streak')}</p>
              <p className="text-2xl font-black">{progress.streak}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-b-4 hover:-translate-y-1 transition-transform">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground">{t('completed')}</p>
              <p className="text-2xl font-black text-foreground">{progress.completedLessons.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-b-4 hover:-translate-y-1 transition-transform">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-accent/20 p-3 rounded-2xl text-accent-foreground">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-muted-foreground">{t('badges')}</p>
              <p className="text-2xl font-black text-foreground">{progress.badges.length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grades Path */}
      <div className="relative">
        <h2 className="text-3xl font-black mb-8 text-center">{t('start_learning')}</h2>
        
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-1/2 before:-translate-x-1/2 before:md:ml-12 before:md:translate-x-0 before:h-full before:w-4 before:bg-border before:rounded-full">
          {grades?.map((grade, index) => {
            // Check if available based on previous grade completion (simplified rule: if prev grade has <25% lessons done, maybe lock, but let's keep all open for now for sandbox)
            const isRtl = language === 'ar';
            const alignClass = index % 2 === 0 ? (isRtl ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left') : (isRtl ? 'md:pl-24 md:text-left' : 'md:pr-24 md:text-right');
            const flexRow = index % 2 === 0 ? 'flex-row' : 'flex-row-reverse md:flex-row';

            return (
              <div key={grade.id} className={`relative flex items-center justify-center md:justify-start ${flexRow} gap-6 md:gap-0`}>
                <div className={`absolute left-1/2 -translate-x-1/2 md:left-12 z-10 w-16 h-16 rounded-full border-4 border-white shadow-md flex items-center justify-center text-3xl`} style={{ backgroundColor: grade.color }}>
                  {/* We just use an emoji representing the icon for now since we can't load arbitrary image paths safely unless provided */}
                  {grade.icon === 'letters' ? '🔤' : grade.icon === 'family' ? '👨‍👩‍👧‍👦' : grade.icon === 'kitchen' ? '🍽️' : '📚'}
                </div>
                
                <div className={`w-full max-w-sm mx-auto md:mx-0 ${alignClass} z-20`}>
                  <Link href={`/grade/${grade.id}`}>
                    <Card className="hover:scale-105 transition-transform cursor-pointer border-b-8 group" style={{ borderColor: grade.color }}>
                      <CardContent className="p-6 text-center">
                        <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors font-arabic">
                          {getLocalizedText(grade.title, language)}
                        </h3>
                        <p className="text-muted-foreground font-bold mb-4">
                          {getLocalizedText(grade.description, language)}
                        </p>
                        <div className="flex justify-between text-sm font-bold text-muted-foreground bg-slate-50 p-3 rounded-xl">
                          <span>{grade.unitCount} Units</span>
                          <span>{grade.lessonCount} Lessons</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
