import { Router, type IRouter } from "express";
import healthRouter from "./health";
import academyRouter from "./academy";
import aiRouter from "./ai";

const router: IRouter = Router();

router.use(healthRouter);
router.use(academyRouter);
router.use(aiRouter);

export default router;
