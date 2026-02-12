import { Router } from "express";
import { z } from "zod";
import { getDashboard, resetDay } from "../controllers/dashboardController";
import { authenticate, authorize } from "../middleware/auth";
import { validate } from "../middleware/validate";

const router = Router();

const resetSchema = z.object({
	query: z.object({
		date: z.string().min(1),
		classId: z.string().optional(),
	}),
});

router.get(
	"/",
	authenticate,
	authorize("TEACHER", "COORDINATOR"),
	getDashboard,
);
router.delete(
	"/reset",
	authenticate,
	authorize("TEACHER", "COORDINATOR"),
	validate(resetSchema),
	resetDay,
);

export default router;