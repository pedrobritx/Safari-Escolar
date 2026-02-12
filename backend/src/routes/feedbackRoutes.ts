import { Router } from "express";
import { z } from "zod";
import {
	createFeedbackEvent,
	getFeedbackEvents,
	deleteFeedbackEvent,
} from "../controllers/feedbackController";
import { authenticate, authorize } from "../middleware/auth";
import { validate } from "../middleware/validate";

const feedbackRoutes = Router();

feedbackRoutes.use(authenticate);

const createSchema = z.object({
	body: z.object({
		studentId: z.string().min(1),
		type: z.enum(["positive", "negative"]),
		description: z.string().min(1),
		date: z.string().optional(),
	}),
});

feedbackRoutes.post(
	"/",
	authorize("TEACHER", "COORDINATOR", "ADMIN"),
	validate(createSchema),
	createFeedbackEvent,
);
feedbackRoutes.get(
	"/:studentId",
	authorize("TEACHER", "COORDINATOR", "ADMIN"),
	getFeedbackEvents,
);
feedbackRoutes.delete(
	"/:id",
	authorize("TEACHER", "COORDINATOR", "ADMIN"),
	deleteFeedbackEvent,
);

export default feedbackRoutes;