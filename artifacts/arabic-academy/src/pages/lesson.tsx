import React, { useState, useEffect, useRef } from 'react';
import { useRoute, Link, useLocation } from 'wouter';
import { useGetLesson, getGetLessonQueryKey } from '@workspace/api-client-react';
import { useI18n } from '@/i18n/context';
import { getLocalizedText } from '@/lib/localize';
import { getProgress, addLessonCompletion } from '@/lib/progress';
import { speak, listenToSpeech, stopSpeak } from '@/lib/speech';
import { ChevronLeft, ChevronRight, Play, Volume2, Mic, Check, X, Star, Trophy, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function LessonPage() {
  const [, params] = useRoute('/lesson/:lessonId');
  const lessonId = params?.lessonId || '';
  const [, setLocation] = useLocation();
  
  const { data: lesson, isLoading } = useGetLesson(lessonId, {
    query: { enabled: !!lessonId, queryKey: getGetLessonQueryKey(lessonId) }
  });
  
  const { t, language } = useI18n();
  const isRtl = language === 'ar';
  
  // Stages: 'intro' | 'vocab' | 'dialogue' | 'exercises' | 'summary'
  const [stage, setStage] = useState<'intro' | 'vocab' | 'dialogue' | 'exercises' | 'summary'>('intro');
  const [subIndex, setSubIndex] = useState(0);
  
  // Exercise state
  const [score, setScore] = useState(0);
  const [exerciseFeedback, setExerciseFeedback] = useState<'correct'|'wrong'|null>(null);
  
  // Cleanup speech on unmount
  useEffect(() => {
    return () => stopSpeak();
  }, []);

  if (isLoading) {
    return <div className="flex justify-center p-20"><div className="animate-spin text-primary"><Star className="w-12 h-12 fill-current" /></div></div>;
  }
  if (!lesson) return <div className="p-10 font-bold">{t('error')}</div>;

  const handleNext = () => {
    setExerciseFeedback(null);
    stopSpeak();

    if (stage === 'intro') {
      if (lesson.vocabulary?.length > 0) {
        setStage('vocab');
      } else if (lesson.dialogue?.length > 0) {
        setStage('dialogue');
      } else {
        setStage('exercises');
      }
      setSubIndex(0);
    } 
    else if (stage === 'vocab') {
      if (subIndex < lesson.vocabulary.length - 1) {
        setSubIndex(s => s + 1);
      } else {
        if (lesson.dialogue?.length > 0) {
          setStage('dialogue');
        } else {
          setStage('exercises');
        }
        setSubIndex(0);
      }
    }
    else if (stage === 'dialogue') {
      if (subIndex < lesson.dialogue.length - 1) {
        setSubIndex(s => s + 1);
      } else {
        setStage('exercises');
        setSubIndex(0);
      }
    }
    else if (stage === 'exercises') {
      if (subIndex < lesson.exercises.length - 1) {
        setSubIndex(s => s + 1);
      } else {
        finishLesson();
      }
    }
  };

  const finishLesson = () => {
    const accuracy = lesson.exercises.length > 0 ? score / lesson.exercises.length : 1;
    let stars = 1;
    if (accuracy >= 0.8) stars = 3;
    else if (accuracy >= 0.5) stars = 2;
    
    addLessonCompletion(lessonId, stars, 50, lesson.skills);
    setStage('summary');
  };

  const renderIntro = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4">
      <div className="bg-primary/10 p-6 sm:p-8 rounded-[2.5rem] sm:rounded-[3rem] rotate-3 mb-2 sm:mb-4 max-w-full">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-primary font-arabic leading-tight break-words max-w-full">
          {getLocalizedText(lesson.title, language)}
        </h1>
      </div>
      <p className="text-lg sm:text-2xl font-bold text-muted-foreground max-w-2xl px-2">
        {getLocalizedText(lesson.intro, language)}
      </p>
      <Button size="lg" onClick={handleNext} className="text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 rounded-[2rem] mt-4 sm:mt-8 animate-bounce hover:animate-none min-h-11">
        {t('start_learning')}
      </Button>
    </div>
  );

  const renderVocab = () => {
    const item = lesson.vocabulary[subIndex];
    if (!item) return null;
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-right-8">
        <div className="text-sm font-bold text-muted-foreground bg-muted px-4 py-1 rounded-full">
          {t('vocabulary')} {subIndex + 1} / {lesson.vocabulary.length}
        </div>
        
          <Card className="w-full max-w-md border-b-8 hover:-translate-y-2 transition-transform cursor-pointer" onClick={() => speak(item.arabic)}>
          <CardContent className="p-6 sm:p-10 flex flex-col items-center text-center space-y-5 sm:space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Volume2 className="w-24 h-24" />
            </div>
            
            <div className="text-6xl sm:text-8xl">{item.emoji}</div>
            
            <h2 className="text-4xl sm:text-6xl font-black text-primary font-arabic mt-4 break-words max-w-full" dir="rtl">
              {item.arabic}
            </h2>
            
            <div className="space-y-2">
              <p className="text-base sm:text-xl font-mono text-muted-foreground bg-muted px-4 py-2 rounded-xl">
                {item.transliteration}
              </p>
              <p className="text-lg sm:text-2xl font-bold text-foreground">
                {getLocalizedText(item.translation, language)}
              </p>
            </div>
            
            <Button variant="secondary" size="icon" className="absolute bottom-4 right-4 rounded-full w-12 h-12 shadow-lg" onClick={(e) => { e.stopPropagation(); speak(item.arabic); }}>
              <Volume2 className="w-6 h-6" />
            </Button>
          </CardContent>
        </Card>
        
        <Button size="lg" onClick={handleNext} className="w-full max-w-md text-lg sm:text-xl min-h-11">
          {t('next')}
        </Button>
      </div>
    );
  };

  const renderSummary = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-in zoom-in duration-500">
        <Trophy className="w-32 h-32 text-secondary animate-bounce" />
        <h1 className="text-5xl font-black text-primary">
          {t('correct')}
        </h1>
        <div className="flex gap-4 my-8">
          {[1,2,3].map(s => {
            const accuracy = lesson.exercises.length > 0 ? score / lesson.exercises.length : 1;
            const earned = accuracy >= (s === 3 ? 0.8 : s === 2 ? 0.5 : 0);
            return (
              <Star key={s} className={`w-16 h-16 ${earned ? 'fill-secondary text-secondary animate-in zoom-in delay-'+(s*150) : 'fill-muted text-muted'}`} />
            )
          })}
        </div>
        <div className="text-2xl font-bold bg-secondary/20 text-secondary-foreground px-8 py-4 rounded-3xl">
          +50 {t('xp')}
        </div>
        <Button size="lg" onClick={() => setLocation(`/grade/${lesson.gradeId}`)} className="text-xl px-12 py-8 rounded-[2rem]">
          {t('finish')}
        </Button>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto min-h-[80vh] flex flex-col pt-4">
      {stage !== 'intro' && stage !== 'summary' && (
        <div className="mb-8 px-4">
          <div className="flex justify-between text-sm font-bold text-muted-foreground mb-2">
            <Link href={`/grade/${lesson.gradeId}`} className="hover:text-primary">
              <X className="w-6 h-6" />
            </Link>
            <span className="bg-muted px-4 py-1 rounded-full">
              {stage === 'vocab' ? t('vocabulary') : stage === 'dialogue' ? t('dialogue') : t('exercises')}
            </span>
          </div>
          <Progress 
            value={
              stage === 'vocab' ? (subIndex / lesson.vocabulary.length) * 33 :
              stage === 'dialogue' ? 33 + (subIndex / lesson.dialogue.length) * 33 :
              66 + (subIndex / lesson.exercises.length) * 34
            } 
          />
        </div>
      )}
      
      <div className="flex-1 px-4">
        {stage === 'intro' && renderIntro()}
        {stage === 'vocab' && renderVocab()}
        {stage === 'dialogue' && <DialoguePlayer lines={lesson.dialogue} currentIdx={subIndex} onNext={handleNext} lang={language} t={t} />}
        {stage === 'exercises' && (
          <ExercisePlayer 
            exercise={lesson.exercises[subIndex]} 
            onCorrect={() => { setScore(s=>s+1); setExerciseFeedback('correct'); setTimeout(handleNext, 1500); }} 
            onWrong={() => setExerciseFeedback('wrong')}
            onReset={() => setExerciseFeedback(null)}
            feedback={exerciseFeedback}
            lang={language}
            t={t}
          />
        )}
        {stage === 'summary' && renderSummary()}
      </div>
    </div>
  );
}

