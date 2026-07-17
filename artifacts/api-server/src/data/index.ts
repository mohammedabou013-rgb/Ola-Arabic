import type { GradeData, Lesson, Unit } from "./types";
import type { CurriculumId, CurriculumInfo } from "./types";
import { t } from "./types";
import { grade1 } from "./grade1";
import { grade2 } from "./grade2";
import { grade3 } from "./grade3";
import { grade4 } from "./grade4";
import { grade5 } from "./grade5";
import { grade6 } from "./grade6";
import { uaeGrade1 } from "./uae-grade1";
import { uaeGrade2 } from "./uae-grade2";
import { uaeGrade3 } from "./uae-grade3";
import { uaeGrade4 } from "./uae-grade4";
import { uaeGrade5 } from "./uae-grade5";
import { uaeGrade6 } from "./uae-grade6";
import { uaeGrade7 } from "./uae-grade7";
import { uaeGrade8 } from "./uae-grade8";
import { indonesiaGrade1 } from "./indonesia-grade1";
import { indonesiaGrade2 } from "./indonesia-grade2";
import { indonesiaGrade3 } from "./indonesia-grade3";
import { indonesiaGrade4 } from "./indonesia-grade4";
import { indonesiaGrade5 } from "./indonesia-grade5";
import { indonesiaGrade6 } from "./indonesia-grade6";

const grade1m = { ...grade1, curriculumId: 'malaysia' as const };
const grade2m = { ...grade2, curriculumId: 'malaysia' as const };
const grade3m = { ...grade3, curriculumId: 'malaysia' as const };
const grade4m = { ...grade4, curriculumId: 'malaysia' as const };
const grade5m = { ...grade5, curriculumId: 'malaysia' as const };
const grade6m = { ...grade6, curriculumId: 'malaysia' as const };

export const grades: GradeData[] = [grade1m, grade2m, grade3m, grade4m, grade5m, grade6m, uaeGrade1, uaeGrade2, uaeGrade3, uaeGrade4, uaeGrade5, uaeGrade6, uaeGrade7, uaeGrade8, indonesiaGrade1, indonesiaGrade2, indonesiaGrade3, indonesiaGrade4, indonesiaGrade5, indonesiaGrade6];

export function getGradesByCurriculum(c: CurriculumId) {
  return grades.filter(g => g.curriculumId === c);
}

export const curricula: CurriculumInfo[] = [
  {
    id: 'malaysia',
    flag: '🇲🇾',
    gradeCount: 6,
    name: t('المنهج الماليزي', 'Malaysian Curriculum', 'Kurikulum Malaysia', 'Kurikulum Malaysia', 'Curriculum Malaisien', 'Currículo Malayo'),
    description: t('منهج اللغة العربية للصفوف 1-6 في ماليزيا', 'Arabic language curriculum for Stages 1-6 in Malaysia', 'Kurikulum bahasa Arab Tahun 1-6 di Malaysia', 'Kurikulum bahasa Arab Kelas 1-6 di Malaysia', 'Curriculum de langue arabe Années 1-6 en Malaisie', 'Currículo de lengua árabe Años 1-6 en Malasia'),
  },
  {
    id: 'uae',
    flag: '🇦🇪',
    gradeCount: 8,
    name: t('المنهج الإماراتي', 'UAE Curriculum', 'Kurikulum UAE', 'Kurikulum UAE', 'Curriculum des EAU', 'Currículo de los EAU'),
    description: t('سلسلة تعليم اللغة العربية للناطقين بغيرها - وزارة التربية الإماراتية', 'Arabic for Non-Native Speakers – UAE Ministry of Education', 'Siri bahasa Arab untuk bukan penutur asli – Kementerian Pendidikan UAE', 'Seri bahasa Arab untuk bukan penutur asli – Kementerian Pendidikan UAE', 'Série arabe pour non-natifs – Ministère Éducation EAU', 'Serie árabe para no nativos – Ministerio Educación EAU'),
  },
  {
    id: 'indonesia',
    flag: '🇮🇩',
    gradeCount: 6,
    name: t('المنهج الإندونيسي', 'Indonesian Curriculum', 'Kurikulum Indonesia', 'Kurikulum Indonesia', 'Curriculum Indonésien', 'Currículo Indonesio'),
    description: t('منهج اللغة العربية للمدارس الابتدائية الإندونيسية (MI) للصفوف 1-6', 'Arabic curriculum for Indonesian Madrasah Ibtidaiyah Grades 1-6', 'Kurikulum bahasa Arab untuk Madrasah Ibtidaiyah Indonesia Tahun 1-6', 'Kurikulum bahasa Arab untuk Madrasah Ibtidaiyah Indonesia Kelas 1-6', 'Curriculum de langue arabe pour l’école primaire islamique indonésienne niveaux 1-6', 'Currículo de lengua árabe para escuela primaria islámica indonesia años 1-6'),
  },
];

const lessonIndex = new Map<string, Lesson>();
const unitIndex = new Map<string, Unit>();
for (const grade of grades) {
  for (const unit of grade.units) {
    unitIndex.set(unit.id, unit);
    for (const lesson of unit.lessons) {
      lessonIndex.set(lesson.id, lesson);
    }
  }
}

export function getLessonById(id: string): Lesson | undefined {
  return lessonIndex.get(id);
}

export function getGradeById(id: string): GradeData | undefined {
  return grades.find((g) => g.id === id);
}

/** Serialize a grade to the API shape (with unitCount/lessonCount, summaries only). */
export function toGradeResponse(grade: GradeData, includeLessons: boolean) {
  const units = grade.units.map((u) => ({
    id: u.id,
    gradeId: u.gradeId,
    order: u.order,
    title: u.title,
    theme: u.theme,
    lessons: includeLessons
      ? u.lessons.map((l) => ({
          id: l.id,
          unitId: l.unitId,
          gradeId: l.gradeId,
          order: l.order,
          title: l.title,
          skills: l.skills,
          exerciseCount: l.exercises.length,
          wordCount: l.vocabulary.length,
        }))
      : [],
  }));
  return {
    id: grade.id,
    number: grade.number,
    title: grade.title,
    description: grade.description,
    color: grade.color,
    icon: grade.icon,
    unitCount: grade.units.length,
    lessonCount: grade.units.reduce((n, u) => n + u.lessons.length, 0),
    units,
  };
}

export function getOverview(curriculumId?: CurriculumId) {
  const filtered = curriculumId ? grades.filter(g => g.curriculumId === curriculumId) : grades;
  let totalUnits = 0;
  let totalLessons = 0;
  let totalWords = 0;
  let totalExercises = 0;
  for (const grade of filtered) {
    totalUnits += grade.units.length;
    for (const unit of grade.units) {
      totalLessons += unit.lessons.length;
      for (const lesson of unit.lessons) {
        totalWords += lesson.vocabulary.length;
        totalExercises += lesson.exercises.length;
      }
    }
  }
  return {
    totalGrades: filtered.length,
    totalUnits,
    totalLessons,
    totalWords,
    totalExercises,
    skills: ["listening", "speaking", "reading", "writing"],
  };
}
