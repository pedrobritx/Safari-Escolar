import { Router } from "express";
import {
	createPost,
	getClassPosts,
	getStudentPosts,
	deletePost,
} from "../controllers/PostController";
import { authenticate, authorize } from "../middleware/auth";

const router = Router();

router.post(
	"/",
	authenticate,
	authorize("TEACHER", "ADMIN", "COORDINATOR"),
	createPost,
);

router.get(
	"/class/:classId",
	authenticate,
	authorize("TEACHER", "ADMIN", "COORDINATOR", "FAMILY"),
	getClassPosts,
);

router.get(
	"/student/:studentId",
	authenticate,
	authorize("TEACHER", "ADMIN", "COORDINATOR", "FAMILY"),
	getStudentPosts,
);

router.delete(
	"/:id",
	authenticate,
	authorize("TEACHER", "ADMIN", "COORDINATOR"),
	deletePost,
);

export default router;