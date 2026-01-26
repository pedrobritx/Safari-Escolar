import { Router } from "express";
import { authenticate, authorize } from "../middleware/auth";
import { createSchool, deleteSchool, getSchools, setSchoolCoordinator, updateSchool } from "../controllers/schoolController";

const router = Router();

router.get('/', authenticate, authorize('ADMIN'), getSchools);
router.post('/', authenticate, authorize('ADMIN'), createSchool);
router.put('/', authenticate, authorize('ADMIN'), updateSchool);
router.patch('/:schoolId', authenticate, authorize('ADMIN'), setSchoolCoordinator);
router.delete('/:schoolId', authenticate, authorize('ADMIN'), deleteSchool);

export default router;
