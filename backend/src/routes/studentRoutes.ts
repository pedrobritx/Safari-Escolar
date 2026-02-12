import { Router } from "express";
import { z } from "zod";
import {
	createStudent,
	getStudents,
	updateStudent,
	deleteStudent,
} from "../controllers/studentController";
import { authenticate, authorize } from "../middleware/auth";
import { validate } from "../middleware/validate";

const router = Router();

const createSchema = z.object({
	body: z.object({
		name: z.string().min(1),
		classId: z.string().min(1),
		animalAvatar: z.string().optional(),
		avatarColor: z.string().optional(),
	}),
});

const updateSchema = z.object({
	body: z.object({
		name: z.string().optional(),
		animalAvatar: z.string().optional(),
		avatarColor: z.string().optional(),
		whatsapp: z.string().optional(),
		email: z.string().optional(),
		birthday: z.string().optional(),
	}),
});

router.post(
	"/",
	authenticate,
	authorize("TEACHER", "COORDINATOR", "ADMIN"),
	validate(createSchema),
	createStudent,
);
router.get("/", authenticate, getStudents);
router.put(
	"/:id",
	authenticate,
	authorize("TEACHER", "COORDINATOR", "ADMIN"),
	validate(updateSchema),
	updateStudent,
);
router.delete(
	"/:id",
	authenticate,
	authorize("TEACHER", "COORDINATOR", "ADMIN"),
	deleteStudent,
);

export default router;