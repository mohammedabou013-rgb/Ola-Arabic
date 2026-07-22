export interface LocalizedText {
  ar: string;
  en: string;
  ms: string;
  id: string;
  fr: string;
  es: string;
}

export interface VocabItem {
  id: string;
  arabic: string; // fully vocalized Arabic
  transliteration: string;
  translation: LocalizedText;
  emoji: string;
}

export interface DialogueLine {
  speaker: string;
  arabic: string;
  translation: LocalizedText;
}

export interface ExercisePair {
  a: string; // Arabic side
  b: string; // match target
}

export type ExerciseType =
  | "mcq"
  | "listening"
  | "speaking"
  | "writing"
  | "matching"
  | "arrange"
  | "fill_in_blank"
  | "spell";

export type Skill = "listening" | "speaking" | "reading" | "writing";

export interface Exercise {
  id: string;
  type: ExerciseType;
  skill: Skill;
  prompt: LocalizedText;
  arabicText?: string | null;
  options?: string[];
  correctIndex?: number | null;
  pairs?: ExercisePair[];
  answer?: string | null;
  imageUrl?: string | null;
}

export interface Lesson {
  id: string;
  unitId: string;
  gradeId: string;
  order: number;
  title: LocalizedText;
  skills: Skill[];
  intro: LocalizedText;
  vocabulary: VocabItem[];
  dialogue: DialogueLine[];
  exercises: Exercise[];
}

export interface Unit {
  id: string;
  gradeId: string;
  order: number;
  title: LocalizedText;
  theme: string;
  lessons: Lesson[];
}

export type CurriculumId = 'malaysia' | 'uae' | 'indonesia';

export interface CurriculumInfo {
  id: CurriculumId;
  name: LocalizedText;
  description: LocalizedText;
  flag: string;
  gradeCount: number;
}

export interface GradeData {
  id: string;
  curriculumId?: CurriculumId;
  number: number;
  title: LocalizedText;
  description: LocalizedText;
  color: string;
  icon: string;
  units: Unit[];
}

/** Shorthand builder for LocalizedText. */
export function t(
  ar: string,
  en: string,
  ms: string,
  id: string,
  fr: string,
  es: string,
): LocalizedText {
  return { ar, en, ms, id, fr, es };
}
