import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';

const LessonContainer = Platform.OS === 'web' ? View : KeyboardAvoidingView;
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useGetLesson, type Lesson } from '@workspace/api-client-react';
import { useI18n } from '@/i18n/context';
import { useColors } from '@/hooks/useColors';
import { getLocalizedText } from '@/lib/localize';
import { addLessonCompletion } from '@/lib/progress';
import { getCurriculum } from '@/lib/curriculum';
import { fetchJson } from '@/lib/api';
import { Feather } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

type Stage = 'intro' | 'vocab' | 'dialogue' | 'exercises' | 'summary';

function getEmojiCodePoints(emoji: string): string {
  return Array.from(emoji)
    .map((char) => char.codePointAt(0)?.toString(16))
    .filter(Boolean)
    .join('-');
}

function emojiToImageUrl(emoji: string): string {
  return `https://fonts.gstatic.com/s/e/notoemoji/latest/${getEmojiCodePoints(emoji)}/512.webp`;
}

function getExerciseImageUrl(exercise: any, vocabulary: any[]): string | null {
  if (exercise?.imageUrl) return exercise.imageUrl;
  const text = exercise?.arabicText || exercise?.answer || '';
  const item = vocabulary.find((v: any) => text && (text === v.arabic || text.includes(v.arabic)));
  if (item?.emoji) return emojiToImageUrl(item.emoji);
  if (vocabulary[0]?.emoji) return emojiToImageUrl(vocabulary[0].emoji);
  return null;
}

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const { t, language } = useI18n();
  const router = useRouter();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [stage, setStage] = useState<Stage>('intro');

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    fetchJson<Lesson>(`/api/lessons/${id}`)
      .then((l) => {
        if (!cancelled) setLesson(l);
      })
      .catch((err) => {
        console.error('lesson fetch failed', err);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => { cancelled = true; };
  }, [id]);
  const [subIndex, setSubIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);

  if (isLoading || !lesson) {
    return (
      <View style={[styles.center, { backgroundColor: colors.background }]}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  const speak = (text?: string) => {
    if (!text) return;
    Speech.stop();
    Speech.speak(text, { language: 'ar', rate: 0.85 });
  };

  const handleNext = () => {
    setFeedback(null);
    Speech.stop();
    if (stage === 'intro') {
      if (lesson.vocabulary?.length) setStage('vocab');
      else if (lesson.dialogue?.length) setStage('dialogue');
      else setStage('exercises');
      setSubIndex(0);
    } else if (stage === 'vocab') {
      if (subIndex < lesson.vocabulary.length - 1) setSubIndex((s) => s + 1);
      else {
        if (lesson.dialogue?.length) setStage('dialogue');
        else setStage('exercises');
        setSubIndex(0);
      }
    } else if (stage === 'dialogue') {
      if (subIndex < lesson.dialogue.length - 1) setSubIndex((s) => s + 1);
      else {
        setStage('exercises');
        setSubIndex(0);
      }
    } else if (stage === 'exercises') {
      if (subIndex < lesson.exercises.length - 1) setSubIndex((s) => s + 1);
      else finishLesson();
    }
  };

  const finishLesson = () => {
    const accuracy = lesson.exercises.length > 0 ? score / lesson.exercises.length : 1;
    let stars = 1;
    if (accuracy >= 0.8) stars = 3;
    else if (accuracy >= 0.5) stars = 2;
    getCurriculum().then((curriculum) => {
      addLessonCompletion(curriculum, id, stars, 50, lesson.skills);
    });
    setStage('summary');
  };

  const progress =
    stage === 'vocab'
      ? ((subIndex + 1) / lesson.vocabulary.length) * 33
      : stage === 'dialogue'
        ? 33 + ((subIndex + 1) / lesson.dialogue.length) * 33
        : stage === 'exercises'
          ? 66 + ((subIndex + 1) / lesson.exercises.length) * 34
          : 0;

  return (
    <LessonContainer
      {...(Platform.OS === 'web' ? {} : { behavior: Platform.OS === 'ios' ? 'padding' : 'height' })}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {stage !== 'intro' && stage !== 'summary' && (
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%`, backgroundColor: colors.primary }]} />
          <Text style={[styles.progressText, { color: colors.mutedForeground }]}>
            {stage === 'vocab' ? t('vocabulary') : stage === 'dialogue' ? t('dialogue') : t('exercises')}
          </Text>
        </View>
      )}

      {stage === 'intro' && (
        <View style={styles.center}>
          <View style={[styles.introBadge, { backgroundColor: colors.primary + '15' }]}>
            <Text style={[styles.introTitle, { color: colors.primary }]}>
              {getLocalizedText(lesson.title, language)}
            </Text>
          </View>
          <Text style={[styles.introText, { color: colors.mutedForeground }]}>
            {getLocalizedText(lesson.intro, language)}
          </Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={handleNext}
          >
            <Text style={[styles.buttonText, { color: colors.primaryForeground }]}>
              {t('start_learning')}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {stage === 'vocab' && (
        <VocabCard
          item={lesson.vocabulary[subIndex]}
          index={subIndex}
          total={lesson.vocabulary.length}
          language={language}
          colors={colors}
          t={t}
          onNext={handleNext}
          onSpeak={speak}
        />
      )}

      {stage === 'dialogue' && (
        <DialogueCard
          lines={lesson.dialogue}
          index={subIndex}
          language={language}
          colors={colors}
          t={t}
          onNext={handleNext}
          onSpeak={speak}
        />
      )}

      {stage === 'exercises' && (
        <ExerciseCard
          exercise={lesson.exercises[subIndex]}
          vocabulary={lesson.vocabulary}
          language={language}
          colors={colors}
          t={t}
          onCorrect={() => {
            setScore((s) => s + 1);
            setFeedback('correct');
            setTimeout(handleNext, 1200);
          }}
          onWrong={() => setFeedback('wrong')}
          feedback={feedback}
          onReset={() => setFeedback(null)}
          onSpeak={speak}
        />
      )}

      {stage === 'summary' && (
        <SummaryScreen
          score={score}
          total={lesson.exercises.length}
          colors={colors}
          t={t}
          onFinish={() => router.push(`/grade/${lesson.gradeId}`)}
        />
      )}
    </LessonContainer>
  );
}

function VocabCard({ item, index, total, language, colors, t, onNext, onSpeak }: any) {
  return (
    <View style={styles.center}>
      <Text style={[styles.step, { color: colors.mutedForeground }]}>
        {t('vocabulary')} {index + 1} / {total}
      </Text>
      <TouchableOpacity
        style={[styles.vocabCard, { backgroundColor: colors.card, borderColor: colors.border }]}
        onPress={() => onSpeak(item.arabic)}
        activeOpacity={0.8}
      >
        <Text style={styles.emoji}>{item.emoji}</Text>
        <Text style={[styles.arabic, { color: colors.foreground }]}>{item.arabic}</Text>
        <Text style={[styles.translit, { color: colors.mutedForeground }]}>{item.transliteration}</Text>
        <Text style={[styles.translation, { color: colors.foreground }]}>
          {getLocalizedText(item.translation, language)}
        </Text>
        <TouchableOpacity
          style={[styles.speakButton, { backgroundColor: colors.secondary }]}
          onPress={() => onSpeak(item.arabic)}
        >
          <Feather name="volume-2" color={colors.secondaryForeground} size={24} />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]} onPress={onNext}>
        <Text style={[styles.buttonText, { color: colors.primaryForeground }]}>{t('next')}</Text>
      </TouchableOpacity>
    </View>
  );
}

function DialogueCard({ lines, index, language, colors, t, onNext, onSpeak }: any) {
  const line = lines[index];
  useEffect(() => {
    if (line) onSpeak(line.arabic);
  }, [index, line]);

  return (
    <View style={[styles.center, { paddingHorizontal: 16 }]}>
      <Text style={[styles.step, { color: colors.mutedForeground }]}>
        {t('dialogue')} {index + 1} / {lines.length}
      </Text>
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ gap: 12 }}>
        {lines.slice(0, index + 1).map((l: any, i: number) => {
          const isCurrent = i === index;
          const isLeft = i % 2 === 0;
          return (
            <View
              key={i}
              style={[
                styles.bubble,
                isLeft ? { alignSelf: 'flex-start', backgroundColor: colors.card } : { alignSelf: 'flex-end', backgroundColor: colors.primary },
              ]}
            >
              <Text style={[styles.speaker, { color: isLeft ? colors.mutedForeground : colors.primaryForeground }]}>
                {l.speaker}
              </Text>
              <Text style={[styles.bubbleArabic, { color: isLeft ? colors.foreground : colors.primaryForeground }]}>
                {l.arabic}
              </Text>
              <Text style={[styles.bubbleTranslation, { color: isLeft ? colors.mutedForeground : colors.primaryForeground + 'cc' }]}>
                {getLocalizedText(l.translation, language)}
              </Text>
              {isCurrent && (
                <TouchableOpacity onPress={() => onSpeak(l.arabic)} style={{ marginTop: 8 }}>
                  <Feather name="volume-2" color={isLeft ? colors.primary : colors.primaryForeground} size={20} />
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary, marginTop: 20 }]} onPress={onNext}>
        <Text style={[styles.buttonText, { color: colors.primaryForeground }]}>{t('next')}</Text>
      </TouchableOpacity>
    </View>
  );
}

function ExerciseCard({ exercise, vocabulary, language, colors, t, onCorrect, onWrong, feedback, onReset, onSpeak }: any) {
  const [selected, setSelected] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [matchedA, setMatchedA] = useState<number[]>([]);
  const [selA, setSelA] = useState<number | null>(null);
  const [selB, setSelB] = useState<number | null>(null);
  const [arranged, setArranged] = useState<string[]>([]);
  const [pool, setPool] = useState<string[]>([]);
  const [shuffledB, setShuffledB] = useState<number[]>([]);

  useEffect(() => {
    setSelected(null);
    setInputValue('');
    setMatchedA([]);
    setSelA(null);
    setSelB(null);
    setArranged([]);
    if (exercise.type === 'arrange' && exercise.answer) {
      const words = exercise.answer.split(' ').filter(Boolean);
      setPool(shuffle([...words]));
    } else {
      setPool([]);
    }
    if (exercise.type === 'matching' && exercise.pairs?.length) {
      const indices = Array.from({ length: exercise.pairs.length }, (_, i) => i);
      setShuffledB(shuffle(indices));
    } else {
      setShuffledB([]);
    }
  }, [exercise]);

  useEffect(() => {
    if (selA !== null && selB !== null) {
      const correctB = shuffledB[selB];
      if (selA === correctB) {
        const next = [...matchedA, selA];
        setMatchedA(next);
        setSelA(null);
        setSelB(null);
        if (next.length === exercise.pairs.length) {
          setTimeout(onCorrect, 400);
        }
      } else {
        setTimeout(() => {
          setSelA(null);
          setSelB(null);
        }, 500);
      }
    }
  }, [selA, selB, shuffledB]);

  const normalize = (str: string) =>
    str
      .replace(/[\u064B-\u065F]/g, '')
      .replace(/[\u064A\u0649]/g, 'ي')
      .replace(/[\u0623\u0625\u0622]/g, 'ا')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();

  const shuffle = <T,>(array: T[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleArrange = () => {
    if (feedback || arranged.length === 0) return;
    const input = normalize(arranged.join(' '));
    const expected = normalize(exercise.answer || '');
    if (input === expected) onCorrect();
    else onWrong();
  };

  const handleMCQ = (idx: number) => {
    if (feedback) return;
    setSelected(idx);
    if (idx === exercise.correctIndex) onCorrect();
    else onWrong();
  };

  const handleTyping = () => {
    if (feedback) return;
    const input = normalize(inputValue);
    const expected = normalize(exercise.answer || '');
    const isCorrect =
      input === expected ||
      input.includes(expected) ||
      expected.includes(input) ||
      expected.split(' ').every((word: string) => input.includes(word));
    if (isCorrect) onCorrect();
    else onWrong();
  };

  const exerciseImageUrl = getExerciseImageUrl(exercise, vocabulary);

  return (
    <ScrollView style={[styles.container, { paddingHorizontal: 16 }]} contentContainerStyle={styles.center}>
      <Text style={[styles.prompt, { color: colors.foreground }]}>
        {getLocalizedText(exercise.prompt, language)}
      </Text>

      {exerciseImageUrl && (
        <Image source={{ uri: exerciseImageUrl }} style={styles.exerciseImage} resizeMode="contain" />
      )}

      {exercise.type === 'listening' && (
        <TouchableOpacity
          style={[styles.listenButton, { backgroundColor: colors.primary }]}
          onPress={() => onSpeak(exercise.arabicText)}
        >
          <Feather name="volume-2" color="#fff" size={32} />
        </TouchableOpacity>
      )}

      {(exercise.type === 'mcq' || exercise.type === 'listening') && (
        <View style={styles.optionsGrid}>
          {exercise.options?.map((opt: string, idx: number) => {
            const isSelected = selected === idx;
            const isCorrect = idx === exercise.correctIndex;
            let bg = colors.card;
            let border = colors.border;
            if (feedback) {
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
                key={idx}
                style={[styles.option, { backgroundColor: bg, borderColor: border }]}
                onPress={() => handleMCQ(idx)}
                disabled={!!feedback}
              >
                <Text style={[styles.optionText, { color: colors.foreground }]}>{opt}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      {exercise.type === 'writing' && (
        <View style={{ width: '100%' }}>
          <Text style={[styles.arabic, { color: colors.primary, marginBottom: 12 }]}>{exercise.arabicText}</Text>
          <TextInput
            style={[styles.input, { borderColor: colors.border, color: colors.foreground, textAlign: 'right' }]}
            placeholder={t('type_here')}
            placeholderTextColor={colors.mutedForeground}
            value={inputValue}
            onChangeText={(text) => {
              setInputValue(text);
              if (feedback === 'wrong') onReset();
            }}
            editable={feedback !== 'correct'}
          />
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={handleTyping}
            disabled={feedback === 'correct' || !inputValue}
          >
            <Text style={[styles.buttonText, { color: colors.primaryForeground }]}>{t('check')}</Text>
          </TouchableOpacity>
        </View>
      )}

      {exercise.type === 'speaking' && (
        <View style={styles.center}>
          <View style={[styles.speakCard, { backgroundColor: colors.primary + '10', borderColor: colors.primary + '40' }]}>
            <Text style={[styles.speakLabel, { color: colors.mutedForeground }]}>{t('say_this')}</Text>
            <Text style={[styles.speakArabic, { color: colors.primary }]}>{exercise.arabicText}</Text>
            <TouchableOpacity onPress={() => onSpeak(exercise.arabicText)}>
              <Feather name="volume-2" color={colors.primary} size={24} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.micButton, { backgroundColor: colors.secondary }]}
            onPress={() => {
              onSpeak(exercise.arabicText);
              setTimeout(onCorrect, 1500);
            }}
          >
            <Feather name="mic" color={colors.secondaryForeground} size={36} />
          </TouchableOpacity>
          <Text style={[styles.hint, { color: colors.mutedForeground }]}>
            Tap the microphone to practise
          </Text>
        </View>
      )}

      {exercise.type === 'matching' && exercise.pairs && (
        <View style={styles.matchGrid}>
          <View style={{ flex: 1, gap: 8 }}>
            {exercise.pairs.map((p: any, i: number) => (
              <TouchableOpacity
                key={`a-${i}`}
                style={[
                  styles.matchItem,
                  {
                    backgroundColor: matchedA.includes(i)
                      ? 'transparent'
                      : selA === i
                        ? colors.primary
                        : colors.card,
                    borderColor: matchedA.includes(i) ? 'transparent' : colors.border,
                  },
                ]}
                disabled={matchedA.includes(i)}
                onPress={() => setSelA(i)}
              >
                <Text
                  style={[
                    styles.matchText,
                    { color: selA === i ? colors.primaryForeground : colors.foreground },
                    matchedA.includes(i) && { opacity: 0 },
                  ]}
                >
                  {p.a}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ flex: 1, gap: 8 }}>
            {shuffledB.map((originalIndex, i) => {
              const p = exercise.pairs[originalIndex];
              return (
                <TouchableOpacity
                  key={`b-${originalIndex}`}
                  style={[
                    styles.matchItem,
                    {
                      backgroundColor: matchedA.includes(originalIndex)
                        ? 'transparent'
                        : selB === i
                          ? colors.primary
                          : colors.card,
                      borderColor: matchedA.includes(originalIndex) ? 'transparent' : colors.border,
                    },
                  ]}
                  disabled={matchedA.includes(originalIndex)}
                  onPress={() => setSelB(i)}
                >
                  <Text
                    style={[
                      styles.matchText,
                      { color: selB === i ? colors.primaryForeground : colors.foreground },
                      matchedA.includes(originalIndex) && { opacity: 0 },
                    ]}
                  >
                    {p.b}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}

      {exercise.type === 'fill_in_blank' && (
        <View style={{ width: '100%' }}>
          <Text style={[styles.arabic, { color: colors.primary, marginBottom: 12 }]}>
            {exercise.arabicText}
          </Text>
          <TextInput
            style={[styles.input, { borderColor: colors.border, color: colors.foreground, textAlign: 'right' }]}
            placeholder={t('type_here')}
            placeholderTextColor={colors.mutedForeground}
            value={inputValue}
            onChangeText={(text) => {
              setInputValue(text);
              if (feedback === 'wrong') onReset();
            }}
            editable={feedback !== 'correct'}
          />
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={handleTyping}
            disabled={feedback === 'correct' || !inputValue}
          >
            <Text style={[styles.buttonText, { color: colors.primaryForeground }]}>{t('check')}</Text>
          </TouchableOpacity>
        </View>
      )}

      {exercise.type === 'arrange' && (
        <View style={{ width: '100%', gap: 16 }}>
          <View style={[styles.arrangeSlot, { borderColor: colors.border, backgroundColor: colors.card }]}>
            {arranged.length === 0 ? (
              <Text style={[styles.arrangeHint, { color: colors.mutedForeground }]}>{t('tap_words')}</Text>
            ) : (
              arranged.map((word, i) => (
                <TouchableOpacity
                  key={`sel-${i}-${word}`}
                  style={[styles.arrangeChip, { backgroundColor: colors.primary }]}
                  onPress={() => {
                    setPool((p) => [...p, word]);
                    setArranged((a) => a.filter((_, idx) => idx !== i));
                    if (feedback === 'wrong') onReset();
                  }}
                  disabled={feedback === 'correct'}
                >
                  <Text style={[styles.arrangeChipText, { color: colors.primaryForeground }]}>{word}</Text>
                </TouchableOpacity>
              ))
            )}
          </View>
          <View style={styles.arrangePool}>
            {pool.map((word, i) => (
              <TouchableOpacity
                key={`pool-${i}-${word}`}
                style={[styles.arrangeChip, { backgroundColor: colors.secondary }]}
                onPress={() => {
                  setArranged((a) => [...a, word]);
                  setPool((p) => p.filter((_, idx) => idx !== i));
                  if (feedback === 'wrong') onReset();
                }}
                disabled={feedback === 'correct'}
              >
                <Text style={[styles.arrangeChipText, { color: colors.secondaryForeground }]}>{word}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={handleArrange}
            disabled={feedback === 'correct' || arranged.length === 0}
          >
            <Text style={[styles.buttonText, { color: colors.primaryForeground }]}>{t('check')}</Text>
          </TouchableOpacity>
        </View>
      )}

      {feedback && (
        <View
          style={[
            styles.feedback,
            { backgroundColor: feedback === 'correct' ? '#dcfce7' : '#fee2e2' },
          ]}
        >
          {feedback === 'correct' ? (
            <Text style={[styles.feedbackText, { color: '#166534' }]}>
              <Feather name="check" color="#166534" size={20} /> {t('correct')}
            </Text>
          ) : (
            <View style={{ alignItems: 'center' }}>
              <Text style={[styles.feedbackText, { color: '#991b1b' }]}>
                <Feather name="x" color="#991b1b" size={20} /> {t('wrong')}
              </Text>
              {exercise.answer && (
                <Text style={[styles.correctAnswerText, { color: '#166534' }]}>
                  {t('correct_answer')}: {exercise.answer}
                </Text>
              )}
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
}

function SummaryScreen({ score, total, colors, t, onFinish }: any) {
  const accuracy = total > 0 ? score / total : 1;
  const stars = accuracy >= 0.8 ? 3 : accuracy >= 0.5 ? 2 : 1;

  return (
    <View style={[styles.center, { paddingHorizontal: 24 }]}>
      <Feather name="award" color={colors.primary} size={80} />
      <Text style={[styles.summaryTitle, { color: colors.primary }]}>{t('correct')}</Text>
      <View style={styles.starsRow}>
        {[1, 2, 3].map((s) => (
          <Feather name="star" key={s}
            size={48}
            color={s <= stars ? '#F59E0B' : colors.border}
            fill={s <= stars ? '#F59E0B' : 'transparent'}
          />
        ))}
      </View>
      <Text style={[styles.xpText, { color: colors.foreground }]}>+50 {t('xp')}</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]} onPress={onFinish}>
        <Text style={[styles.buttonText, { color: colors.primaryForeground }]}>{t('finish')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  progressBar: {
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  progressFill: { height: 8, borderRadius: 4, marginBottom: 8 },
  progressText: { fontSize: 14, fontFamily: 'Inter_600SemiBold', textAlign: 'center' },
  introBadge: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    borderRadius: 28,
    marginBottom: 20,
    transform: [{ rotate: '-3deg' }],
  },
  introTitle: { fontSize: 28, fontFamily: 'Inter_700Bold', textAlign: 'center' },
  introText: { fontSize: 18, fontFamily: 'Inter_500Medium', textAlign: 'center', marginBottom: 24 },
  button: {
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 24,
    marginTop: 16,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: { fontSize: 18, fontFamily: 'Inter_700Bold' },
  step: { fontSize: 14, fontFamily: 'Inter_600SemiBold', marginBottom: 16 },
  vocabCard: {
    width: '100%',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    borderWidth: 1,
    borderBottomWidth: 6,
  },
  emoji: { fontSize: 64, marginBottom: 12 },
  exerciseImage: { width: 140, height: 140, marginVertical: 16, borderRadius: 20, backgroundColor: '#f3f4f6' },
  arabic: { fontSize: 38, fontFamily: 'Inter_700Bold', textAlign: 'center' },
  translit: { fontSize: 16, fontFamily: 'Inter_400Regular', marginTop: 6 },
  translation: { fontSize: 20, fontFamily: 'Inter_600SemiBold', marginTop: 12 },
  speakButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubble: {
    maxWidth: '90%',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
  },
  speaker: { fontSize: 12, fontFamily: 'Inter_600SemiBold', marginBottom: 4 },
  bubbleArabic: { fontSize: 22, fontFamily: 'Inter_700Bold', marginBottom: 4 },
  bubbleTranslation: { fontSize: 14, fontFamily: 'Inter_500Medium' },
  prompt: { fontSize: 22, fontFamily: 'Inter_700Bold', textAlign: 'center', marginBottom: 20 },
  optionsGrid: { width: '100%', gap: 12 },
  option: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    borderBottomWidth: 5,
  },
  optionText: { fontSize: 18, fontFamily: 'Inter_700Bold', textAlign: 'center' },
  listenButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 6,
    borderBottomColor: 'rgba(0,0,0,0.15)',
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    fontSize: 22,
    fontFamily: 'Inter_700Bold',
    marginBottom: 16,
  },
  speakCard: {
    width: '100%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    marginBottom: 20,
  },
  speakLabel: { fontSize: 14, fontFamily: 'Inter_600SemiBold', marginBottom: 8 },
  speakArabic: { fontSize: 28, fontFamily: 'Inter_700Bold', marginBottom: 8 },
  micButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderBottomColor: 'rgba(0,0,0,0.15)',
  },
  hint: { fontSize: 14, fontFamily: 'Inter_500Medium', marginTop: 12 },
  matchGrid: { flexDirection: 'row', gap: 12, width: '100%' },
  matchItem: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  matchText: { fontSize: 16, fontFamily: 'Inter_700Bold' },
  feedback: {
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
  },
  feedbackText: { fontSize: 18, fontFamily: 'Inter_700Bold' },
  correctAnswerText: { fontSize: 16, fontFamily: 'Inter_600SemiBold', marginTop: 6 },
  arrangeSlot: {
    width: '100%',
    minHeight: 64,
    borderWidth: 2,
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrangePool: {
    width: '100%',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
  },
  arrangeChip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  arrangeChipText: { fontSize: 18, fontFamily: 'Inter_700Bold' },
  arrangeHint: { fontSize: 14, fontFamily: 'Inter_500Medium' },
  summaryTitle: { fontSize: 36, fontFamily: 'Inter_700Bold', marginTop: 20 },
  starsRow: { flexDirection: 'row', gap: 12, marginVertical: 20 },
  xpText: { fontSize: 24, fontFamily: 'Inter_700Bold', marginBottom: 20 },
});
