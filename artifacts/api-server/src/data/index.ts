import type { GradeData, Lesson, Unit } from "./types";
import { grade1 } from "./grade1";
import { grade2 } from "./grade2";
import { grade3 } from "./grade3";
import { grade4 } from "./grade4";
import { grade5 } from "./grade5";
import { grade6 } from "./grade6";

export const grades: GradeData[] = [grade1, grade2, grade3, grade4, grade5, grade6];

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

export function getOverview() {
  let totalUnits = 0;
  let totalLessons = 0;
  let totalWords = 0;
  let totalExercises = 0;
  for (const grade of grades) {
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
    totalGrades: grades.length,
    totalUnits,
    totalLessons,
    totalWords,
    totalExercises,
    skills: ["listening", "speaking", "reading", "writing"],
  };
}
