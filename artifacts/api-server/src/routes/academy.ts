import { Router, type IRouter } from "express";
import {
  GetOverviewResponse,
  ListGradesResponse,
  GetGradeResponse,
  GetLessonResponse,
} from "@workspace/api-zod";
import { grades, getGradeById, getLessonById, getOverview, toGradeResponse } from "../data";

const router: IRouter = Router();

router.get("/overview", (_req, res): void => {
  res.json(GetOverviewResponse.parse(getOverview()));
});

router.get("/grades", (_req, res): void => {
  res.json(ListGradesResponse.parse(grades.map((g) => toGradeResponse(g, true))));
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
