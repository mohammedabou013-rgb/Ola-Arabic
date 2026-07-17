import { useI18n } from '@/i18n/context';
import { Gamepad2, Brain, Zap, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function PracticePage() {
  const { t } = useI18n();
  
  const games = [
    { id: 'match', title: t('game_match'), icon: Brain, color: 'bg-purple-100 text-purple-700 border-purple-300' },
    { id: 'speed', title: t('game_speed'), icon: Zap, color: 'bg-yellow-100 text-yellow-700 border-yellow-300' },
    { id: 'listen', title: t('game_listen'), icon: Target, color: 'bg-blue-100 text-blue-700 border-blue-300' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20 sm:pb-0 animate-in fade-in">
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 text-secondary mb-4 shadow-sm">
          <Gamepad2 className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-black text-foreground">{t('practice')}</h1>
        <p className="text-xl font-bold text-muted-foreground">{t('practice_subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <Card key={game.id} className="cursor-pointer border-b-8 hover:-translate-y-2 transition-transform hover:shadow-lg group">
            <CardContent className="p-8 text-center flex flex-col items-center space-y-4">
              <div className={`p-4 rounded-3xl border-4 ${game.color} transition-transform group-hover:scale-110`}>
                <game.icon className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-black">{game.title}</h2>
              <button className="bg-primary text-primary-foreground font-bold py-2 px-6 rounded-full w-full opacity-0 group-hover:opacity-100 transition-opacity">
                {t('play_now')}
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
