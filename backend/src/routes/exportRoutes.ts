import { Router } from "express";
import { authenticate, authorize } from "../middleware/auth";
import { exportStudents, exportHistory } from "../controllers/exportController";

const router = Router();

router.get("/students", authenticate, authorize("TEACHER"), exportStudents);
router.get("/history", authenticate, authorize("TEACHER"), exportHistory);

export default router;
