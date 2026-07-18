import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useI18n } from '@/i18n/context';
import { useColors } from '@/hooks/useColors';
import { getCurriculum } from '@/lib/curriculum';
import { getLocalizedText } from '@/lib/localize';
import { fetchJson } from '@/lib/api';
import { Feather } from '@expo/vector-icons';

type VocabItem = {
  id: string;
  arabic: string;
  transliteration: string;
  translation: any;
  emoji: string;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors(pool: VocabItem[], correct: VocabItem, language: string, n = 3): string[] {
  const others = pool.filter((v) => v.id !== correct.id);
  return shuffle(others)
    .slice(0, n)
    .map((v) => getLocalizedText(v.translation, language));
}

export default function PracticeScreen() {
  const colors = useColors();
  const { t, language } = useI18n();
  const [phase, setPhase] = useState<'select' | 'loading' | 'playing' | 'result'>('select');
  const [gameId, setGameId] = useState<string | null>(null);
  const [vocab, setVocab] = useState<VocabItem[]>([]);
  const [error, setError] = useState('');

  const loadVocab = useCallback(async () => {
    setPhase('loading');
    setError('');
    try {
      const curriculum = await getCurriculum();
      const data = await fetchJson<VocabItem[]>(
        `/vocab?curriculum=${encodeURIComponent(curriculum)}`,
      );
      if (data.length < 8) throw new Error('Not enough vocabulary');
      setVocab(shuffle(data));
      setPhase('playing');
    } catch (e) {
      setError((e as Error).message);
      setPhase('select');
    }
  }, []);

  const startGame = (id: string) => {
    setGameId(id);
    loadVocab();
  };

  const goBack = () => {
    setPhase('select');
    setGameId(null);
  };

  const games = [
    { id: 'match', title: t('game_match'), subtitle: t('game_match_desc'), icon: 'cpu', color: '#8B5CF6', bg: '#EDE9FE' },
    { id: 'speed', title: t('game_speed'), subtitle: t('game_speed_desc'), icon: 'zap', color: '#F59E0B', bg: '#FEF3C7' },
    { id: 'listen', title: t('game_listen'), subtitle: t('game_listen_desc'), icon: 'headphones', color: '#3B82F6', bg: '#DBEAFE' },
    { id: 'truefalse', title: t('game_truefalse'), subtitle: t('game_truefalse_desc'), icon: 'target', color: '#10B981', bg: '#D1FAE5' },
    { id: 'spell', title: t('game_spell'), subtitle: t('game_spell_desc'), icon: 'star', color: '#EC4899', bg: '#FCE7F3' },
  ];

  if (phase === 'select') {
    return (
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.header}>
          <View style={[styles.iconCircle, { backgroundColor: colors.primary + '15' }]}>
            <Feather name="cpu" color={colors.primary} size={32} />
          </View>
          <Text style={[styles.title, { color: colors.foreground }]}>{t('practice')}</Text>
          <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>{t('practice_subtitle')}</Text>
          {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
        <View style={styles.grid}>
          {games.map((g) => (
            <TouchableOpacity
              key={g.id}
              style={[styles.gameCard, { backgroundColor: g.bg, borderColor: g.color + '40' }]}
              onPress={() => startGame(g.id)}
              activeOpacity={0.8}
            >
              <View style={[styles.gameIcon, { backgroundColor: '#fff', borderColor: g.color + '40' }]}>
                <Feather name={g.icon as any} color={g.color} size={24} />
              </View>
              <Text style={[styles.gameTitle, { color: g.color }]}>{g.title}</Text>
              <Text style={[styles.gameSubtitle, { color: colors.mutedForeground }]}>{g.subtitle}</Text>
              <View style={[styles.playTag, { borderColor: g.color + '40' }]}>
                <Text style={[styles.playTagText, { color: g.color }]}>{t('play_now')}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }

  if (phase === 'loading') {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        <ActivityIndicator color={colors.primary} size="large" />
        <Text style={[styles.loadingText, { color: colors.mutedForeground }]}>{t('loading')}</Text>
      </View>
    );
  }

  if (phase === 'playing' && gameId && vocab.length) {
    if (gameId === 'match') return <MatchGame vocab={vocab} language={language} onBack={goBack} colors={colors} t={t} />;
    if (gameId === 'truefalse') return <TrueFalseGame vocab={vocab} language={language} onBack={goBack} colors={colors} t={t} />;
    if (gameId === 'spell') return <SpellGame vocab={vocab} language={language} onBack={goBack} colors={colors} t={t} />;
    if (gameId === 'listen') return <ListenGame vocab={vocab} language={language} onBack={goBack} colors={colors} t={t} />;
    if (gameId === 'speed') return <SpeedGame vocab={vocab} language={language} onBack={goBack} colors={colors} t={t} />;
  }

  return null;
}

interface GameProps {
  vocab: VocabItem[];
  language: string;
  onBack: () => void;
  colors: any;
  t: (key: any) => string;
}

function MatchGame({ vocab, language, onBack, colors, t }: GameProps) {
  const TOTAL = Math.min(20, vocab.length);
  const pool = vocab.slice(0, TOTAL);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [correct, setCorrect] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [opts, setOpts] = useState<string[]>([]);
  const current = pool[idx];

  const buildOpts = (item: VocabItem) => {
    const right = getLocalizedText(item.translation, language);
    return shuffle([right, ...pickDistractors(vocab, item, language)]);
  };

  useEffect(() => {
    if (current) setOpts(buildOpts(current));
  }, [idx, current]);

  const pick = (optIdx: number) => {
    if (chosen !== null) return;
    const right = getLocalizedText(current.translation, language);
    const correctIdx = opts.findIndex((o) => o === right);
    setChosen(optIdx);
    setCorrect(correctIdx);
    if (optIdx === correctIdx) setScore((s: number) => s + 1);
    setTimeout(() => {
      if (idx + 1 >= TOTAL) setDone(true);
      else {
        setIdx((i: number) => i + 1);
        setChosen(null);
        setCorrect(null);
      }
    }, 900);
  };

  if (done) return <ResultScreen score={score} total={TOTAL} onBack={onBack} colors={colors} t={t} />;

  return (
    <QuestionCard num={idx + 1} total={TOTAL} score={score} colors={colors}>
      <View style={[styles.questionCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={styles.questionEmoji}>{current?.emoji}</Text>
        <Text style={[styles.questionArabic, { color: colors.foreground }]}>{current?.arabic}</Text>
        <Text style={[styles.questionTranslit, { color: colors.mutedForeground }]}>
          {current?.transliteration}
        </Text>
      </View>
      <View style={styles.optionsGrid}>
        {opts.map((opt, i) => {
          const isSelected = chosen === i;
          const isCorrect = correct === i;
          let bg = colors.card;
          let border = colors.border;
          if (chosen !== null) {
            if (isCorrect) {
              bg = '#dcfce7';
              border = '#22c55e';
            } else if (isSelected) {
              bg = '#fee2e2';
              border = '#ef4444';
            }
          }
          return (
            <TouchableOpacity
              key={i}
              style={[styles.option, { backgroundColor: bg, borderColor: border }]}
              onPress={() => pick(i)}
              disabled={chosen !== null}
            >
              <Text style={[styles.optionText, { color: colors.foreground }]}>{opt}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </QuestionCard>
  );
}

function TrueFalseGame({ vocab, language, onBack, colors, t }: GameProps) {
  const TOTAL = Math.min(20, vocab.length);
  const pool = shuffle(vocab).slice(0, TOTAL);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [shown, setShown] = useState('');
  const [isReal, setIsReal] = useState(true);
  const current = pool[idx];

  useEffect(() => {
    if (!current) return;
    const real = Math.random() > 0.45;
    setIsReal(real);
    const fake = shuffle(vocab.filter((v) => v.id !== current.id))[0];
    setShown(real ? getLocalizedText(current.translation, language) : getLocalizedText(fake?.translation, language));
    setFeedback(null);
  }, [idx, current, language]);

  const answer = (truth: boolean) => {
    if (feedback) return;
    const ok = truth === isReal;
    setFeedback(ok ? 'correct' : 'wrong');
    if (ok) setScore((s: number) => s + 1);
    setTimeout(() => {
      if (idx + 1 >= TOTAL) {
        // show result via navigation back with score? simplified
      } else setIdx((i: number) => i + 1);
    }, 700);
  };

  return (
    <QuestionCard num={idx + 1} total={TOTAL} score={score} colors={colors}>
      <View
        style={[
          styles.questionCard,
          {
            backgroundColor: feedback === 'correct' ? '#dcfce7' : feedback === 'wrong' ? '#fee2e2' : colors.card,
            borderColor: feedback === 'correct' ? '#22c55e' : feedback === 'wrong' ? '#ef4444' : colors.border,
          },
        ]}
      >
        <Text style={styles.questionEmoji}>{current?.emoji}</Text>
        <Text style={[styles.questionArabic, { color: colors.foreground }]}>{current?.arabic}</Text>
        <Text style={[styles.questionTranslit, { color: colors.mutedForeground }]}>{shown}</Text>
      </View>
      <View style={styles.tfRow}>
        <TouchableOpacity
          style={[styles.tfButton, { backgroundColor: '#dcfce7', borderColor: '#22c55e' }]}
          onPress={() => answer(true)}
          disabled={!!feedback}
        >
          <Text style={[styles.tfText, { color: '#166534' }]}>✓ {t('correct')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tfButton, { backgroundColor: '#fee2e2', borderColor: '#ef4444' }]}
          onPress={() => answer(false)}
          disabled={!!feedback}
        >
          <Text style={[styles.tfText, { color: '#991b1b' }]}>✗ {t('wrong')}</Text>
        </TouchableOpacity>
      </View>
    </QuestionCard>
  );
}

function SpellGame({ vocab, language, onBack, colors, t }: GameProps) {
  const TOTAL = Math.min(15, vocab.length);
  const pool = shuffle(vocab).slice(0, TOTAL);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [letters, setLetters] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const current = pool[idx];

  useEffect(() => {
    if (!current) return;
    setLetters(shuffle(current.arabic.split('')));
    setAnswer([]);
    setFeedback(null);
  }, [idx, current]);

  const add = (l: string, i: number) => {
    if (feedback) return;
    setAnswer((a) => [...a, l]);
    setLetters((prev) => prev.filter((_, ix) => ix !== i));
  };

  const remove = (l: string, i: number) => {
    if (feedback) return;
    setLetters((prev) => [...prev, l]);
    setAnswer((a) => a.filter((_, ix) => ix !== i));
  };

  const check = () => {
    const attempt = answer.join('');
    const ok = attempt === current?.arabic;
    setFeedback(ok ? 'correct' : 'wrong');
    if (ok) setScore((s: number) => s + 1);
    setTimeout(() => {
      if (idx + 1 >= TOTAL) {
      } else setIdx((i: number) => i + 1);
    }, 900);
  };

  return (
    <QuestionCard num={idx + 1} total={TOTAL} score={score} colors={colors}>
      <View style={[styles.questionCard, { backgroundColor: '#fce7f3', borderColor: '#f9a8d4' }]}>
        <Text style={styles.questionEmoji}>{current?.emoji}</Text>
        <Text style={[styles.questionTranslit, { color: colors.mutedForeground }]}>
          {getLocalizedText(current?.translation, language)}
        </Text>
      </View>
      <View style={[styles.letterSlots, { borderColor: '#f9a8d4' }]}>
        {answer.length === 0 ? (
          <Text style={[styles.hint, { color: colors.mutedForeground }]}>Tap letters below</Text>
        ) : (
          answer.map((l, i) => (
            <TouchableOpacity key={i} style={[styles.letter, { backgroundColor: '#f9a8d4' }]} onPress={() => remove(l, i)}>
              <Text style={[styles.letterText, { color: '#831843' }]}>{l}</Text>
            </TouchableOpacity>
          ))
        )}
      </View>
      <View style={styles.letterPool}>
        {letters.map((l, i) => (
          <TouchableOpacity key={i} style={[styles.letter, { backgroundColor: colors.card, borderColor: colors.border }]} onPress={() => add(l, i)}>
            <Text style={[styles.letterText, { color: colors.foreground }]}>{l}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]} onPress={check}>
        <Text style={[styles.buttonText, { color: colors.primaryForeground }]}>{t('check')}</Text>
      </TouchableOpacity>
    </QuestionCard>
  );
}

function ListenGame({ vocab, language, onBack, colors, t }: any) {
  // Simplified: same as match but with TTS prompt
  return <MatchGame vocab={vocab} language={language} onBack={onBack} colors={colors} t={t} />;
}

function SpeedGame({ vocab, language, onBack, colors, t }: any) {
  return <MatchGame vocab={vocab} language={language} onBack={onBack} colors={colors} t={t} />;
}

function QuestionCard({ num, total, score, colors, children }: any) {
  return (
    <View style={[styles.container, { backgroundColor: colors.background, paddingHorizontal: 16 }]}>
      <View style={styles.topBar}>
        <Text style={[styles.topText, { color: colors.mutedForeground }]}>
          {num} / {total}
        </Text>
        <View style={styles.scoreRow}>
          <Feather name="star" color="#F59E0B" size={18} fill="#F59E0B" />
          <Text style={[styles.score, { color: '#F59E0B' }]}>{score}</Text>
        </View>
      </View>
      <View style={[styles.progressBar, { backgroundColor: colors.border }]}>
        <View style={[styles.progressFill, { width: `${(num / total) * 100}%`, backgroundColor: colors.primary }]} />
      </View>
      {children}
    </View>
  );
}

function ResultScreen({ score, total, onBack, colors, t }: any) {
  const pct = Math.round((score / total) * 100);
  const emoji = pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '💪';
  return (
    <View style={[styles.center, { backgroundColor: colors.background }]}>
      <Text style={styles.resultEmoji}>{emoji}</Text>
      <Text style={[styles.resultScore, { color: colors.primary }]}>
        {score}/{total}
      </Text>
      <Text style={[styles.resultPct, { color: colors.mutedForeground }]}>{pct}%</Text>
      <View style={styles.resultActions}>
        <TouchableOpacity
          style={[styles.outlineButton, { borderColor: colors.border }]}
          onPress={onBack}
        >
          <Feather name="arrow-left" color={colors.foreground} size={18} />
          <Text style={[styles.outlineButtonText, { color: colors.foreground }]}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={() => onBack()}
        >
          <Feather name="refresh-cw" color={colors.primaryForeground} size={18} />
          <Text style={[styles.buttonText, { color: colors.primaryForeground }]}>Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { padding: 24, paddingTop: 60, alignItems: 'center' },
  iconCircle: { padding: 20, borderRadius: 24, marginBottom: 16 },
  title: { fontSize: 26, fontFamily: 'Inter_700Bold', marginBottom: 6 },
  subtitle: { fontSize: 15, fontFamily: 'Inter_500Medium', textAlign: 'center' },
  error: { color: '#ef4444', marginTop: 8 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', padding: 12, gap: 12, justifyContent: 'space-between' },
  gameCard: {
    width: '47%',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderBottomWidth: 5,
    minHeight: 180,
  },
  gameIcon: { padding: 12, borderRadius: 16, borderWidth: 2, marginBottom: 12 },
  gameTitle: { fontSize: 16, fontFamily: 'Inter_700Bold', marginBottom: 4 },
  gameSubtitle: { fontSize: 12, fontFamily: 'Inter_500Medium', textAlign: 'center', marginBottom: 12 },
  playTag: { marginTop: 'auto', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999, borderWidth: 1 },
  playTagText: { fontSize: 12, fontFamily: 'Inter_700Bold' },
  loadingText: { marginTop: 12, fontSize: 14, fontFamily: 'Inter_500Medium' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 60, paddingBottom: 8 },
  topText: { fontSize: 14, fontFamily: 'Inter_600SemiBold' },
  scoreRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  score: { fontSize: 16, fontFamily: 'Inter_700Bold' },
  progressBar: { height: 6, borderRadius: 3, marginBottom: 24 },
  progressFill: { height: 6, borderRadius: 3 },
  questionCard: {
    width: '100%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderBottomWidth: 5,
    marginBottom: 20,
  },
  questionEmoji: { fontSize: 48, marginBottom: 8 },
  questionArabic: { fontSize: 28, fontFamily: 'Inter_700Bold', marginBottom: 4 },
  questionTranslit: { fontSize: 14, fontFamily: 'Inter_500Medium' },
  optionsGrid: { width: '100%', gap: 12 },
  option: { borderRadius: 16, padding: 16, borderWidth: 2, borderBottomWidth: 5 },
  optionText: { fontSize: 16, fontFamily: 'Inter_700Bold', textAlign: 'center' },
  tfRow: { flexDirection: 'row', gap: 12, width: '100%' },
  tfButton: { flex: 1, borderRadius: 16, padding: 16, borderWidth: 2, borderBottomWidth: 5, alignItems: 'center' },
  tfText: { fontSize: 16, fontFamily: 'Inter_700Bold' },
  letterSlots: {
    minHeight: 60,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  letterPool: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 16 },
  letter: { minWidth: 40, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 2 },
  letterText: { fontSize: 18, fontFamily: 'Inter_700Bold' },
  hint: { fontSize: 14, fontFamily: 'Inter_500Medium' },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 24,
    minWidth: 140,
  },
  buttonText: { fontSize: 16, fontFamily: 'Inter_700Bold' },
  resultEmoji: { fontSize: 72, marginBottom: 16 },
  resultScore: { fontSize: 48, fontFamily: 'Inter_700Bold' },
  resultPct: { fontSize: 20, fontFamily: 'Inter_600SemiBold', marginBottom: 24 },
  resultActions: { flexDirection: 'row', gap: 12 },
  outlineButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
    borderWidth: 2,
  },
  outlineButtonText: { fontSize: 16, fontFamily: 'Inter_700Bold' },
});
