import { useState, useEffect, useCallback, useRef } from 'react';
import { useI18n } from '@/i18n/context';
import { getCurriculum } from '@/lib/curriculum';
import { getLocalizedText } from '@/lib/localize';
import type { LocalizedText } from '@workspace/api-client-react';
import { getProgress, saveProgress } from '@/lib/progress';

function addXP(amount: number) {
  const p = getProgress();
  p.xp += amount;
  saveProgress(p);
}
import { Brain, Zap, Target, ArrowLeft, Star, Timer, Ear, Trophy, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AdBanner } from '@/components/ad-banner';

/* ─── types ─────────────────────────────────── */
interface VocabItem {
  id: string;
  arabic: string;
  transliteration: string;
  translation: LocalizedText;
  emoji: string;
  gradeId: string;
  lessonId: string;
}

type GameId = 'match' | 'speed' | 'listen' | 'truefalse' | 'spell';
type Phase = 'select' | 'loading' | 'playing' | 'result';

/* ─── helpers ────────────────────────────────── */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors(pool: VocabItem[], correct: VocabItem, language: string, n = 3): string[] {
  const others = pool.filter(v => v.id !== correct.id);
  return shuffle(others).slice(0, n).map(v => getLocalizedText(v.translation , language));
}

function speak(text: string) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ar-SA';
    u.rate = 0.85;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }
}

