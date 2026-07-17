import AsyncStorage from '@react-native-async-storage/async-storage';
import type { CurriculumId } from './curriculum';

export interface SkillProgress {
  listening: number;
  speaking: number;
  reading: number;
  writing: number;
}

export interface UserProgress {
  completedLessons: string[];
  stars: Record<string, number>;
  xp: number;
  streak: number;
  lastActive: string | null;
  skills: SkillProgress;
  badges: string[];
}

const defaultProgress: UserProgress = {
  completedLessons: [],
  stars: {},
  xp: 0,
  streak: 0,
  lastActive: null,
  skills: { listening: 0, speaking: 0, reading: 0, writing: 0 },
  badges: [],
};

function getKey(curriculum: CurriculumId) {
  return `ola_progress_${curriculum}`;
}

export async function getProgress(curriculum: CurriculumId): Promise<UserProgress> {
  try {
    const saved = await AsyncStorage.getItem(getKey(curriculum));
    if (!saved) return defaultProgress;
    const parsed = JSON.parse(saved);
    return { ...defaultProgress, ...parsed };
  } catch {
    return defaultProgress;
  }
}

export async function saveProgress(curriculum: CurriculumId, progress: UserProgress) {
  try {
    await AsyncStorage.setItem(getKey(curriculum), JSON.stringify(progress));
  } catch {
    // ignore
  }
}

export async function addLessonCompletion(
  curriculum: CurriculumId,
  lessonId: string,
  starsEarned: number,
  xpEarned: number,
  skillTypes: string[]
) {
  const current = await getProgress(curriculum);

  const isFirstTime = !current.completedLessons.includes(lessonId);
  if (isFirstTime) {
    current.completedLessons.push(lessonId);
    current.xp += xpEarned;

    for (const sk of skillTypes) {
      if (sk === 'listening' || sk === 'استماع') current.skills.listening += 1;
      if (sk === 'speaking' || sk === 'تحدث') current.skills.speaking += 1;
      if (sk === 'reading' || sk === 'قراءة') current.skills.reading += 1;
      if (sk === 'writing' || sk === 'كتابة') current.skills.writing += 1;
    }
  }

  const existingStars = current.stars[lessonId] || 0;
  if (starsEarned > existingStars) {
    current.stars[lessonId] = starsEarned;
  }

  const today = new Date().toISOString().split('T')[0];
  if (current.lastActive) {
    const lastDate = new Date(current.lastActive);
    const currentDate = new Date(today);
    const diffDays = Math.ceil(
      Math.abs(currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diffDays === 1) current.streak += 1;
    else if (diffDays > 1) current.streak = 1;
  } else {
    current.streak = 1;
  }
  current.lastActive = today;

  if (current.xp >= 100 && !current.badges.includes('starter')) current.badges.push('starter');
  if (current.completedLessons.length >= 5 && !current.badges.includes('scholar'))
    current.badges.push('scholar');
  if (current.streak >= 3 && !current.badges.includes('streak_3')) current.badges.push('streak_3');

  await saveProgress(curriculum, current);
  return current;
}
