export type CurriculumId = 'malaysia' | 'uae' | 'indonesia';

export function getCurriculum(): CurriculumId {
  const saved = localStorage.getItem('app_curriculum') as CurriculumId;
  return (saved === 'malaysia' || saved === 'uae' || saved === 'indonesia') ? saved : 'malaysia';
}

export function setCurriculum(id: CurriculumId): void {
  localStorage.setItem('app_curriculum', id);
}

export function hasChosenCurriculum(): boolean {
  return localStorage.getItem('app_curriculum') !== null;
}
