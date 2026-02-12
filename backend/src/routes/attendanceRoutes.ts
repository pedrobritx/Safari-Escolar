import { Router } from "express";
import { z } from "zod";
import {
	markAttendance,
	getTodayAttendance,
} from "../controllers/attendanceController";
import { authenticate, authorize } from "../middleware/auth";
import { validate } from "../middleware/validate";

const router = Router();

const markAttendanceSchema = z.object({
	body: z.object({
		studentId: z.string().min(1),
		status: z.enum(["PRESENT", "ABSENT", "LATE", "CLEARED"]),
		date: z.string().optional(),
	}),
});

router.post(
	"/",
	authenticate,
	authorize("TEACHER", "COORDINATOR"),
	validate(markAttendanceSchema),
	markAttendance,
);
router.get(
	"/today/:classId",
	authenticate,
	authorize("TEACHER", "COORDINATOR", "ADMIN"),
	getTodayAttendance,
);

export default router;