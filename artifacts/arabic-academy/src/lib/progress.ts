import { getCurriculum } from './curriculum';

function getProgressKey(): string {
  return `ola_progress_${getCurriculum()}`;
}

const PROGRESS_KEY = getProgressKey();

export interface SkillProgress {
  listening: number;
  speaking: number;
  reading: number;
  writing: number;
}

export interface UserProgress {
  completedLessons: string[];
  stars: Record<string, number>; // lessonId -> stars (1-3)
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
  badges: []
};

export const getProgress = (): UserProgress => {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const saved = localStorage.getItem(getProgressKey());
    if (!saved) return defaultProgress;
    const parsed = JSON.parse(saved);
    // basic migration / validation
    return { ...defaultProgress, ...parsed };
  } catch (e) {
    return defaultProgress;
  }
};

export const saveProgress = (progress: UserProgress) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(getProgressKey(), JSON.stringify(progress));
};

export const addLessonCompletion = (lessonId: string, starsEarned: number, xpEarned: number, skillTypes: string[]) => {
  const current = getProgress();
  
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

  // Update streak
  const today = new Date().toISOString().split('T')[0];
  if (current.lastActive) {
    const lastDate = new Date(current.lastActive);
    const currentDate = new Date(today);
    const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      current.streak += 1;
    } else if (diffDays > 1) {
      current.streak = 1; // reset
    }
  } else {
    current.streak = 1;
  }
  current.lastActive = today;

  // Badges logic (simplified)
  if (current.xp >= 100 && !current.badges.includes('starter')) current.badges.push('starter');
  if (current.completedLessons.length >= 5 && !current.badges.includes('scholar')) current.badges.push('scholar');
  if (current.streak >= 3 && !current.badges.includes('streak_3')) current.badges.push('streak_3');

  saveProgress(current);
  return current;
};
