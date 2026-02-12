import { Router } from "express";
import { z } from "zod";
import {
	createClass,
	getClasses,
	getClass,
	updateClassTeacher,
} from "../controllers/classController";
import { authenticate, authorize } from "../middleware/auth";
import { validate } from "../middleware/validate";

const router = Router();

const createSchema = z.object({
	body: z.object({
		name: z.string().min(1),
		schoolId: z.string().min(1),
	}),
});

const updateTeacherSchema = z.object({
	params: z.object({
		classId: z.string().min(1),
		teacherId: z.string().min(1),
	}),
});

router.post(
	"/",
	authenticate,
	authorize("TEACHER", "COORDINATOR"),
	validate(createSchema),
	createClass,
);
router.get("/", authenticate, getClasses);
router.get("/:id", authenticate, getClass);
router.put(
	"/:classId/teacher/:teacherId",
	authenticate,
	authorize("COORDINATOR", "ADMIN"),
	validate(updateTeacherSchema),
	updateClassTeacher,
);

export default router;