/* ─── main component ─────────────────────────── */
export default function PracticePage() {
  const { t, language } = useI18n();
  const curriculum = getCurriculum();

  const [phase, setPhase] = useState<Phase>('select');
  const [gameId, setGameId] = useState<GameId | null>(null);
  const [vocab, setVocab] = useState<VocabItem[]>([]);
  const [loadError, setLoadError] = useState('');

  /* fetch vocab once */
  const loadVocab = useCallback(async () => {
    setPhase('loading');
    setLoadError('');
    try {
      const base = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '';
      const res = await fetch(`${base}api/vocab?curriculum=${curriculum}`);
      if (!res.ok) throw new Error('Failed to load vocab');
      const data: VocabItem[] = await res.json();
      if (data.length < 8) throw new Error('Not enough vocabulary');
      setVocab(shuffle(data));
      setPhase('playing');
    } catch (e) {
      setLoadError((e as Error).message);
      setPhase('select');
    }
  }, [curriculum]);

  const startGame = (id: GameId) => {
    setGameId(id);
    loadVocab();
  };

  const goBack = () => { setPhase('select'); setGameId(null); };

  /* ─── game definitions ─── */
  const games: { id: GameId; title: string; subtitle: string; icon: typeof Brain; color: string; bg: string; border: string }[] = [
    { id: 'match',     title: t('game_match'),     subtitle: t('game_match_desc')     || 'اختر الترجمة الصحيحة',  icon: Brain,  color: 'text-violet-700', bg: 'bg-violet-50',  border: 'border-violet-300' },
    { id: 'speed',     title: t('game_speed'),     subtitle: t('game_speed_desc')     || '60 ثانية — أجب بسرعة', icon: Zap,    color: 'text-amber-600',  bg: 'bg-amber-50',   border: 'border-amber-300' },
    { id: 'listen',    title: t('game_listen'),    subtitle: t('game_listen_desc')    || 'استمع واختر المعنى',    icon: Ear,    color: 'text-sky-700',    bg: 'bg-sky-50',     border: 'border-sky-300' },
    { id: 'truefalse', title: t('game_truefalse') || 'صح أم خطأ؟', subtitle: t('game_truefalse_desc') || 'الكلمة وترجمتها — صح أم خطأ؟', icon: Target, color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-300' },
    { id: 'spell',     title: t('game_spell')     || 'تهجئة الكلمة', subtitle: t('game_spell_desc') || 'اكتب حروف الكلمة بالترتيب', icon: Star, color: 'text-rose-700', bg: 'bg-rose-50', border: 'border-rose-300' },
  ];

  /* ─── selection screen ─── */
  if (phase === 'select') {
    return (
      <div className="max-w-3xl mx-auto pb-20 sm:pb-0 animate-in fade-in space-y-8 sm:space-y-10">
        <div className="text-center space-y-3 pt-4">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 text-primary mb-2 shadow">
            <Brain className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-center">{t('practice')}</h1>
          <p className="text-sm sm:text-lg text-muted-foreground font-bold">{t('practice_subtitle')}</p>
          {loadError && <p className="text-red-500 text-sm">{loadError}</p>}
        </div>
        <AdBanner slot="PRACTICE_TOP" size="auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {games.map(g => (
            <button key={g.id} onClick={() => startGame(g.id)}
              className={`group rounded-2xl border-2 ${g.border} ${g.bg} p-5 sm:p-6 flex flex-col items-center gap-3 hover:-translate-y-1 hover:shadow-lg transition-all text-center min-h-44`}>
              <div className={`p-3 sm:p-4 rounded-2xl border-2 ${g.border} bg-white/80 group-hover:scale-110 transition-transform`}>
                <g.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${g.color}`} />
              </div>
              <div>
                <h2 className={`text-lg sm:text-xl font-black ${g.color}`}>{g.title}</h2>
                <p className="text-sm text-muted-foreground font-medium mt-1">{g.subtitle}</p>
              </div>
              <span className={`mt-auto text-sm font-bold px-4 py-1.5 rounded-full border ${g.border} ${g.color} bg-white/60`}>
                {t('play_now') || 'العب الآن'}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (phase === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <div className="animate-spin text-primary w-14 h-14 mx-auto"><Star className="w-14 h-14 fill-current" /></div>
          <p className="font-bold text-muted-foreground">{t('loading') || 'جاري التحميل…'}</p>
        </div>
      </div>
    );
  }

  if (phase === 'playing' && gameId && vocab.length > 0) {
    const sharedProps = { vocab, language, onBack: goBack };
    if (gameId === 'match')     return <VocabMatchGame {...sharedProps} />;
    if (gameId === 'speed')     return <SpeedRunGame   {...sharedProps} />;
    if (gameId === 'listen')    return <ListenGame     {...sharedProps} />;
    if (gameId === 'truefalse') return <TrueFalseGame  {...sharedProps} />;
    if (gameId === 'spell')     return <SpellGame      {...sharedProps} />;
  }

  return null;
}

/* ═══════════════════════════════════════════════
   SHARED: Question card
════════════════════════════════════════════════ */
interface QuestionCardProps {
  questionNum: number;
  total: number;
  score: number;
  children: React.ReactNode;
  streakMsg?: string;
}
function QuestionCard({ questionNum, total, score, children, streakMsg }: QuestionCardProps) {
  return (
    <div className="max-w-xl mx-auto space-y-5 sm:space-y-6 pt-2 pb-20 sm:pb-0">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-muted-foreground">{questionNum} / {total}</span>
        <div className="flex items-center gap-2 text-amber-500 font-black text-base sm:text-lg">
          <Star className="w-5 h-5 fill-current" /> {score}
        </div>
      </div>
      <Progress value={(questionNum / total) * 100} className="h-2" />
      {streakMsg && <p className="text-center font-bold text-primary animate-bounce">{streakMsg}</p>}
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SHARED: Result screen
════════════════════════════════════════════════ */
interface ResultProps { score: number; total: number; onBack: () => void; onReplay: () => void; language: string }
function ResultScreen({ score, total, onBack, onReplay }: ResultProps) {
  const pct = Math.round((score / total) * 100);
  const emoji = pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '💪';
  return (
    <div className="max-w-sm mx-auto text-center space-y-6 sm:space-y-8 pt-10">
      <div className="text-6xl sm:text-8xl">{emoji}</div>
      <div>
        <p className="text-4xl sm:text-5xl font-black text-primary">{score}/{total}</p>
        <p className="text-base sm:text-xl font-bold text-muted-foreground mt-1">{pct}%</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button variant="outline" onClick={onBack} className="gap-2 font-bold">
          <ArrowLeft className="w-4 h-4" /> العودة
        </Button>
        <Button onClick={onReplay} className="gap-2 font-bold">
          <RefreshCw className="w-4 h-4" /> مرة أخرى
        </Button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   GAME 1 — Vocab Match (20 questions MCQ)
════════════════════════════════════════════════ */
function VocabMatchGame({ vocab, language, onBack }: { vocab: VocabItem[]; language: string; onBack: () => void }) {
  const TOTAL = Math.min(30, vocab.length);
  const pool = vocab.slice(0, TOTAL);

  const [idx, setIdx]         = useState(0);
  const [score, setScore]     = useState(0);
  const [chosen, setChosen]   = useState<number | null>(null);
  const [correct, setCorrect] = useState<number | null>(null);
  const [done, setDone]       = useState(false);
  const [opts, setOpts]       = useState<string[]>([]);

  const current = pool[idx];

  const buildOpts = useCallback((item: VocabItem) => {
    const right = getLocalizedText(item.translation , language);
    const wrongs = pickDistractors(vocab, item, language);
    return shuffle([right, ...wrongs]);
  }, [vocab, language]);

  useEffect(() => {
    if (current) setOpts(buildOpts(current));
  }, [idx, current, buildOpts]);

  const pick = (optIdx: number) => {
    if (chosen !== null) return;
    const right = getLocalizedText(current.translation , language);
    const isRight = opts[optIdx] === right;
    const correctIdx = opts.findIndex(o => o === right);
    setChosen(optIdx);
    setCorrect(correctIdx);
    if (isRight) { setScore(s => s + 1); addXP(5); }
    setTimeout(() => {
      if (idx + 1 >= TOTAL) { setDone(true); } else { setIdx(i => i + 1); setChosen(null); setCorrect(null); }
    }, 900);
  };

  if (done) return <ResultScreen score={score} total={TOTAL} onBack={onBack} onReplay={() => { setIdx(0); setScore(0); setChosen(null); setCorrect(null); setDone(false); }} language={language} />;

  return (
    <QuestionCard questionNum={idx + 1} total={TOTAL} score={score}>
      <Card className="border-2 border-primary/20">
        <CardContent className="p-6 sm:p-8 text-center space-y-2">
          <p className="text-5xl sm:text-6xl mb-2">{current?.emoji}</p>
          <p className="text-3xl sm:text-4xl font-black font-arabic text-primary break-words">{current?.arabic}</p>
          <p className="text-sm text-muted-foreground">{current?.transliteration}</p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {opts.map((opt, i) => {
          const isChosen  = chosen === i;
          const isCorrect = correct === i;
          let cls = 'border-2 rounded-xl p-4 font-bold text-base transition-all ';
          if (chosen !== null) {
            cls += isCorrect ? 'bg-green-50 border-green-500 text-green-700' : isChosen ? 'bg-red-50 border-red-400 text-red-600' : 'opacity-40 border-border';
          } else { cls += 'border-border hover:border-primary hover:bg-primary/5 cursor-pointer'; }
          return (
            <button key={i} className={cls} onClick={() => pick(i)}>
              {isCorrect && chosen !== null ? <CheckCircle className="inline w-4 h-4 mr-1" /> : isChosen && chosen !== null ? <XCircle className="inline w-4 h-4 mr-1" /> : null}
              {opt}
            </button>
          );
        })}
      </div>
    </QuestionCard>
  );
}

/* ═══════════════════════════════════════════════
   GAME 2 — Speed Run (60s timer)
════════════════════════════════════════════════ */
function SpeedRunGame({ vocab, language, onBack }: { vocab: VocabItem[]; language: string; onBack: () => void }) {
  const SECS = 60;
  const pool = shuffle(vocab);

  const [idx, setIdx]       = useState(0);
  const [score, setScore]   = useState(0);
  const [wrong, setWrong]   = useState(0);
  const [time, setTime]     = useState(SECS);
  const [chosen, setChosen] = useState<number | null>(null);
  const [done, setDone]     = useState(false);
  const [opts, setOpts]     = useState<string[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const buildOpts = useCallback((item: VocabItem) => {
    const right = getLocalizedText(item.translation , language);
    const wrongs = pickDistractors(vocab, item, language);
    return shuffle([right, ...wrongs]);
  }, [vocab, language]);

  useEffect(() => {
    const item = pool[idx % pool.length];
    if (item) setOpts(buildOpts(item));
  }, [idx]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(t => { if (t <= 1) { clearInterval(timerRef.current!); setDone(true); return 0; } return t - 1; });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, []);

  const current = pool[idx % pool.length];

  const pick = (optIdx: number) => {
    if (chosen !== null || done) return;
    const right = getLocalizedText(current.translation , language);
    const isRight = opts[optIdx] === right;
    setChosen(optIdx);
    if (isRight) { setScore(s => s + 1); addXP(3); } else { setWrong(w => w + 1); }
    setTimeout(() => { setIdx(i => i + 1); setChosen(null); }, 350);
  };

  const total = score + wrong;

  if (done) return (
    <div className="max-w-sm mx-auto text-center space-y-6 pt-10">
      <Timer className="w-16 h-16 text-amber-500 mx-auto" />
      <div>
        <p className="text-5xl font-black text-primary">{score}</p>
        <p className="font-bold text-muted-foreground">إجابات صحيحة من {total}</p>
      </div>
      <div className="flex gap-3 justify-center">
        <Button variant="outline" onClick={onBack} className="gap-2"><ArrowLeft className="w-4 h-4" /> العودة</Button>
        <Button onClick={() => { setIdx(0); setScore(0); setWrong(0); setTime(SECS); setChosen(null); setDone(false); }} className="gap-2"><RefreshCw className="w-4 h-4" /> مرة أخرى</Button>
      </div>
    </div>
  );

  const pct = (time / SECS) * 100;
  const timerColor = time > 20 ? 'bg-primary' : time > 10 ? 'bg-amber-500' : 'bg-red-500';

  return (
    <div className="max-w-xl mx-auto space-y-5 pt-2 pb-20 sm:pb-0">
      <div className="flex items-center justify-between">
        <div className={`flex items-center gap-2 font-black text-lg sm:text-xl ${time <= 10 ? 'text-red-500 animate-pulse' : 'text-foreground'}`}>
          <Timer className="w-5 h-5" /> {time}s
        </div>
        <div className="flex items-center gap-2 text-amber-500 font-black text-lg sm:text-xl">
          <Star className="w-5 h-5 fill-current" /> {score}
        </div>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <div className={`h-full ${timerColor} transition-all duration-1000`} style={{ width: `${pct}%` }} />
      </div>
      <Card className="border-2 border-primary/20">
        <CardContent className="p-5 sm:p-6 text-center space-y-2">
          <p className="text-4xl sm:text-5xl">{current?.emoji}</p>
          <p className="text-3xl sm:text-4xl font-black font-arabic text-primary break-words">{current?.arabic}</p>
          <p className="text-xs text-muted-foreground">{current?.transliteration}</p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {opts.map((opt, i) => {
          const isChosen = chosen === i;
          const right = getLocalizedText(current.translation , language);
          let cls = 'border-2 rounded-xl p-3 font-bold text-sm transition-all ';
          if (chosen !== null) {
            const wasRight = opts[chosen] === right;
            cls += isChosen ? (wasRight ? 'bg-green-50 border-green-500 text-green-700' : 'bg-red-50 border-red-400 text-red-600') : 'opacity-30 border-border';
          } else { cls += 'border-border hover:border-primary hover:bg-primary/5 cursor-pointer'; }
          return <button key={i} className={cls} onClick={() => pick(i)}>{opt}</button>;
        })}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   GAME 3 — Listen & Pick (TTS-powered)
════════════════════════════════════════════════ */
function ListenGame({ vocab, language, onBack }: { vocab: VocabItem[]; language: string; onBack: () => void }) {
  const TOTAL = Math.min(25, vocab.length);
  const pool = vocab.slice(0, TOTAL);

  const [idx, setIdx]         = useState(0);
  const [score, setScore]     = useState(0);
  const [chosen, setChosen]   = useState<number | null>(null);
  const [correct, setCorrect] = useState<number | null>(null);
  const [done, setDone]       = useState(false);
  const [opts, setOpts]       = useState<string[]>([]);
  const [playing, setPlaying] = useState(false);

  const current = pool[idx];

  const buildOpts = useCallback((item: VocabItem) => {
    const right = getLocalizedText(item.translation , language);
    const wrongs = pickDistractors(vocab, item, language);
    return shuffle([right, ...wrongs]);
  }, [vocab, language]);

  useEffect(() => {
    if (current) { setOpts(buildOpts(current)); setTimeout(() => playWord(current.arabic), 400); }
  }, [idx, current, buildOpts]);

  const playWord = (word: string) => {
    setPlaying(true);
    speak(word);
    setTimeout(() => setPlaying(false), 1500);
  };

  const pick = (optIdx: number) => {
    if (chosen !== null) return;
    const right = getLocalizedText(current.translation , language);
    const isRight = opts[optIdx] === right;
    const correctIdx = opts.findIndex(o => o === right);
    setChosen(optIdx); setCorrect(correctIdx);
    if (isRight) { setScore(s => s + 1); addXP(5); }
    setTimeout(() => {
      if (idx + 1 >= TOTAL) setDone(true);
      else { setIdx(i => i + 1); setChosen(null); setCorrect(null); }
    }, 900);
  };

  if (done) return <ResultScreen score={score} total={TOTAL} onBack={onBack} onReplay={() => { setIdx(0); setScore(0); setChosen(null); setCorrect(null); setDone(false); }} language={language} />;

  return (
    <QuestionCard questionNum={idx + 1} total={TOTAL} score={score}>
      <Card className="border-2 border-sky-200 bg-sky-50">
        <CardContent className="p-6 sm:p-8 text-center space-y-4">
          <button onClick={() => playWord(current?.arabic)} className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto border-4 transition-all ${playing ? 'border-sky-400 bg-sky-200 scale-110 animate-pulse' : 'border-sky-300 bg-sky-100 hover:bg-sky-200 hover:scale-105'}`}>
            <Ear className={`w-10 h-10 sm:w-12 sm:h-12 ${playing ? 'text-sky-600' : 'text-sky-500'}`} />
          </button>
          <p className="text-sky-600 font-bold text-sm">{playing ? '…' : 'اضغط للاستماع مجدداً'}</p>
          <p className="text-xs text-sky-400 font-mono">{current?.transliteration}</p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {opts.map((opt, i) => {
          const isChosen = chosen === i, isCorrect = correct === i;
          let cls = 'border-2 rounded-xl p-4 font-bold text-base transition-all ';
          if (chosen !== null) cls += isCorrect ? 'bg-green-50 border-green-500 text-green-700' : isChosen ? 'bg-red-50 border-red-400 text-red-600' : 'opacity-40 border-border';
          else cls += 'border-border hover:border-sky-400 hover:bg-sky-50 cursor-pointer';
          return <button key={i} className={cls} onClick={() => pick(i)}>{opt}</button>;
        })}
      </div>
    </QuestionCard>
  );
}

/* ═══════════════════════════════════════════════
   GAME 4 — True or False
════════════════════════════════════════════════ */
function TrueFalseGame({ vocab, language, onBack }: { vocab: VocabItem[]; language: string; onBack: () => void }) {
  const TOTAL = Math.min(30, vocab.length);
  const pool = shuffle(vocab).slice(0, TOTAL);

  const [idx, setIdx]       = useState(0);
  const [score, setScore]   = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [done, setDone]     = useState(false);
  const [shownTranslation, setShownTranslation] = useState('');
  const [isReal, setIsReal] = useState(true);

  const current = pool[idx];

  useEffect(() => {
    if (!current) return;
    const useReal = Math.random() > 0.45;
    setIsReal(useReal);
    if (useReal) {
      setShownTranslation(getLocalizedText(current.translation , language));
    } else {
      const other = shuffle(vocab.filter(v => v.id !== current.id))[0];
      setShownTranslation(other ? getLocalizedText(other.translation , language) : '???');
    }
    setFeedback(null);
  }, [idx, current, language, vocab]);

  const answer = (isTrue: boolean) => {
    if (feedback) return;
    const correct = isTrue === isReal;
    setFeedback(correct ? 'correct' : 'wrong');
    if (correct) { setScore(s => s + 1); addXP(4); }
    setTimeout(() => {
      if (idx + 1 >= TOTAL) setDone(true);
      else setIdx(i => i + 1);
    }, 700);
  };

  if (done) return <ResultScreen score={score} total={TOTAL} onBack={onBack} onReplay={() => { setIdx(0); setScore(0); setFeedback(null); setDone(false); }} language={language} />;

  return (
    <QuestionCard questionNum={idx + 1} total={TOTAL} score={score}>
      <Card className={`border-2 transition-all ${feedback === 'correct' ? 'border-green-400 bg-green-50' : feedback === 'wrong' ? 'border-red-400 bg-red-50' : 'border-primary/20'}`}>
        <CardContent className="p-6 sm:p-8 text-center space-y-4">
          <p className="text-4xl sm:text-5xl">{current?.emoji}</p>
          <p className="text-3xl sm:text-4xl font-black font-arabic text-primary break-words">{current?.arabic}</p>
          <div className="h-0.5 bg-border my-2" />
          <p className="text-lg sm:text-2xl font-bold text-foreground break-words">{shownTranslation}</p>
          {feedback && (
            <p className={`font-black text-lg ${feedback === 'correct' ? 'text-green-600' : 'text-red-500'}`}>
              {feedback === 'correct' ? '✓ صحيح!' : `✗ الإجابة: ${getLocalizedText(current?.translation , language)}`}
            </p>
          )}
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <button onClick={() => answer(true)} className="min-h-11 p-4 sm:p-5 rounded-2xl border-2 border-green-300 bg-green-50 hover:bg-green-100 text-green-700 font-black text-lg sm:text-xl transition-all hover:scale-105">✓ صح</button>
        <button onClick={() => answer(false)} className="min-h-11 p-4 sm:p-5 rounded-2xl border-2 border-red-300 bg-red-50 hover:bg-red-100 text-red-600 font-black text-lg sm:text-xl transition-all hover:scale-105">✗ خطأ</button>
      </div>
    </QuestionCard>
  );
}

/* ═══════════════════════════════════════════════
   GAME 5 — Spell the Word (arrange letters)
════════════════════════════════════════════════ */
function SpellGame({ vocab, language, onBack }: { vocab: VocabItem[]; language: string; onBack: () => void }) {
  const TOTAL = Math.min(20, vocab.length);
  const pool = shuffle(vocab).slice(0, TOTAL);

  const [idx, setIdx]         = useState(0);
  const [score, setScore]     = useState(0);
  const [userLetters, setUserLetters] = useState<string[]>([]);
  const [shuffled, setShuffled] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [done, setDone] = useState(false);

  const current = pool[idx];

  useEffect(() => {
    if (!current) return;
    const letters = current.arabic.split('');
    setShuffled(shuffle([...letters]));
    setUserLetters([]);
    setFeedback(null);
  }, [idx, current]);

  const addLetter = (letter: string, fromIdx: number) => {
    if (feedback) return;
    setUserLetters(prev => [...prev, letter]);
    setShuffled(prev => prev.filter((_, i) => i !== fromIdx));
  };

  const removeLetter = (letter: string, fromIdx: number) => {
    if (feedback) return;
    setShuffled(prev => [...prev, letter]);
    setUserLetters(prev => prev.filter((_, i) => i !== fromIdx));
  };

  const checkAnswer = () => {
    if (!current || userLetters.length !== current.arabic.length) return;
    const answer = userLetters.join('');
    const isRight = answer === current.arabic;
    setFeedback(isRight ? 'correct' : 'wrong');
    if (isRight) { setScore(s => s + 1); addXP(8); }
    setTimeout(() => {
      if (idx + 1 >= TOTAL) setDone(true);
      else setIdx(i => i + 1);
    }, 1000);
  };

  if (done) return <ResultScreen score={score} total={TOTAL} onBack={onBack} onReplay={() => { setIdx(0); setScore(0); setFeedback(null); setDone(false); }} language={language} />;

  const translation = current ? getLocalizedText(current.translation , language) : '';

  return (
    <QuestionCard questionNum={idx + 1} total={TOTAL} score={score}>
      <Card className="border-2 border-rose-200 bg-rose-50">
        <CardContent className="p-6 text-center space-y-2">
          <p className="text-4xl">{current?.emoji}</p>
          <p className="text-xl font-bold text-foreground">{translation}</p>
          <p className="text-xs text-muted-foreground">{current?.transliteration}</p>
        </CardContent>
      </Card>

      {/* user answer slots */}
      <div className="flex flex-wrap gap-2 justify-center min-h-[60px] border-2 rounded-xl p-3 border-dashed border-rose-300 bg-white">
        {userLetters.length === 0
          ? <span className="text-muted-foreground text-sm self-center">اضغط على الحروف أدناه</span>
          : userLetters.map((l, i) => (
            <button key={i} onClick={() => removeLetter(l, i)} className="w-10 h-10 rounded-lg bg-rose-100 border-2 border-rose-400 font-bold text-xl font-arabic text-rose-700 hover:bg-rose-200 transition-all">{l}</button>
          ))}
      </div>

      {/* shuffled letters */}
      <div className="flex flex-wrap gap-2 justify-center">
        {shuffled.map((l, i) => (
          <button key={i} onClick={() => addLetter(l, i)} className="w-10 h-10 rounded-lg bg-muted border-2 border-border font-bold text-xl font-arabic hover:bg-primary/10 hover:border-primary transition-all">{l}</button>
        ))}
      </div>

      {feedback ? (
        <p className={`text-center font-black text-lg ${feedback === 'correct' ? 'text-green-600' : 'text-red-500'}`}>
          {feedback === 'correct' ? '✓ ممتاز!' : `✗ الصحيح: ${current?.arabic}`}
        </p>
      ) : (
        <Button onClick={checkAnswer} disabled={userLetters.length !== current?.arabic.length} className="w-full font-black">
          تحقق ✓
        </Button>
      )}
    </QuestionCard>
  );
}
