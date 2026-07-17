import { Router, type IRouter } from "express";
import {
  GetOverviewResponse,
  ListGradesResponse,
  GetGradeResponse,
  GetLessonResponse,
} from "@workspace/api-zod";
import { grades, getGradeById, getLessonById, getOverview, toGradeResponse, getGradesByCurriculum, curricula } from "../data";
import type { CurriculumId } from "../data/types";

const router: IRouter = Router();

function parseCurriculumParam(value: unknown): CurriculumId | undefined {
  if (value === 'malaysia' || value === 'uae' || value === 'indonesia') return value;
  return undefined;
}

router.get("/curricula", (_req, res): void => {
  res.json(curricula);
});

router.get("/overview", (req, res): void => {
  const curriculumId = parseCurriculumParam(req.query.curriculum);
  res.json(GetOverviewResponse.parse(getOverview(curriculumId)));
});

router.get("/grades", (req, res): void => {
  const curriculumId = parseCurriculumParam(req.query.curriculum);
  const filtered = curriculumId ? getGradesByCurriculum(curriculumId) : grades;
  res.json(ListGradesResponse.parse(filtered.map((g) => toGradeResponse(g, true))));
});

router.get("/grades/:gradeId", (req, res): void => {
  const raw = req.params.gradeId;
  const gradeId = Array.isArray(raw) ? raw[0] : raw;
  const grade = gradeId ? getGradeById(gradeId) : undefined;
  if (!grade) {
    res.status(404).json({ error: "Grade not found" });
    return;
  }
  res.json(GetGradeResponse.parse(toGradeResponse(grade, true)));
});

router.get("/vocab", (req, res): void => {
  const curriculumId = parseCurriculumParam(req.query.curriculum);
  const filtered = curriculumId ? getGradesByCurriculum(curriculumId) : grades;
  const vocab: Array<{
    id: string; arabic: string; transliteration: string;
    translation: unknown; emoji: string; gradeId: string; lessonId: string;
  }> = [];
  filtered.forEach((grade) => {
    grade.units.forEach((unit) => {
      unit.lessons.forEach((lesson) => {
        lesson.vocabulary.forEach((v) => {
          vocab.push({
            id: v.id,
            arabic: v.arabic,
            transliteration: v.transliteration,
            translation: v.translation,
            emoji: v.emoji ?? "📖",
            gradeId: grade.id,
            lessonId: lesson.id,
          });
        });
      });
    });
  });
  // Shuffle for variety
  for (let i = vocab.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [vocab[i], vocab[j]] = [vocab[j], vocab[i]];
  }
  res.json(vocab);
});

router.get("/lessons/:lessonId", (req, res): void => {
  const raw = req.params.lessonId;
  const lessonId = Array.isArray(raw) ? raw[0] : raw;
  const lesson = lessonId ? getLessonById(lessonId) : undefined;
  if (!lesson) {
    res.status(404).json({ error: "Lesson not found" });
    return;
  }
  res.json(GetLessonResponse.parse(lesson));
});

export default router;