function DialoguePlayer({ lines, currentIdx, onNext, lang, t }: any) {
  const line = lines[currentIdx];
  useEffect(() => {
    if (line) speak(line.arabic);
  }, [line]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-8">
      <div className="w-full space-y-4 sm:space-y-6">
        {lines.slice(0, currentIdx + 1).map((l: any, i: number) => {
          const isCurrent = i === currentIdx;
          const isLeft = i % 2 === 0;
          return (
            <div key={i} className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'} ${!isCurrent ? 'opacity-50' : ''}`}>
              <div className={`max-w-[90%] rounded-3xl p-4 sm:p-6 shadow-sm border-2 ${isLeft ? 'bg-white border-border rounded-tl-none' : 'bg-primary text-primary-foreground border-primary-border rounded-tr-none'}`}>
                <p className="font-bold text-sm opacity-80 mb-2">{l.speaker}</p>
                <p className="text-2xl sm:text-3xl font-black font-arabic mb-2 break-words" dir="rtl">{l.arabic}</p>
                <p className={`text-base sm:text-lg font-bold ${isLeft ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
                  {getLocalizedText(l.translation, lang)}
                </p>
                {isCurrent && (
                  <Button variant="ghost" size="sm" className="mt-4 rounded-full" onClick={() => speak(l.arabic)}>
                    <Volume2 className="w-5 h-5" />
                  </Button>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <Button size="lg" onClick={onNext} className="w-full max-w-md mt-8 sm:mt-12 text-lg sm:text-xl min-h-11">
        {t('next')}
      </Button>
    </div>
  );
}

function ExercisePlayer({ exercise, onCorrect, onWrong, onReset, feedback, lang, t }: any) {
  const [selected, setSelected] = useState<number | string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  // Matching
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [selectedA, setSelectedA] = useState<number | null>(null);
  const [selectedB, setSelectedB] = useState<number | null>(null);
  const [shuffledA, setShuffledA] = useState<{val: string, origIdx: number}[]>([]);
  const [shuffledB, setShuffledB] = useState<{val: string, origIdx: number}[]>([]);

  // Arrange
  const [arrangeWords, setArrangeWords] = useState<{val: string, id: number}[]>([]);
  const [selectedArrange, setSelectedArrange] = useState<{val: string, id: number}[]>([]);

  // Reset state when exercise changes
  useEffect(() => {
    setSelected(null);
    setInputValue("");
    setIsRecording(false);
    
    if (exercise?.type === 'matching' && exercise.pairs) {
      const a = exercise.pairs.map((p: any, i: number) => ({val: p.a, origIdx: i}));
      const b = exercise.pairs.map((p: any, i: number) => ({val: p.b, origIdx: i}));
      setShuffledA(a.sort(() => Math.random() - 0.5));
      setShuffledB(b.sort(() => Math.random() - 0.5));
      setMatchedPairs([]);
      setSelectedA(null);
      setSelectedB(null);
    } else if (exercise?.type === 'arrange' && exercise.answer) {
      const words = exercise.answer.split(' ').map((w: string, i: number) => ({val: w, id: i}));
      setArrangeWords(words.sort(() => Math.random() - 0.5));
      setSelectedArrange([]);
    }
  }, [exercise]);

  // Handle Match
  useEffect(() => {
    if (selectedA !== null && selectedB !== null) {
      if (selectedA === selectedB) {
        setMatchedPairs(prev => {
          const next = [...prev, selectedA];
          if (next.length === exercise.pairs.length) {
            setTimeout(() => onCorrect(), 500);
          }
          return next;
        });
        setSelectedA(null);
        setSelectedB(null);
      } else {
        setTimeout(() => {
          setSelectedA(null);
          setSelectedB(null);
        }, 500);
      }
    }
  }, [selectedA, selectedB, exercise, onCorrect]);

  if (!exercise) return null;

  const isKnownType = ['mcq', 'listening', 'speaking', 'writing', 'matching', 'arrange'].includes(exercise.type);

  const handleMCQ = (idx: number) => {
    if (feedback) return;
    setSelected(idx);
    if (idx === exercise.correctIndex) onCorrect();
    else {
      onWrong();
      setTimeout(() => { if (feedback !== 'correct') setSelected(null) }, 1000);
    }
  };

  const handleTyping = () => {
    if (feedback) return;
    // very loose match: remove diacritics and normalize Arabic characters
    const normalize = (str: string) => str
      .replace(/[\u064B-\u065F]/g, '')
      .replace(/[\u064A\u0649]/g, 'ي') // normalize alif maqsura to ya
      .replace(/[\u0623\u0625\u0622]/g, 'ا') // normalize hamza variants to alif
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();

    const input = normalize(inputValue);
    const expected = normalize(exercise.answer || '');

    // Accept exact match OR input contains the expected answer OR expected contains the input (for sentence exercises)
    const isCorrect = input === expected || input.includes(expected) || expected.includes(input) || input.length > 0 && expected.length > 0 && (expected.split(' ').every(word => input.includes(word)) || input.split(' ').every(word => expected.includes(word)));

    if (isCorrect) {
      onCorrect();
    } else {
      onWrong();
    }
  };


  const handleSpeak = () => {
    setIsRecording(true);
    listenToSpeech(
      (transcript) => {
        setIsRecording(false);
        const normalize = (str: string) => str.replace(/[\u064B-\u065F]/g, '').trim().toLowerCase();
        // loose word inclusion match for kids
        const expected = normalize(exercise.arabicText || '');
        const heard = normalize(transcript);
        if (heard.includes(expected) || expected.includes(heard) || heard.length > 2) {
          onCorrect();
        } else {
          onWrong();
        }
      },
      (err) => {
        setIsRecording(false);
        // Fallback if API fails
        onCorrect(); 
      },
      () => setIsRecording(false)
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in">
      <div className="w-full max-w-xl space-y-6 sm:space-y-8">
        
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-6 sm:mb-8">
          {getLocalizedText(exercise.prompt, lang)}
        </h2>

        {exercise.imageUrl && (
          <div className="flex justify-center mb-6">
            <img
              src={exercise.imageUrl}
              alt=""
              className="max-h-48 rounded-2xl border-4 border-border shadow-sm object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        )}

        {exercise.type === 'listening' && (
          <div className="flex justify-center mb-6 sm:mb-8">
            <Button size="lg" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg border-b-8 hover:-translate-y-2" onClick={() => speak(exercise.arabicText || '')}>
              <Volume2 className="w-10 h-10 sm:w-12 sm:h-12" />
            </Button>
          </div>
        )}

        {(exercise.type === 'mcq' || exercise.type === 'listening') && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {exercise.options?.map((opt: string, idx: number) => (
              <Card 
                key={idx} 
                className={`cursor-pointer border-b-4 hover:-translate-y-1 transition-all
                  ${selected === idx ? (feedback === 'correct' ? 'bg-green-100 border-green-500 text-green-800' : 'bg-red-100 border-red-500 text-red-800') : 'hover:border-primary'}
                `}
                onClick={() => handleMCQ(idx)}
              >
                <CardContent className="p-5 sm:p-6 flex items-center justify-center text-center h-full min-h-[100px]">
                  <span className="text-2xl sm:text-3xl font-bold font-arabic break-words">{opt}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {exercise.type === 'writing' && (
          <div className="space-y-4">
            <div className="text-3xl sm:text-5xl text-center font-arabic mb-6 sm:mb-8 break-words" dir="rtl">{exercise.arabicText}</div>
            <input
              dir="rtl"
              className="w-full p-4 sm:p-6 text-2xl sm:text-3xl font-arabic border-4 border-border rounded-2xl focus:border-primary outline-none min-h-14"
              placeholder={t('type_here')}
              value={inputValue}
              onChange={e => {
                setInputValue(e.target.value);
                if (feedback === 'wrong') onReset();
              }}
              disabled={feedback === 'correct'}
            />
            <Button size="lg" className="w-full text-xl h-16" onClick={handleTyping} disabled={feedback === 'correct' || !inputValue}>
              {t('check')}
            </Button>
          </div>
        )}

        {exercise.type === 'speaking' && (
          <div className="flex flex-col items-center space-y-12">
            <div className="bg-primary/5 p-6 sm:p-8 rounded-3xl w-full text-center border-2 border-primary/20">
              <p className="text-lg sm:text-xl font-bold text-muted-foreground mb-4">{t('say_this')}</p>
              <p className="text-3xl sm:text-5xl font-black font-arabic text-primary break-words" dir="rtl">{exercise.arabicText}</p>
              <Button variant="ghost" size="sm" className="mt-4" onClick={() => speak(exercise.arabicText || '')}>
                <Volume2 className="w-6 h-6 mr-2" /> Listen
              </Button>
            </div>
            
            <Button 
               size="lg" 
               className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full border-b-8 shadow-xl transition-all ${isRecording ? 'bg-red-500 border-red-700 animate-pulse' : 'bg-secondary border-secondary-border'}`}
              onClick={handleSpeak}
              disabled={!!feedback || isRecording}
            >
               <Mic className="w-12 h-12 sm:w-16 sm:h-16" />
            </Button>
          </div>
        )}

        {exercise.type === 'matching' && exercise.pairs && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
            <div className="space-y-4">
              {shuffledA.map((item, idx) => (
                <Button 
                  key={`a-${idx}`} 
                  variant={matchedPairs.includes(item.origIdx) ? "ghost" : selectedA === item.origIdx ? "default" : "outline"}
                   className={`w-full h-14 sm:h-16 text-lg sm:text-xl font-bold font-arabic transition-all ${matchedPairs.includes(item.origIdx) ? 'opacity-0 pointer-events-none' : ''}`}
                  onClick={() => { if (!matchedPairs.includes(item.origIdx)) setSelectedA(item.origIdx); }}
                >
                  {item.val}
                </Button>
              ))}
            </div>
            <div className="space-y-4">
              {shuffledB.map((item, idx) => (
                <Button 
                  key={`b-${idx}`} 
                  variant={matchedPairs.includes(item.origIdx) ? "ghost" : selectedB === item.origIdx ? "default" : "outline"}
                   className={`w-full h-14 sm:h-16 text-lg sm:text-xl font-bold transition-all ${matchedPairs.includes(item.origIdx) ? 'opacity-0 pointer-events-none' : ''}`}
                  onClick={() => { if (!matchedPairs.includes(item.origIdx)) setSelectedB(item.origIdx); }}
                >
                  {item.val}
                </Button>
              ))}
            </div>
          </div>
        )}

        {exercise.type === 'arrange' && exercise.answer && (
          <div className="space-y-8 w-full">
              <div className="min-h-[100px] border-b-4 border-dashed border-border flex flex-wrap gap-2 p-3 sm:p-4 justify-center items-center rtl:space-x-reverse space-x-2" dir="rtl">
              {selectedArrange.map((word) => (
                <Button
                  key={`sel-${word.id}`}
                  variant="default"
                   className="text-xl sm:text-2xl font-bold font-arabic h-auto py-3 px-4 sm:px-6 animate-in zoom-in"
                  onClick={() => {
                    if (feedback === 'correct') return;
                    if (feedback === 'wrong') onReset();
                    setSelectedArrange(prev => prev.filter(w => w.id !== word.id));
                    setArrangeWords(prev => [...prev, word]);
                  }}
                >
                  {word.val}
                </Button>
              ))}
            </div>
            
             <div className="flex flex-wrap gap-2 justify-center rtl:space-x-reverse space-x-2" dir="rtl">
              {arrangeWords.map((word) => (
                <Button
                  key={`arr-${word.id}`}
                  variant="outline"
                   className="text-xl sm:text-2xl font-bold font-arabic h-auto py-3 px-4 sm:px-6 animate-in zoom-in"
                  onClick={() => {
                    if (feedback === 'correct') return;
                    if (feedback === 'wrong') onReset();
                    setArrangeWords(prev => prev.filter(w => w.id !== word.id));
                    setSelectedArrange(prev => [...prev, word]);
                  }}
                >
                  {word.val}
                </Button>
              ))}
            </div>

            <Button size="lg" className="w-full text-xl h-16 mt-8" onClick={() => {
              if (feedback === 'correct') return;
              const normalize = (str: string) => str.replace(/[\u064B-\u065F]/g, '').trim().toLowerCase();
              const attempt = selectedArrange.map(w => w.val).join(' ');
              if (normalize(attempt) === normalize(exercise.answer || '')) {
                onCorrect();
              } else {
                onWrong();
              }
            }} disabled={feedback === 'correct' || selectedArrange.length === 0}>
              {t('check')}
            </Button>
          </div>
        )}

        {!isKnownType && (
          <div className="text-center space-y-6 w-full mt-8">
            <p className="text-xl font-bold text-muted-foreground">Interactive content not available.</p>
            <Button size="lg" onClick={onCorrect} className="w-full text-xl h-16">
              {t('continue')}
            </Button>
          </div>
        )}

        {feedback && (
          <div className={`mt-8 p-4 rounded-2xl text-center text-xl font-bold animate-in zoom-in ${feedback === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {feedback === 'correct' ? (
              <span className="flex items-center justify-center gap-2"><Check className="w-8 h-8" /> {t('correct')}</span>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <span className="flex items-center justify-center gap-2"><X className="w-8 h-8" /> {t('wrong')}</span>
                <Button size="sm" variant="outline" className="border-red-300 text-red-700 hover:bg-red-50" onClick={() => { setInputValue(''); onReset(); }}>
                  <RefreshCcw className="w-4 h-4 mr-2" /> {t('wrong')}
                </Button>
              </div>
            )}
          </div>
        )}
        
      </div>
    </div>
  );
}
