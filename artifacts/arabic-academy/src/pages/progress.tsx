import { useI18n } from '@/i18n/context';
import { getProgress } from '@/lib/progress';
import { Trophy, Star, Flame, Medal, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProgressPage() {
  const { t } = useI18n();
  const progress = getProgress();

  const skillsData = [
    { id: 'listening', label: t('listening'), icon: '🎧', value: progress.skills.listening, color: 'bg-blue-500' },
    { id: 'speaking', label: t('speaking'), icon: '🗣️', value: progress.skills.speaking, color: 'bg-orange-500' },
    { id: 'reading', label: t('reading'), icon: '📖', value: progress.skills.reading, color: 'bg-green-500' },
    { id: 'writing', label: t('writing'), icon: '✍️', value: progress.skills.writing, color: 'bg-purple-500' },
  ];

  const maxSkill = Math.max(...skillsData.map(s => s.value), 10); // base for progress bar

  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 pb-20 sm:pb-0 animate-in fade-in">
      <div className="text-center space-y-4 mb-10 sm:mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-secondary text-secondary-foreground mb-4 shadow-xl border-b-4 border-secondary-border">
          <Trophy className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-foreground">{t('your_progress')}</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <Card className="bg-primary text-primary-foreground border-primary-border border-b-4">
          <CardContent className="p-6 text-center space-y-2">
            <Star className="w-8 h-8 sm:w-10 sm:h-10 mx-auto fill-current opacity-80" />
            <p className="text-3xl sm:text-4xl font-black">{progress.xp}</p>
            <p className="text-sm font-bold opacity-80 uppercase tracking-widest">{t('xp')}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-secondary text-secondary-foreground border-secondary-border border-b-4">
          <CardContent className="p-6 text-center space-y-2">
            <Flame className="w-8 h-8 sm:w-10 sm:h-10 mx-auto fill-current opacity-80" />
            <p className="text-3xl sm:text-4xl font-black">{progress.streak}</p>
            <p className="text-sm font-bold opacity-80 uppercase tracking-widest">{t('streak')}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-accent text-accent-foreground border-accent-border border-b-4">
          <CardContent className="p-6 text-center space-y-2">
            <Target className="w-8 h-8 sm:w-10 sm:h-10 mx-auto opacity-80" />
            <p className="text-3xl sm:text-4xl font-black">{progress.completedLessons.length}</p>
            <p className="text-sm font-bold opacity-80 uppercase tracking-widest">{t('completed')}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card text-foreground border-b-4">
          <CardContent className="p-6 text-center space-y-2">
            <Medal className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-primary" />
            <p className="text-3xl sm:text-4xl font-black">{progress.badges.length}</p>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{t('badges')}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-12">
        <Card className="border-2 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🎯</span> {t('skills')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {skillsData.map(sk => (
              <div key={sk.id} className="space-y-2">
                <div className="flex justify-between font-bold">
                  <span className="flex items-center gap-2 text-muted-foreground">{sk.icon} {sk.label}</span>
                  <span>{sk.value}</span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden">
                  <div className={`h-full ${sk.color} transition-all duration-1000`} style={{ width: `${Math.min(100, (sk.value / maxSkill) * 100)}%` }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-2 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🏅</span> {t('achievements')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {progress.badges.length === 0 ? (
              <div className="text-center p-8 border-2 border-dashed border-border rounded-2xl text-muted-foreground font-bold">
                {t('keep_playing')}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {progress.badges.map((b, i) => (
                  <div key={i} className="aspect-square bg-primary/10 rounded-2xl flex flex-col items-center justify-center p-2 text-center border-2 border-primary/20">
                    <Medal className="w-10 h-10 text-primary mb-2" />
                    <span className="text-xs font-bold text-primary">{b}</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
