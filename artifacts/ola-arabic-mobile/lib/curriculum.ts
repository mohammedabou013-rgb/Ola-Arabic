import AsyncStorage from '@react-native-async-storage/async-storage';

export type CurriculumId = 'malaysia' | 'uae' | 'indonesia';

const KEY = 'app_curriculum';

export async function getCurriculum(): Promise<CurriculumId> {
  try {
    const saved = await AsyncStorage.getItem(KEY);
    if (saved === 'malaysia' || saved === 'uae' || saved === 'indonesia') return saved;
  } catch {
    // ignore
  }
  return 'malaysia';
}

export async function setCurriculum(id: CurriculumId) {
  await AsyncStorage.setItem(KEY, id);
}

export async function hasChosenCurriculum(): Promise<boolean> {
  try {
    const saved = await AsyncStorage.getItem(KEY);
    return saved === 'malaysia' || saved === 'uae' || saved === 'indonesia';
  } catch {
    return false;
  }
}

export function curriculumFlag(curriculum: CurriculumId) {
  if (curriculum === 'malaysia') return '🇲🇾';
  if (curriculum === 'uae') return '🇦🇪';
  return '🇮🇩';
}
