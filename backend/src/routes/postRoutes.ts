import { Router } from "express";
import {
	createPost,
	getClassPosts,
	getStudentPosts,
	deletePost,
} from "../controllers/PostController";
import { authenticate, authorize } from "../middleware/auth";

const router = Router();

// Create a post (Teacher, Admin, Coordinator)
router.post(
	"/",
	authenticate,
	authorize("TEACHER", "ADMIN", "COORDINATOR"),
	createPost,
);

// Get posts for a specific class (Class Wall) - All roles can view
router.get(
	"/class/:classId",
	authenticate,
	authorize("TEACHER", "ADMIN", "COORDINATOR", "FAMILY"),
	getClassPosts,
);

// Get posts for a specific student (Student Diary) - Teacher, Admin, Coordinator, Family
// Note: Family should only see their own student's posts. Middleware might need ensure access (logic in controller/middleware)
// For now, allow roles, controller validation can be added later or filtered by service logic if strict.
router.get(
	"/student/:studentId",
	authenticate,
	authorize("TEACHER", "ADMIN", "COORDINATOR", "FAMILY"),
	getStudentPosts,
);

// Delete a post (Teacher [author], Admin, Coordinator)
router.delete(
	"/:id",
	authenticate,
	authorize("TEACHER", "ADMIN", "COORDINATOR"),
	deletePost,
);

export default router;
